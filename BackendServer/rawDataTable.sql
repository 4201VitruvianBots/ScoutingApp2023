USE rawData;

CREATE TABLE rawData(
	Match_Number BIGINT NULL,
	Team_number BIGINT NULL,
	Scouter_Name TEXT NULL,
	Team_Alliance INT NULL,
	Competition TEXT NULL,
	Mobility INT NULL,
	Auto_Cube_low INT NULL,
	Auto_Cube_Mid INT NULL,
	Auto_Cube_High INT NULL,
	Auto_Cone_low INT NULL,
	Auto_Cone_Mid INT NULL,
	Auto_Cone_High INT NULL,
	Tele_Cube_low INT NULL,
	Tele_Cube_Mid INT NULL,
	Tele_Cube_High INT NULL,
	Tele_Cone_low INT NULL,
	Tele_Cone_Mid INT NULL,
	Tele_Cone_High INT NULL,
	Auto_Station INT NULL,
	Tele_Station INT NULL,
	Comments LONGTEXT NULL
);
