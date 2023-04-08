USE rawData;

CREATE TABLE matchData(
	id INT NOT NULL AUTO_INCREMENT,
	Match_Number INT NOT NULL,
	Team_Number INT NULL,
	Scouter_Name TEXT NULL,
	Team_Alliance INT NOT NULL,
	Competition TEXT NULL,
	Mobility BOOLEAN NULL,
	Auto_Cube_Low INT NULL,
	Auto_Cube_Mid INT NULL,
	Auto_Cube_High INT NULL,
	Auto_Cone_Low INT NULL,
	Auto_Cone_Mid INT NULL,
	Auto_Cone_High INT NULL,
	Auto_Station INT NULL,
	Tele_Cube_Low INT NULL,
	Tele_Cube_Mid INT NULL,
	Tele_Cube_High INT NULL,
	Tele_Cone_Low INT NULL,
	Tele_Cone_Mid INT NULL,
	Tele_Cone_High INT NULL,
	Tele_Station INT NULL,
	No_Show_Robot BOOLEAN NULL,
	Comments TEXT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE chargeStation(
	Team_Number INT NULL,
	No_Points INT NULL,
	/* if Tele_Station in matchData is euqal to 0, then add a point to No_Points*/
	Parked INT NULL,
	/* if Tele_Station in matchData is euqal to 1, then add a point to Parked*/
	Failed_To_Dock INT NULL,
	/* if Tele_Station in matchData is euqal to 2, then add a point to Failed_To_Dock*/
	Docked INT NULL,
	/* if Tele_Station in matchData is euqal to 3, then add a point to Docked*/
	Engaged INT NULL
	/* if Tele_Station in matchData is euqal to 4, then add a point to Engaged*/
);


CREATE TABLE pitData(
	Scouter_Name TEXT NULL,
	Team_Number INT NOT NULL,
	Competition TEXT NULL,
	Team_Name TEXT NULL,
	DriveTrain INT NULL,
	Can_Hold_Cone BOOLEAN NULL,
	Can_Hold_Cube BOOLEAN NULL,
	Scoring_Location_Capability INT NULL,
	Number_Of_Motors INT NULL,
	Number_Of_Batteries INT NULL,
	DriveTrain_Motor_Type TEXT NULL,
	Working_On TEXT NULL,
	Autos TEXT NULL,
	Comments TEXT NULL,
	PRIMARY KEY (Team_Number)
);

CREATE TABLE superScout(
	id INT NOT NULL AUTO_INCREMENT,
	Scouter_Name TEXT NULL,
	Competition TEXT NULL,
	Match_Number INT NOT NULL,
	Team_Alliance INT NOT NULL,
	Team INT NULL,
	Defense INT NULL,
	Comments TEXT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE fouls(
	id INT NOT NULL AUTO_INCREMENT,
	Scouter_Name TEXT NULL, 
	Competition TEXT NULL,
	Match_Number INT NULL,
	Team_Alliance INT NULL,
	Team_Number INT NULL,
	Cause INT NULL,
	Comments TEXT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE dataAnalysis(
	Team_Number INT NOT NULL,
	Auto_Total_Average FLOAT,
	Auto_Total_Max FLOAT,
	Auto_Low_Average FLOAT,
	Auto_Low_Max INT,
	Auto_Mid_Average FLOAT,
	Auto_Mid_Max INT,
	Auto_High_Average FLOAT,
	Auto_High_Max INT,
	Auto_Balance_Frequency FLOAT,
	Tele_Pieces_Total_Average FLOAT,
	Tele_Pieces_Total_Max INT,
	Tele_Pieces_Low_Average FLOAT,
	Tele_Pieces_Low_Max INT,
	Tele_Pieces_Mid_Average FLOAT,
	Tele_Pieces_Mid_Max INT,
	Tele_Pieces_High_Average FLOAT,
	Tele_Pieces_High_Max INT,
	Tele_Cone_Total_Average FLOAT,
	Tele_Cone_Total_Max INT,
	Tele_Cone_Low_Average FLOAT,
	Tele_Cone_Low_Max INT,
	Tele_Cone_Mid_Average FLOAT,
	Tele_Cone_Mid_Max INT,
	Tele_Cone_High_Average FLOAT,
	Tele_Cone_High_Max INT,
	Tele_Cube_Total_Average FLOAT,
	Tele_Cube_Total_Max INT,
	Tele_Cube_Low_Average FLOAT,
	Tele_Cube_Low_Max INT,
	Tele_Cube_Mid_Average FLOAT,
	Tele_Cube_Mid_Max INT,
	Tele_Cube_High_Average FLOAT,
	Tele_Cube_High_Max INT,
	Failed_To_Dock_Ratio FLOAT,
	End_Dock_Frequency FLOAT,
	End_Balance_Frequency FLOAT,
	Average_Fouls FLOAT,
	Total_Pin_Fouls INT,
	Total_Disabled_Fouls INT,
	Total_Overextension_Fouls INT,
	Total_Inside_Robot_Fouls INT,
	Total_Multiple_Pieces_Fouls INT,
	Total_Inside_Protected_Fouls INT,
	Average_Teleop_Points FLOAT,
	Average_Auto_Points FLOAT,
	PRIMARY KEY(Team_Number)
);
