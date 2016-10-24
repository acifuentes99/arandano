SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

CREATE TABLE `bloque` (
  `bloque_id` int(11) NOT NULL,
  `img_url` varchar(256) DEFAULT NULL,
  `content` text NOT NULL,
  `mod_id_f` int(11) NOT NULL,
  `stu_id_f` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `curso` (
  `curso_id` int(11) NOT NULL,
  `nombre` varchar(256) DEFAULT NULL,
  `imagen` varchar(512) DEFAULT NULL,
  `descripcion` text,
  `exp_id_f` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `curso_estudiante` (
  `curso_id` int(11) NOT NULL,
  `stu_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `estudiante` (
  `stu_id` int(11) NOT NULL,
  `nickname` varchar(64) DEFAULT NULL,
  `nombre` varchar(128) DEFAULT NULL,
  `email` varchar(256) DEFAULT NULL,
  `password` varchar(128) DEFAULT NULL,
  `tipo` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `experto` (
  `exp_id` int(11) NOT NULL,
  `nombre_exp` varchar(256) DEFAULT NULL,
  `exp_pass` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `experto` (`exp_id`, `nombre_exp`, `exp_pass`) VALUES
(1, 'felipe avaria', '1234');

CREATE TABLE `modulo` (
  `mod_id` int(11) NOT NULL,
  `nombre_mod` varchar(256) DEFAULT NULL,
  `img_mod` varchar(256) DEFAULT NULL,
  `curso_id_f` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `profesor` (
  `prof_id` int(11) NOT NULL,
  `nickname` varchar(64) DEFAULT NULL,
  `nombre` varchar(128) DEFAULT NULL,
  `password` varchar(128) DEFAULT NULL,
  `email` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `profesor_curso` (
  `Profesorprof_id` int(11) NOT NULL,
  `Cursocurso_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `progreso` (
  `Nivel` int(1) DEFAULT NULL,
  `fecha` timestamp NULL DEFAULT NULL,
  `mod_id_f` int(11) NOT NULL,
  `stu_id_f` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


ALTER TABLE `bloque`
  ADD PRIMARY KEY (`bloque_id`),
  ADD KEY `FKBloque704652` (`mod_id_f`),
  ADD KEY `Usar` (`stu_id_f`);

ALTER TABLE `curso`
  ADD PRIMARY KEY (`curso_id`),
  ADD KEY `Crear` (`exp_id_f`);

ALTER TABLE `curso_estudiante`
  ADD PRIMARY KEY (`curso_id`),
  ADD UNIQUE KEY `stu_id` (`stu_id`);

ALTER TABLE `estudiante`
  ADD PRIMARY KEY (`stu_id`);

ALTER TABLE `experto`
  ADD PRIMARY KEY (`exp_id`);

ALTER TABLE `modulo`
  ADD PRIMARY KEY (`mod_id`),
  ADD KEY `FKModulo188483` (`curso_id_f`);

ALTER TABLE `profesor`
  ADD PRIMARY KEY (`prof_id`);

ALTER TABLE `profesor_curso`
  ADD PRIMARY KEY (`Profesorprof_id`,`Cursocurso_id`),
  ADD KEY `FKProfesor_C767515` (`Profesorprof_id`),
  ADD KEY `FKProfesor_C800063` (`Cursocurso_id`);

ALTER TABLE `progreso`
  ADD KEY `FKProgreso853449` (`mod_id_f`),
  ADD KEY `FKProgreso943627` (`stu_id_f`);


ALTER TABLE `bloque`
  MODIFY `bloque_id` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `curso`
  MODIFY `curso_id` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `estudiante`
  MODIFY `stu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
ALTER TABLE `experto`
  MODIFY `exp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
ALTER TABLE `modulo`
  MODIFY `mod_id` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `profesor`
  MODIFY `prof_id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `bloque`
  ADD CONSTRAINT `FKBloque704652` FOREIGN KEY (`mod_id_f`) REFERENCES `modulo` (`mod_id`),
  ADD CONSTRAINT `Usar` FOREIGN KEY (`stu_id_f`) REFERENCES `estudiante` (`stu_id`);

ALTER TABLE `curso`
  ADD CONSTRAINT `Crear` FOREIGN KEY (`exp_id_f`) REFERENCES `experto` (`exp_id`);

ALTER TABLE `curso_estudiante`
  ADD CONSTRAINT `curso_estudiante_ibfk_1` FOREIGN KEY (`curso_id`) REFERENCES `curso` (`curso_id`),
  ADD CONSTRAINT `curso_estudiante_ibfk_2` FOREIGN KEY (`stu_id`) REFERENCES `estudiante` (`stu_id`);

ALTER TABLE `modulo`
  ADD CONSTRAINT `FKModulo188483` FOREIGN KEY (`curso_id_f`) REFERENCES `curso` (`curso_id`);

ALTER TABLE `profesor_curso`
  ADD CONSTRAINT `FKProfesor_C767515` FOREIGN KEY (`Profesorprof_id`) REFERENCES `profesor` (`prof_id`),
  ADD CONSTRAINT `FKProfesor_C800063` FOREIGN KEY (`Cursocurso_id`) REFERENCES `curso` (`curso_id`);

ALTER TABLE `progreso`
  ADD CONSTRAINT `FKProgreso853449` FOREIGN KEY (`mod_id_f`) REFERENCES `modulo` (`mod_id`),
  ADD CONSTRAINT `FKProgreso943627` FOREIGN KEY (`stu_id_f`) REFERENCES `estudiante` (`stu_id`);
