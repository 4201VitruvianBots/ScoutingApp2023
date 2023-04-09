import pandas as pd
import numpy as np
import mysql.connector

class Auto_Station:
    noPoints = 0
    failed = 1
    docked = 2
    engaged = 3


class Tele_Station:
    noPoints = 0
    parked = 1
    failed = 2
    docked = 3
    engaged = 4
    
def div(a, b):
    if b == 0:
        return None
    return a / b


def calculateMatchScores(matches_df, *, mutate=False):
    if mutate:
        output_df = matches_df
    else:
        output_df = matches_df.copy()

    output_df['Tele_Low_Cycles'] = (output_df['Tele_Cube_Low'] + output_df['Tele_Cone_Low'])
    output_df['Tele_Mid_Cycles'] = (output_df['Tele_Cube_Mid'] + output_df['Tele_Cone_Mid'])
    output_df['Tele_High_Cycles'] = (output_df['Tele_Cube_High'] + output_df['Tele_Cone_High'])

    output_df['Auto_Grid_Points'] = 3 * (output_df['Auto_Cube_Low'] + output_df['Auto_Cone_Low']) + 4 * (output_df['Auto_Cube_Mid'] + output_df['Auto_Cone_Mid']) + 6 * (output_df['Auto_Cube_High'] + output_df['Auto_Cone_High'])
    output_df['Tele_Grid_Points'] =  2 * output_df['Tele_Low_Cycles'] + 3 * output_df['Tele_Mid_Cycles'] + 5 * output_df['Tele_High_Cycles']
    output_df['Tele_Total_Cycles'] =  output_df['Tele_Low_Cycles'] + output_df['Tele_Mid_Cycles'] + output_df['Tele_High_Cycles']
    # output_df['Assumed_Link_Points'] = 5 / 3 * (output_df['Auto_Cube_Low'] + output_df['Auto_Cone_Low'] + output_df['Tele_Cube_Low'] + output_df['Tele_Cone_Low'] + output_df['Auto_Cube_Mid'] + output_df['Auto_Cone_Mid'] + output_df['Tele_Cube_Mid'] + output_df['Tele_Cone_Mid'] + output_df['Auto_Cube_High'] + output_df['Auto_Cone_High'] + output_df['Tele_Cube_High'] + output_df['Tele_Cone_High'])
    output_df['Assumed_Link_Points'] = 0

    output_df['Mobility_Points'] = output_df['Mobility'].map({0: 0, 1: 3})
    output_df['Auto_Station_Points'] = output_df['Auto_Station'].map({Auto_Station.noPoints: 0, Auto_Station.failed: 0, Auto_Station.docked: 8, Auto_Station.engaged: 12})
    output_df['Tele_Station_Points'] = output_df['Tele_Station'].map({Tele_Station.noPoints: 0, Tele_Station.parked: 0, Tele_Station.failed: 0, Tele_Station.docked: 8, Tele_Station.engaged: 12})

    output_df['Total_Auto_Points'] = output_df['Auto_Grid_Points'] + output_df['Auto_Station_Points'] + output_df['Mobility_Points']
    output_df['Total_Tele_Points'] = output_df['Tele_Grid_Points'] + output_df['Tele_Station_Points'] + output_df['Assumed_Link_Points']
    output_df['Total_Points'] = output_df['Total_Auto_Points'] + output_df['Total_Tele_Points']
    
    return output_df

def calculateMatchAnalysis(Team_Number, db_connection, *, appendTo = {}):
    matches_df = pd.read_sql('SELECT * FROM matchData WHERE Team_Number = %s AND No_Show_Robot = FALSE', db_connection, params=(Team_Number,))
    matches_df = calculateMatchScores(matches_df)
    
    analysis_output = appendTo
    analysis_output['Team_Number'] = Team_Number

    for type_phase, prefixes in ('Auto', ('Auto_Cone', 'Auto_Cube')), ('Tele_Pieces', ('Tele_Cone', 'Tele_Cube')), ('Tele_Cone', ('Tele_Cone',)), ('Tele_Cube', ('Tele_Cube',)):

        for level in 'Total', 'Low', 'Mid', 'High':
            suffixes = ('Low', 'Mid', 'High') if level == 'Total' else (level,)

            included_columns = [f"{prefix}_{suffix}" for prefix in prefixes for suffix in suffixes]

            analysis_output[f'{type_phase}_{level}_Average'] = matches_df[included_columns].sum(axis=1).mean()
            analysis_output[f'{type_phase}_{level}_Max'] = matches_df[included_columns].sum(axis=1).max()

    analysis_output['End_Balance_Frequency'] = div((matches_df['Tele_Station'] == Tele_Station.engaged).sum(), (matches_df['Tele_Station'].isin((Tele_Station.failed, Tele_Station.docked, Tele_Station.engaged))).sum())
    analysis_output['End_Dock_Frequency'] = div((matches_df['Tele_Station'].isin((Tele_Station.engaged, Tele_Station.docked))).sum(), (matches_df['Tele_Station'].isin((Tele_Station.failed, Tele_Station.docked, Tele_Station.engaged))).sum())

    analysis_output['Auto_Balance_Frequency'] = div((matches_df['Auto_Station'] == Auto_Station.engaged).sum(), (matches_df['Auto_Station'].isin((Auto_Station.failed, Auto_Station.docked, Auto_Station.engaged))).sum())
    analysis_output['Auto_Dock_Frequency'] = div((matches_df['Auto_Station'].isin((Auto_Station.engaged, Auto_Station.docked))).sum(), (matches_df['Auto_Station'].isin((Auto_Station.failed, Auto_Station.docked, Auto_Station.engaged))).sum())

    analysis_output['Average_Teleop_Points'] = matches_df['Total_Tele_Points'].mean()
    analysis_output['Average_Auto_Points'] = matches_df['Total_Auto_Points'].mean()

    # Convert to ints
    for i in analysis_output:
        if isinstance(analysis_output[i], np.int64):
            analysis_output[i] = int(analysis_output[i])
    
    return analysis_output

def calculateSuperScoutAnalysis(Team_Number, db_connection, *, appendTo = {}):
    superScout_df = pd.read_sql('SELECT * FROM superScout WHERE Team_Number = %s', db_connection, params=(Team_Number,))
    fouls_df = pd.read_sql('SELECT * FROM fouls WHERE Team_Number = %s', db_connection, params=(Team_Number,))
    
    analysis_output = appendTo
    analysis_output['Team_Number'] = Team_Number

    analysis_output['Average_Fouls'] = div(fouls_df.size, superScout_df.size)
    # mycursor.execute("UPDATE dataAnalysis SET Average_Fouls = (SELECT COUNT(*) FROM fouls WHERE Team_Number = %s) / (SELECT COUNT(*) FROM superScout WHERE Team = %s) WHERE Team_Number = %s", (Team_Number,Team_Number,Team_Number))
    for index, name in (1, 'Pin'), (2, 'Disabled'), (3, 'Overextension'), (4, 'Inside_Robot'), (5, 'Multiple_Pieces'), (6, 'Inside_Protected'):
        analysis_output[f'Total_{name}_Fouls'] = (fouls_df['Cause'] == index).sum()
        # mycursor.execute(f"UPDATE dataAnalysis SET Total_{name}_Fouls = (SELECT COUNT(*) FROM fouls WHERE Team_Number = %s AND CAUSE = %s) WHERE Team_Number = %s", (Team_Number, index, Team_Number))

    # Convert to ints
    for i in analysis_output:
        if isinstance(analysis_output[i], np.int64):
            analysis_output[i] = int(analysis_output[i])
    
    return analysis_output

if __name__ == '__main__':
    mydb = mysql.connector.connect(
      host="localhost",
      user="root",
      passwd="my-secret-pw",
      database="rawData"
    )

    print(calculateMatchAnalysis(8898))
    mydb.close()
