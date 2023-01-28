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

CREATE TABLE dataAnalysis()