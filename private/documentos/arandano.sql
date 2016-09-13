CREATE TABLE Curso (
	curso_id int NOT NULL AUTO_INCREMENT,
	nombre varchar(256),
	imagen varchar(512),
	descripcion text,
	exp_id_f int NOT NULL,
	stu_id_f int NOT NULL,
	PRIMARY KEY (curso_id)
) engine=InnoDB CHARACTER SET UTF8;
CREATE TABLE Modulo (
	mod_id int NOT NULL AUTO_INCREMENT,
	nombre_mod varchar(256),
	img_mod varchar(256),
	curso_id_f int NOT NULL,
	PRIMARY KEY (mod_id)
) engine=InnoDB CHARACTER SET UTF8;
CREATE TABLE Bloque (
	bloque_id int NOT NULL AUTO_INCREMENT,
	img_url varchar(256),
	content text NOT NULL,
	mod_id_f int NOT NULL,
	stu_id_f int NOT NULL,
	PRIMARY KEY (bloque_id)
) engine=InnoDB CHARACTER SET UTF8;
CREATE TABLE Estudiante (
	stu_id int NOT NULL AUTO_INCREMENT,
	nickname varchar(64),
	nombre varchar(128),
	email varchar(256),
	password varchar(128),
	tipo int(1),
	PRIMARY KEY (stu_id)
) engine=InnoDB CHARACTER SET UTF8;
CREATE TABLE Profesor (
	prof_id int NOT NULL AUTO_INCREMENT,
	nickname varchar(64),
	nombre varchar(128),
	password varchar(128),
	email varchar(256),
	PRIMARY KEY (prof_id)
) engine=InnoDB CHARACTER SET UTF8;
CREATE TABLE Experto (
	exp_id int NOT NULL AUTO_INCREMENT,
	nombre_exp varchar(256),
	exp_pass varchar(128),
	PRIMARY KEY (exp_id)
) engine=InnoDB CHARACTER SET UTF8;
CREATE TABLE Progreso (
	Nivel int(1),
	fecha timestamp NULL,
	mod_id_f int NOT NULL,
	stu_id_f int NOT NULL) engine=InnoDB CHARACTER SET UTF8;
CREATE TABLE Profesor_Curso (
	Profesorprof_id int NOT NULL,
 	Cursocurso_id int NOT NULL,
 	PRIMARY KEY (Profesorprof_id,Cursocurso_id)
) engine=InnoDB CHARACTER SET UTF8;
ALTER TABLE Profesor_Curso ADD INDEX FKProfesor_C767515 (Profesorprof_id),
ADD CONSTRAINT FKProfesor_C767515 FOREIGN KEY (Profesorprof_id) REFERENCES Profesor (prof_id);
ALTER TABLE Profesor_Curso ADD INDEX FKProfesor_C800063 (Cursocurso_id),
ADD CONSTRAINT FKProfesor_C800063 FOREIGN KEY (Cursocurso_id) REFERENCES Curso (curso_id);
ALTER TABLE Curso ADD INDEX Crear (exp_id_f),
ADD CONSTRAINT Crear FOREIGN KEY (exp_id_f) REFERENCES Experto (exp_id);
ALTER TABLE Modulo ADD INDEX FKModulo188483 (curso_id_f),
ADD CONSTRAINT FKModulo188483 FOREIGN KEY (curso_id_f) REFERENCES Curso (curso_id);
ALTER TABLE Bloque ADD INDEX FKBloque704652 (mod_id_f),
ADD CONSTRAINT FKBloque704652 FOREIGN KEY (mod_id_f) REFERENCES Modulo (mod_id);
ALTER TABLE Curso ADD INDEX Inscribe (stu_id_f),
ADD CONSTRAINT Inscribe FOREIGN KEY (stu_id_f) REFERENCES Estudiante (stu_id);
ALTER TABLE Progreso ADD INDEX FKProgreso853449 (mod_id_f),
ADD CONSTRAINT FKProgreso853449 FOREIGN KEY (mod_id_f) REFERENCES Modulo (mod_id);
ALTER TABLE Bloque ADD INDEX Usar (stu_id_f),
ADD CONSTRAINT Usar FOREIGN KEY (stu_id_f) REFERENCES Estudiante (stu_id);
ALTER TABLE Progreso ADD INDEX FKProgreso943627 (stu_id_f),
ADD CONSTRAINT FKProgreso943627 FOREIGN KEY (stu_id_f) REFERENCES Estudiante (stu_id);
