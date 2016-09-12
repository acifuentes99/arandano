-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 12, 2016 at 01:14 AM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 7.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `arandano`
--

-- --------------------------------------------------------

--
-- Table structure for table `Bloque`
--

CREATE TABLE `Bloque` (
  `bloque_id` int(11) NOT NULL,
  `img_url` varchar(256) DEFAULT NULL,
  `content` text NOT NULL,
  `mod_id_f` int(11) NOT NULL,
  `stu_id_f` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Curso`
--

CREATE TABLE `Curso` (
  `curso_id` int(11) NOT NULL,
  `nombre` varchar(256) DEFAULT NULL,
  `imagen` varchar(512) DEFAULT NULL,
  `descripcion` text,
  `exp_id_f` int(11) NOT NULL,
  `stu_id_f` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Estudiante`
--

CREATE TABLE `Estudiante` (
  `stu_id` int(11) NOT NULL,
  `nickname` varchar(64) DEFAULT NULL,
  `nombre` varchar(128) DEFAULT NULL,
  `email` varchar(256) DEFAULT NULL,
  `password` varchar(128) DEFAULT NULL,
  `tipo` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Estudiante`
--

INSERT INTO `Estudiante` (`stu_id`, `nickname`, `nombre`, `email`, `password`, `tipo`) VALUES
(1, 'qwert', 'asdf', 'no_es_aecifuentesv@gmail.com', 'undefined', 3),
(2, 'dsffaf', 'fasdfda', 'no_es_aecifuentesv@gmail.com', 'undefined', 2),
(3, 'felipe', 'felipe avaria', 'no_es_felipe.avariairi@gmail.com', 'undefined', 3),
(4, 'martillo', 'Jose Caimapo', 'noes_aecifuentesv@gmail.com', 'undefined', 3),
(5, 'ffffff', 'dfasfdsfd', 'hola@gmail.com', 'undefined', 1),
(6, 'ffffff', 'dfasfdsfd', 'hola@gmail.com', 'undefined', 1),
(7, 'hjkhjk', 'gug', 'aecifuentesv@gmail.com', 'undefined', 3),
(8, 'dsfsfda', 'fda', 'aecifuentesv@gmail.com', 'undefined', 3),
(9, 'nnnnnn', 'kljklfjdslka', 'aecifuentesv@gmail.com', 'undefined', 2);

-- --------------------------------------------------------

--
-- Table structure for table `Experto`
--

CREATE TABLE `Experto` (
  `exp_id` int(11) NOT NULL,
  `nombre_exp` varchar(256) DEFAULT NULL,
  `exp_pass` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Modulo`
--

CREATE TABLE `Modulo` (
  `mod_id` int(11) NOT NULL,
  `nombre_mod` varchar(256) DEFAULT NULL,
  `img_mod` varchar(256) DEFAULT NULL,
  `curso_id_f` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Profesor`
--

CREATE TABLE `Profesor` (
  `prof_id` int(11) NOT NULL,
  `nickname` varchar(64) DEFAULT NULL,
  `nombre` varchar(128) DEFAULT NULL,
  `password` varchar(128) DEFAULT NULL,
  `email` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Profesor_Curso`
--

CREATE TABLE `Profesor_Curso` (
  `Profesorprof_id` int(11) NOT NULL,
  `Cursocurso_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Progreso`
--

CREATE TABLE `Progreso` (
  `Nivel` int(1) DEFAULT NULL,
  `fecha` timestamp NULL DEFAULT NULL,
  `mod_id_f` int(11) NOT NULL,
  `stu_id_f` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Bloque`
--
ALTER TABLE `Bloque`
  ADD PRIMARY KEY (`bloque_id`),
  ADD KEY `FKBloque704652` (`mod_id_f`),
  ADD KEY `Usar` (`stu_id_f`);

--
-- Indexes for table `Curso`
--
ALTER TABLE `Curso`
  ADD PRIMARY KEY (`curso_id`),
  ADD KEY `Crear` (`exp_id_f`),
  ADD KEY `Inscribe` (`stu_id_f`);

--
-- Indexes for table `Estudiante`
--
ALTER TABLE `Estudiante`
  ADD PRIMARY KEY (`stu_id`);

--
-- Indexes for table `Experto`
--
ALTER TABLE `Experto`
  ADD PRIMARY KEY (`exp_id`);

--
-- Indexes for table `Modulo`
--
ALTER TABLE `Modulo`
  ADD PRIMARY KEY (`mod_id`),
  ADD KEY `FKModulo188483` (`curso_id_f`);

--
-- Indexes for table `Profesor`
--
ALTER TABLE `Profesor`
  ADD PRIMARY KEY (`prof_id`);

--
-- Indexes for table `Profesor_Curso`
--
ALTER TABLE `Profesor_Curso`
  ADD PRIMARY KEY (`Profesorprof_id`,`Cursocurso_id`),
  ADD KEY `FKProfesor_C767515` (`Profesorprof_id`),
  ADD KEY `FKProfesor_C800063` (`Cursocurso_id`);

--
-- Indexes for table `Progreso`
--
ALTER TABLE `Progreso`
  ADD KEY `FKProgreso853449` (`mod_id_f`),
  ADD KEY `FKProgreso943627` (`stu_id_f`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Bloque`
--
ALTER TABLE `Bloque`
  MODIFY `bloque_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Curso`
--
ALTER TABLE `Curso`
  MODIFY `curso_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Estudiante`
--
ALTER TABLE `Estudiante`
  MODIFY `stu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `Experto`
--
ALTER TABLE `Experto`
  MODIFY `exp_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Modulo`
--
ALTER TABLE `Modulo`
  MODIFY `mod_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Profesor`
--
ALTER TABLE `Profesor`
  MODIFY `prof_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `Bloque`
--
ALTER TABLE `Bloque`
  ADD CONSTRAINT `FKBloque704652` FOREIGN KEY (`mod_id_f`) REFERENCES `Modulo` (`mod_id`),
  ADD CONSTRAINT `Usar` FOREIGN KEY (`stu_id_f`) REFERENCES `Estudiante` (`stu_id`);

--
-- Constraints for table `Curso`
--
ALTER TABLE `Curso`
  ADD CONSTRAINT `Crear` FOREIGN KEY (`exp_id_f`) REFERENCES `Experto` (`exp_id`),
  ADD CONSTRAINT `Inscribe` FOREIGN KEY (`stu_id_f`) REFERENCES `Estudiante` (`stu_id`);

--
-- Constraints for table `Modulo`
--
ALTER TABLE `Modulo`
  ADD CONSTRAINT `FKModulo188483` FOREIGN KEY (`curso_id_f`) REFERENCES `Curso` (`curso_id`);

--
-- Constraints for table `Profesor_Curso`
--
ALTER TABLE `Profesor_Curso`
  ADD CONSTRAINT `FKProfesor_C767515` FOREIGN KEY (`Profesorprof_id`) REFERENCES `Profesor` (`prof_id`),
  ADD CONSTRAINT `FKProfesor_C800063` FOREIGN KEY (`Cursocurso_id`) REFERENCES `Curso` (`curso_id`);

--
-- Constraints for table `Progreso`
--
ALTER TABLE `Progreso`
  ADD CONSTRAINT `FKProgreso853449` FOREIGN KEY (`mod_id_f`) REFERENCES `Modulo` (`mod_id`),
  ADD CONSTRAINT `FKProgreso943627` FOREIGN KEY (`stu_id_f`) REFERENCES `Estudiante` (`stu_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
