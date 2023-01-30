USE rawData;

CREATE TABLE matchData(
	Match_Number INT NULL,
	Team_Number INT NULL,
	Scouter_Name TEXT NULL,
	Team_Alliance INT NULL,
	Competition TEXT NULL,
	Mobility BOOLEAN NULL,
	Show_Time BOOLEAN NULL,
	Auto_Cube_low INT NULL,
	Auto_Cube_Mid INT NULL,
	Auto_Cube_High INT NULL,
	Auto_Cone_low INT NULL,
	Auto_Cone_Mid INT NULL,
	Auto_Cone_High INT NULL,
	Auto_Station INT NULL,
	Tele_Cube_low INT NULL,
	Tele_Cube_Mid INT NULL,
	Tele_Cube_High INT NULL,
	Tele_Cone_low INT NULL,
	Tele_Cone_Mid INT NULL,
	Tele_Cone_High INT NULL,
	Tele_Station INT NULL,
	Comments TEXT NULL
);

CREATE TABLE pitData(
	Scouter_Name TEXT NULL,
	Team_Number INT NULL,
	Competition TEXT NULL,
	Team_Name TEXT NULL,
	DriveTrain INT NULL,
	Game_Piece INT NULL,
	Scoring_Location_Capability INT NULL,
	Numer_Of_Motors INT NULL,
	Number_Of_Batteries INT NULL,
	DriveTrain_Motor_Type TEXT NULL,
	Autos TEXT NULL,
	Comments TEXT NULL
);

CREATE TABLE dataAnalysis(
	Team_Number INT NOT NULL,
	Auto_Low_Min INT,
	Auto_Low_Average FLOAT,
	Auto_low_Max INT,
	Auto_Mid_Min INT,
	Auto_Mid_Average FLOAT,
	Auto_Mid_Max INT,
	Auto_High_Min INT,
	Auto_High_Average FLOAT,
	Auto_High_Max INT,
	Tele_Low_Min INT,
	Tele_Low_Average FLOAT,
	Tele_Low_Max INT,
	Tele_Mid_Min INT,
	Tele_Mid_Average FLOAT,
	Tele_Mid_Max INT,
	Tele_High_Min INT,
	Tele_High_Average FLOAT,
	Tele_High_Max INT,
	Average_Fouls INT,
	Game_Piece INT NULL,
	Comments TEXT NULL,
	PRIMARY KEY(Team_Number)
);