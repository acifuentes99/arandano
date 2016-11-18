-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 06, 2016 at 09:44 PM
-- Server version: 10.1.18-MariaDB
-- PHP Version: 7.0.12

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
-- Table structure for table `bloque`
--

CREATE TABLE `bloque` (
  `bloque_id` int(11) NOT NULL,
  `img_url` varchar(256) DEFAULT NULL,
  `content` text NOT NULL,
  `mod_id_f` int(11) NOT NULL,
  `tipo` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bloque`
--

INSERT INTO `bloque` (`bloque_id`, `img_url`, `content`, `mod_id_f`, `tipo`) VALUES
(1, NULL, 'Inserte para Adaptadores', 1, 0),
(2, NULL, 'Inserte para Divergentes', 1, 1),
(3, NULL, 'Inserte para Convergentes', 1, 2),
(4, NULL, 'Inserte para Asimiladores', 1, 3),
(5, NULL, 'Inserte para Adaptadores', 1, 0),
(6, NULL, 'Inserte para Divergentes', 1, 1),
(7, NULL, 'Inserte para Convergentes', 1, 2),
(8, NULL, 'Inserte para Asimiladores', 1, 3),
(9, NULL, 'Inserte para Adaptadores\n\n##Un1: Campo Electrico\n\nEl campo eléctrico es un campo físico que es representado mediante un modelo que describe la interacción entre cuerpos y sistemas con propiedades de naturaleza eléctrica.1 Se describe como un campo vectorial en el cual una carga eléctrica puntual de valor q {\\displaystyle q} q sufre los efectos de una fuerza eléctrica F {\\displaystyle \\mathbf {F} } {\\mathbf {F}} dada por la siguiente ecuación\n\n![alt text](https://upload.wikimedia.org/wikipedia/commons/4/40/Cargas3.PNG "Logo Title Text 1")', 7, 0),
(10, NULL, 'Inserte para Divergentes\n\n##Un1: Campo Electrico\n\nEl campo eléctrico es un campo físico que es representado mediante un modelo que describe la interacción entre cuerpos y sistemas con propiedades de naturaleza eléctrica.1 Se describe como un campo vectorial en el cual una carga eléctrica puntual de valor q {\\displaystyle q} q sufre los efectos de una fuerza eléctrica F {\\displaystyle \\mathbf {F} } {\\mathbf {F}} dada por la siguiente ecuación\n\n![alt text](http://www-fen.upc.es/wfib/virtualab/marco/dipol.jpg "Logo Title Text 1")', 7, 1),
(11, NULL, 'Inserte para Convergentes\n\n##Un1: Campo Electrico\n\nEl campo eléctrico es un campo físico que es representado mediante un modelo que describe la interacción entre cuerpos y sistemas con propiedades de naturaleza eléctrica.1 Se describe como un campo vectorial en el cual una carga eléctrica puntual de valor q {\\displaystyle q} q sufre los efectos de una fuerza eléctrica F {\\displaystyle \\mathbf {F} } {\\mathbf {F}} dada por la siguiente ecuación\n\n![alt text](http://acer.forestales.upm.es/basicas/udfisica/asignaturas/fisica/electro/campo_electr_files/campoE2.gif "Logo Title Text 1")', 7, 2),
(12, NULL, 'Inserte para Asimiladores\n\n##Un1: Campo Electrico\n\nEl campo eléctrico es un campo físico que es representado mediante un modelo que describe la interacción entre cuerpos y sistemas con propiedades de naturaleza eléctrica.1 Se describe como un campo vectorial en el cual una carga eléctrica puntual de valor q {\\displaystyle q} q sufre los efectos de una fuerza eléctrica F {\\displaystyle \\mathbf {F} } {\\mathbf {F}} dada por la siguiente ecuación', 7, 3);

-- --------------------------------------------------------

--
-- Table structure for table `curso`
--

CREATE TABLE `curso` (
  `curso_id` int(11) NOT NULL,
  `nombre` varchar(256) DEFAULT NULL,
  `imagen` varchar(512) DEFAULT NULL,
  `descripcion` text,
  `exp_id_f` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `curso`
--

INSERT INTO `curso` (`curso_id`, `nombre`, `imagen`, `descripcion`, `exp_id_f`) VALUES
(1, 'FIS 120', 'http://3.bp.blogspot.com/-tC0Wp_uXgHk/VO08QGfhltI/AAAAAAAAABk/05wz5Ex9VSU/s1600/Electricidad.jpg', 'Conocer y analizar la corriente eléctrica y los fenómenos asociados al transporte de carga en conductores. Conocer el funcionamiento de distintos elementos eléctricos dentro de un circuito Resolver circuitos eléctricos usando reglas de Kirchhoff. Analizar los fenómenos asociados al ciclo de carga y descarga de un condensador.', 1),
(4, 'SISGES', 'http://www.trainingtic.com/imagenes/ingenier%C3%ADa_software.jpg', 'Ramo para aprender sobre gestión de procesos, y partes primordiales para llevar un proyecto.', 1),
(5, 'FISW', 'https://i.kinja-img.com/gawker-media/image/upload/s--5GzUnJF7--/c_scale,fl_progressive,q_80,w_800/sokjhw3tbb9crwfw1f3p.png', 'Estamos presentando', 1),
(6, 'ASDFA', '', 'safda', 1),
(7, 'Curso prueba', 'https://i.ytimg.com/vi/AOPqGGemLNs/maxresdefault.jpg', 'sdafdsafdsafsdafda', 2),
(8, 'Curso2', 'http://www.wwe.com/f//photo/image/2014/05/019HHH_03272003RR_00273.jpg', 'Probando otro curso', 2),
(9, 'Curso test 2', '', 'LALALALA', 2),
(10, 'dsfdsafdsa', 'aa', 'sss', 2);

-- --------------------------------------------------------

--
-- Table structure for table `curso_estudiante`
--

CREATE TABLE `curso_estudiante` (
  `curso_id` int(11) NOT NULL,
  `stu_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `estudiante`
--

CREATE TABLE `estudiante` (
  `stu_id` int(11) NOT NULL,
  `nickname` varchar(64) DEFAULT NULL,
  `nombre` varchar(128) DEFAULT NULL,
  `email` varchar(256) DEFAULT NULL,
  `password` varchar(128) DEFAULT NULL,
  `tipo` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `estudiante`
--

INSERT INTO `estudiante` (`stu_id`, `nickname`, `nombre`, `email`, `password`, `tipo`) VALUES
(42, 'andrew', 'Andrés Cifuentes', 'aecifuentesv@gmail.com', 'undefined', 0),
(43, 'andrew444', 'Andrés Cifuentes', 'aecifuentesv@gmail.com', 'undefined', 0),
(44, 'pepito', 'pupi', 'aecifuentesv@gmail.com', 'undefined', 3),
(45, 'andrew123', 'Andrés', 'aecifuentesv@gmail.com', '1234', 0);

-- --------------------------------------------------------

--
-- Table structure for table `experto`
--

CREATE TABLE `experto` (
  `exp_id` int(11) NOT NULL,
  `nombre_exp` varchar(256) DEFAULT NULL,
  `exp_pass` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `experto`
--

INSERT INTO `experto` (`exp_id`, `nombre_exp`, `exp_pass`) VALUES
(1, 'felipe avaria', '1234'),
(2, 'aloja', '1234'),
(3, 'aloja3', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `modulo`
--

CREATE TABLE `modulo` (
  `mod_id` int(11) NOT NULL,
  `nombre_mod` varchar(256) DEFAULT NULL,
  `img_mod` varchar(256) DEFAULT NULL,
  `curso_id_f` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `modulo`
--

INSERT INTO `modulo` (`mod_id`, `nombre_mod`, `img_mod`, `curso_id_f`) VALUES
(1, 'Modulo1', 'undefined', 7),
(2, 'Modulo2', 'undefined', 7),
(3, 'sdafd', 'undefined', 7),
(4, 'Mod43', 'undefined', 7),
(5, 'ModuloLalala', 'undefined', 7),
(6, 'dfdsfdaf', 'undefined', 8),
(7, 'Campo Electrico', 'https://upload.wikimedia.org/wikipedia/commons/4/40/Cargas3.PNG', 1);

-- --------------------------------------------------------

--
-- Table structure for table `profesor`
--

CREATE TABLE `profesor` (
  `prof_id` int(11) NOT NULL,
  `nickname` varchar(64) DEFAULT NULL,
  `nombre` varchar(128) DEFAULT NULL,
  `password` varchar(128) DEFAULT NULL,
  `email` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `profesor_curso`
--

CREATE TABLE `profesor_curso` (
  `Profesorprof_id` int(11) NOT NULL,
  `Cursocurso_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `progreso`
--

CREATE TABLE `progreso` (
  `Nivel` int(1) DEFAULT NULL,
  `fecha` timestamp NULL DEFAULT NULL,
  `mod_id_f` int(11) NOT NULL,
  `stu_id_f` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bloque`
--
ALTER TABLE `bloque`
  ADD PRIMARY KEY (`bloque_id`),
  ADD KEY `FKBloque704652` (`mod_id_f`),
  ADD KEY `Usar` (`tipo`);

--
-- Indexes for table `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`curso_id`),
  ADD KEY `Crear` (`exp_id_f`);

--
-- Indexes for table `curso_estudiante`
--
ALTER TABLE `curso_estudiante`
  ADD PRIMARY KEY (`curso_id`),
  ADD UNIQUE KEY `stu_id` (`stu_id`);

--
-- Indexes for table `estudiante`
--
ALTER TABLE `estudiante`
  ADD PRIMARY KEY (`stu_id`);

--
-- Indexes for table `experto`
--
ALTER TABLE `experto`
  ADD PRIMARY KEY (`exp_id`);

--
-- Indexes for table `modulo`
--
ALTER TABLE `modulo`
  ADD PRIMARY KEY (`mod_id`),
  ADD KEY `FKModulo188483` (`curso_id_f`);

--
-- Indexes for table `profesor`
--
ALTER TABLE `profesor`
  ADD PRIMARY KEY (`prof_id`);

--
-- Indexes for table `profesor_curso`
--
ALTER TABLE `profesor_curso`
  ADD PRIMARY KEY (`Profesorprof_id`,`Cursocurso_id`),
  ADD KEY `FKProfesor_C767515` (`Profesorprof_id`),
  ADD KEY `FKProfesor_C800063` (`Cursocurso_id`);

--
-- Indexes for table `progreso`
--
ALTER TABLE `progreso`
  ADD KEY `FKProgreso853449` (`mod_id_f`),
  ADD KEY `FKProgreso943627` (`stu_id_f`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bloque`
--
ALTER TABLE `bloque`
  MODIFY `bloque_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
--
-- AUTO_INCREMENT for table `curso`
--
ALTER TABLE `curso`
  MODIFY `curso_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `estudiante`
--
ALTER TABLE `estudiante`
  MODIFY `stu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
--
-- AUTO_INCREMENT for table `experto`
--
ALTER TABLE `experto`
  MODIFY `exp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `modulo`
--
ALTER TABLE `modulo`
  MODIFY `mod_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `profesor`
--
ALTER TABLE `profesor`
  MODIFY `prof_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `bloque`
--
ALTER TABLE `bloque`
  ADD CONSTRAINT `FKBloque704652` FOREIGN KEY (`mod_id_f`) REFERENCES `modulo` (`mod_id`);

--
-- Constraints for table `curso`
--
ALTER TABLE `curso`
  ADD CONSTRAINT `Crear` FOREIGN KEY (`exp_id_f`) REFERENCES `experto` (`exp_id`);

--
-- Constraints for table `curso_estudiante`
--
ALTER TABLE `curso_estudiante`
  ADD CONSTRAINT `curso_estudiante_ibfk_1` FOREIGN KEY (`curso_id`) REFERENCES `curso` (`curso_id`),
  ADD CONSTRAINT `curso_estudiante_ibfk_2` FOREIGN KEY (`stu_id`) REFERENCES `estudiante` (`stu_id`);

--
-- Constraints for table `modulo`
--
ALTER TABLE `modulo`
  ADD CONSTRAINT `FKModulo188483` FOREIGN KEY (`curso_id_f`) REFERENCES `curso` (`curso_id`);

--
-- Constraints for table `profesor_curso`
--
ALTER TABLE `profesor_curso`
  ADD CONSTRAINT `FKProfesor_C767515` FOREIGN KEY (`Profesorprof_id`) REFERENCES `profesor` (`prof_id`),
  ADD CONSTRAINT `FKProfesor_C800063` FOREIGN KEY (`Cursocurso_id`) REFERENCES `curso` (`curso_id`);

--
-- Constraints for table `progreso`
--
ALTER TABLE `progreso`
  ADD CONSTRAINT `FKProgreso853449` FOREIGN KEY (`mod_id_f`) REFERENCES `modulo` (`mod_id`),
  ADD CONSTRAINT `FKProgreso943627` FOREIGN KEY (`stu_id_f`) REFERENCES `estudiante` (`stu_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
