import pandas as pd
import numpy as np
import mysql.connector
from enum import Enum
import json

class AutoStation:
    noPoints = 0
    failed = 1
    docked = 2
    engaged = 3


class TeleStation:
    noPoints = 0
    parked = 1
    failed = 2
    docked = 3
    engaged = 4

AUTO_ATTEMPTED_DOCK_STATES = (AutoStation.failed, AutoStation.docked, AutoStation.engaged)
AUTO_SUCCESSFUL_DOCK_STATES = (AutoStation.docked, AutoStation.engaged)

TELE_ATTEMPTED_DOCK_STATES = (TeleStation.failed, TeleStation.docked, TeleStation.engaged)
TELE_SUCCESSFUL_DOCK_STATES = (TeleStation.docked, TeleStation.engaged)
    
# Safe division function to return None if division by zero so that it becomes NULL in the database
def div(a, b):
    if b == 0:
        return None
    return a / b

# Does processing on a df of matches to get combined statistics
def calculate_match_scores(matches_df, *, mutate=False):
    if mutate:
        output_df = matches_df
    else:
        output_df = matches_df.copy()

    # Calculate cycle counts
    output_df['Tele_Low_Cycles'] = output_df['Tele_Cube_Low'] + output_df['Tele_Cone_Low']
    output_df['Tele_Mid_Cycles'] = output_df['Tele_Cube_Mid'] + output_df['Tele_Cone_Mid']
    output_df['Tele_High_Cycles'] = output_df['Tele_Cube_High'] + output_df['Tele_Cone_High']
    output_df['Tele_Total_Cycles'] =  output_df['Tele_Low_Cycles'] + output_df['Tele_Mid_Cycles'] + output_df['Tele_High_Cycles']

    # Calculate grid points
    output_df['Auto_Grid_Points'] = 3 * (output_df['Auto_Cube_Low'] + output_df['Auto_Cone_Low']) + 4 * (output_df['Auto_Cube_Mid'] + output_df['Auto_Cone_Mid']) + 6 * (output_df['Auto_Cube_High'] + output_df['Auto_Cone_High'])
    output_df['Tele_Grid_Points'] =  2 * output_df['Tele_Low_Cycles'] + 3 * output_df['Tele_Mid_Cycles'] + 5 * output_df['Tele_High_Cycles']
    
    # Link points
    # output_df['Assumed_Link_Points'] = 5 / 3 * (output_df['Auto_Cube_Low'] + output_df['Auto_Cone_Low'] + output_df['Tele_Cube_Low'] + output_df['Tele_Cone_Low'] + output_df['Auto_Cube_Mid'] + output_df['Auto_Cone_Mid'] + output_df['Tele_Cube_Mid'] + output_df['Tele_Cone_Mid'] + output_df['Auto_Cube_High'] + output_df['Auto_Cone_High'] + output_df['Tele_Cube_High'] + output_df['Tele_Cone_High'])
    output_df['Assumed_Link_Points'] = 0

    # Calculate mobility/station points
    output_df['Mobility_Points'] = output_df['Mobility'].map({0: 0, 1: 3})
    output_df['Auto_Station_Points'] = output_df['Auto_Station'].map({AutoStation.noPoints: 0, AutoStation.failed: 0, AutoStation.docked: 8, AutoStation.engaged: 12})
    output_df['Tele_Station_Points'] = output_df['Tele_Station'].map({TeleStation.noPoints: 0, TeleStation.parked: 0, TeleStation.failed: 0, TeleStation.docked: 8, TeleStation.engaged: 12})

    # Total points
    output_df['Total_Auto_Points'] = output_df['Auto_Grid_Points'] + output_df['Auto_Station_Points'] + output_df['Mobility_Points']
    output_df['Total_Tele_Points'] = output_df['Tele_Grid_Points'] + output_df['Tele_Station_Points'] + output_df['Assumed_Link_Points']
    output_df['Total_Points'] = output_df['Total_Auto_Points'] + output_df['Total_Tele_Points']
    
    return output_df

def calculate_match_analysis(Team_Number, db_connection, *, appendTo = {}):
    # Read data from MySQL database
    matches_df = pd.read_sql('SELECT * FROM matchData WHERE Team_Number = %s AND No_Show_Robot = FALSE', db_connection, params=(Team_Number,))

    # Calculate additional scores
    calculate_match_scores(matches_df, mutate=True)

    # Create output variable
    analysis_output = appendTo
    # analysis_output = pd.DataFrame()
    # matches_df = matches_df.groupby('Team_Number')
    
    # Insert team number
    # analysis_output['Team_Number'] = Team_Number

    # Calculate scoring aggregates
    for type_phase, prefixes in (
        ('Auto',        ('Auto_Cone', 'Auto_Cube')),
        ('Tele_Pieces', ('Tele_Cone', 'Tele_Cube')),
        ('Tele_Cone',   ('Tele_Cone',)),
        ('Tele_Cube',   ('Tele_Cube',))
    ):
        for level, suffixes in (
            ('Total', ('Low', 'Mid', 'High')),
            ('Low',   ('Low',)),
            ('Mid',   ('Mid',)),
            ('High',  ('High',))
        ):
            # Get names of all the columns we want
            included_columns = [f"{prefix}_{suffix}" for prefix in prefixes for suffix in suffixes]
            
            # Sum up all of the included columns
            totaled_data = matches_df[included_columns].sum(axis=1)

            # Calculate aggregations
            analysis_output[f'{type_phase}_{level}_Average'] = totaled_data.mean()
            analysis_output[f'{type_phase}_{level}_Max'] =     totaled_data.max()
            # analysis_output[f'{type_phase}_{level}_Min'] =     totaled_data.min()
            # analysis_output[f'{type_phase}_{level}_StDev'] =   totaled_data.std()

    # Calculate station frequencies
    # The `.sum()`s in this section add up all the `True`s returned by the comparison, in efect counting how many satisfy the condition
    tele_station_attempts = (matches_df['Tele_Station'].isin(TELE_ATTEMPTED_DOCK_STATES)).sum()
    analysis_output['End_Balance_Frequency'] = div((matches_df['Tele_Station'] == TeleStation.engaged).sum(), tele_station_attempts)
    analysis_output['End_Dock_Frequency'] = div((matches_df['Tele_Station'].isin(TELE_SUCCESSFUL_DOCK_STATES)).sum(), tele_station_attempts)

    auto_station_attempts = (matches_df['Auto_Station'].isin(AUTO_ATTEMPTED_DOCK_STATES)).sum()
    analysis_output['Auto_Balance_Frequency'] = div((matches_df['Auto_Station'] == AutoStation.engaged).sum(), auto_station_attempts)
    analysis_output['Auto_Dock_Frequency'] = div((matches_df['Auto_Station'].isin(AUTO_SUCCESSFUL_DOCK_STATES)).sum(), auto_station_attempts)

    # Calculate average period points
    analysis_output['Average_Teleop_Points'] = matches_df['Total_Tele_Points'].mean()
    analysis_output['Average_Auto_Points'] = matches_df['Total_Auto_Points'].mean()

    # Convert to ints
    for i in analysis_output:
        if isinstance(analysis_output[i], np.int64):
            analysis_output[i] = int(analysis_output[i])
    
    return analysis_output

def calculate_super_scout_analysis(Team_Number, db_connection, *, appendTo = {}):
    # Read data from MySQL database
    superScout_df = pd.read_sql('SELECT * FROM superScout WHERE Team_Number = %s', db_connection, params=(Team_Number,))
    fouls_df = pd.read_sql('SELECT * FROM fouls WHERE Team_Number = %s', db_connection, params=(Team_Number,))
    
    # Create output variable
    analysis_output = appendTo
    
    # Insert team number
    # analysis_output['Team_Number'] = Team_Number

    # Calculate average fouls
    analysis_output['Average_Fouls'] = div(fouls_df.size, superScout_df.size)

    #Calculate defense ranking
    non_zero_defense = (superScout_df['Defense'] != 0)
    if non_zero_defense.any():
        analysis_output['Average_Defense'] = superScout_df[non_zero_defense]['Defense'].mean()
    else:
        analysis_output['Average_Defense'] = None
    
    # Calculate total of each type of foul
    for index, name in (
        (1, 'Pin'),
        (2, 'Disabled'),
        (3, 'Overextension'),
        (4, 'Inside_Robot'),
        (5, 'Multiple_Pieces'),
        (6, 'Inside_Protected')
    ):
        analysis_output[f'Total_{name}_Fouls'] = (fouls_df['Cause'] == index).sum()

    # Convert to ints
    for i in analysis_output:
        if isinstance(analysis_output[i], np.int64):
            analysis_output[i] = int(analysis_output[i])
    
    return analysis_output

# def save_analysis_data(db_connection):
#     matches_df = pd.read_sql('SELECT * FROM matchData', db_connection)
#     team_numbers = matches_df['Team_Number'].unique()
#     with open('output.json', 'w') as file:
#         file.write(json.dumps({
#             'data': [calculate_match_analysis(team_number, db_connection) for team_number in team_numbers]
#         }))

# If running directly (i.e. with `python analysis.py`) run debug code
if __name__ == '__main__':
    mydb = mysql.connector.connect(
      host="localhost",
      user="root",
      passwd="my-secret-pw",
      database="rawData"
    )

    print(calculate_match_analysis(8600, mydb))
    mydb.close()
