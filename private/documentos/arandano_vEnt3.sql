-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 28, 2016 at 12:37 AM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 7.0.13

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
  `tipo` int(1) NOT NULL,
  `doc` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bloque`
--

INSERT INTO `bloque` (`bloque_id`, `img_url`, `content`, `mod_id_f`, `tipo`, `doc`) VALUES
(1, NULL, 'Inserte para Adaptadores\n\n![enter image description here](https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTXydzu-wv0rXiafxa2eZE6BE0H8gOJpSOs9eiDaVb_T4xyeULxt-HqVS8 "enter image title here")', 1, 0, '64984e2fa981e962b9293c462ee1b6ec'),
(2, NULL, 'Inserte para Divergentes', 1, 1, '64984e2fa981e962b9293c462ee1b6ec'),
(3, NULL, 'Inserte para Convergentes', 1, 2, '64984e2fa981e962b9293c462ee1b6ec'),
(4, NULL, 'Inserte para Asimiladores', 1, 3, '64984e2fa981e962b9293c462ee1b6ec'),
(5, NULL, 'Inserte para Adaptadores\n\n![enter image description here](https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTXydzu-wv0rXiafxa2eZE6BE0H8gOJpSOs9eiDaVb_T4xyeULxt-HqVS8 "enter image title here")', 1, 0, '64984e2fa981e962b9293c462ee1b6ec'),
(6, NULL, 'Inserte para Divergentes', 1, 1, '64984e2fa981e962b9293c462ee1b6ec'),
(7, NULL, 'Inserte para Convergentes', 1, 2, '64984e2fa981e962b9293c462ee1b6ec'),
(8, NULL, 'Inserte para Asimiladores', 1, 3, '64984e2fa981e962b9293c462ee1b6ec'),
(9, NULL, 'Inserte para Adaptadores\n\n##Un1: Campo Electrico\nEl campo eléctrico se define como la fuerza eléctrica por unidad de carga. La dirección del campo se toma como la dirección de la fuerza que ejercería sobre una carga positiva de prueba. El campo eléctrico esta dirigido radialmente hacia fuera de una carga positiva y radialmente hacia el interior de una carga puntual negativa. \n\n![](http://www.monografias.com/trabajos12/magne/Image581.gif "enter image title here")', 7, 0, ''),
(10, NULL, 'Inserte para Divergentes\n\n##Un1: Campo Electrico\n\nEl campo eléctrico es un campo físico que es representado mediante un modelo que describe la interacción entre cuerpos y sistemas con propiedades de naturaleza eléctrica.1 Se describe como un campo vectorial en el cual una carga eléctrica puntual de valor q {displaystyle q} q sufre los efectos de una fuerza eléctrica F {displaystyle mathbf {F} } {mathbf {F}} dada por la siguiente ecuación\n\n![alt text](http://www-fen.upc.es/wfib/virtualab/marco/dipol.jpg "Logo Title Text 1")', 7, 1, ''),
(11, NULL, 'Inserte para Convergentes\n\n##Un1: Campo Electrico\n\nEl campo eléctrico es un campo físico que es representado mediante un modelo que describe la interacción entre cuerpos y sistemas con propiedades de naturaleza eléctrica.1 Se describe como un campo vectorial en el cual una carga eléctrica puntual de valor q {displaystyle q} q sufre los efectos de una fuerza eléctrica F {displaystyle mathbf {F} } {mathbf {F}} dada por la siguiente ecuación\n\n![alt text](http://acer.forestales.upm.es/basicas/udfisica/asignaturas/fisica/electro/campo_electr_files/campoE2.gif "Logo Title Text 1")', 7, 2, ''),
(12, NULL, 'Inserte para Asimiladores\n\n##Un1: Campo Electrico\n\nEl campo eléctrico es un campo físico que es representado mediante un modelo que describe la interacción entre cuerpos y sistemas con propiedades de naturaleza eléctrica.1 Se describe como un campo vectorial en el cual una carga eléctrica puntual de valor q {displaystyle q} q sufre los efectos de una fuerza eléctrica F {displaystyle mathbf {F} } {mathbf {F}} dada por la siguiente ecuación', 7, 3, ''),
(13, NULL, 'fsdjfadfjdf', 10, 0, '0259fc2f71872f2cf1f1c2a3a69c5a0d'),
(14, NULL, 'meterial2', 10, 1, '0259fc2f71872f2cf1f1c2a3a69c5a0d'),
(15, NULL, 'Inserte para Convergentes', 10, 2, '0259fc2f71872f2cf1f1c2a3a69c5a0d'),
(16, NULL, 'Inserte para Asimiladores', 10, 3, '0259fc2f71872f2cf1f1c2a3a69c5a0d'),
(17, NULL, 'fsdjfadfjdf', 10, 0, '0259fc2f71872f2cf1f1c2a3a69c5a0d'),
(18, NULL, 'meterial2', 10, 1, '0259fc2f71872f2cf1f1c2a3a69c5a0d'),
(19, NULL, 'Inserte para Convergentes', 10, 2, '0259fc2f71872f2cf1f1c2a3a69c5a0d'),
(20, NULL, 'Inserte para Asimiladores', 10, 3, '0259fc2f71872f2cf1f1c2a3a69c5a0d'),
(21, NULL, 'fsdjfadfjdf', 10, 0, '0259fc2f71872f2cf1f1c2a3a69c5a0d'),
(22, NULL, 'meterial2', 10, 1, '0259fc2f71872f2cf1f1c2a3a69c5a0d'),
(23, NULL, 'Inserte para Convergentes', 10, 2, '0259fc2f71872f2cf1f1c2a3a69c5a0d'),
(24, NULL, 'Inserte para Asimiladores', 10, 3, '0259fc2f71872f2cf1f1c2a3a69c5a0d'),
(25, NULL, 'fsdjfadfjdf', 10, 0, '0259fc2f71872f2cf1f1c2a3a69c5a0d'),
(26, NULL, 'meterial2', 10, 1, '0259fc2f71872f2cf1f1c2a3a69c5a0d'),
(27, NULL, 'Inserte para Convergentes', 10, 2, '0259fc2f71872f2cf1f1c2a3a69c5a0d'),
(28, NULL, 'Inserte para Asimiladores', 10, 3, '0259fc2f71872f2cf1f1c2a3a69c5a0d'),
(29, NULL, 'fsdjfadfjdf', 10, 0, '0259fc2f71872f2cf1f1c2a3a69c5a0d'),
(30, NULL, 'meterial2', 10, 1, '0259fc2f71872f2cf1f1c2a3a69c5a0d'),
(31, NULL, 'Inserte para Convergentes', 10, 2, '0259fc2f71872f2cf1f1c2a3a69c5a0d'),
(32, NULL, 'Inserte para Asimiladores', 10, 3, '0259fc2f71872f2cf1f1c2a3a69c5a0d'),
(33, NULL, 'fsdjfadfjdf', 10, 0, '0259fc2f71872f2cf1f1c2a3a69c5a0d'),
(34, NULL, 'meterial2', 10, 1, '0259fc2f71872f2cf1f1c2a3a69c5a0d'),
(35, NULL, 'Inserte para Convergentes', 10, 2, '0259fc2f71872f2cf1f1c2a3a69c5a0d'),
(36, NULL, 'Inserte para Asimiladores', 10, 3, '0259fc2f71872f2cf1f1c2a3a69c5a0d'),
(37, NULL, '\n## Primeros pasos con Balsamiq Mockups\n\n![](https://www.adictosaltrabajo.com/wp-content/uploads/tutorial-data/mockups/mochups_img_11.jpg "enter image title here")\n\nHace unos días me comentaron la existencia de una herramienta estupenda para hacer borradores rápidos de Webs e incluso para aplicaciones móviles como iphone:\nBalsamic Mockups. Estoy modelando una aplicación comercial que se me ha ocurrido y … pocas veces he encontrado una herramienta tan sencilla, intuitiva y útil para dar forma a las ideas sin complicarte la vida en los detalles. Además cuesta 79 dólares, vamos, regalada.\n\nNos la descargamos desde http://www.balsamiq.com/products/mockups y lo voy a instalar en mi Mac.\n\nAntes hay de descargarse e instalar Adobe Air\nhttp://get.adobe.com/es/air/thankyou/?installer=Adobe_AIR_1.5.3_for_MacOS_X\n\nSi lo hemos comprado (aunque haya multitud de software libre no olvidemos que hay más modelos de negocio), introducimos el usuario y código de licencia.\n\nLa herramienta tiene una barra muy intuitiva. Elegimos inicialmente la lengüeta de contenedores. Elegimos la ventana de navegador.\n\nElegimos también otro contenedor con una barra. Separamos por comas los textos.\n\n![enter image description here](https://www.adictosaltrabajo.com/wp-content/uploads/tutorial-data/mockups/mochups_img_12.jpg "enter image title here")\n\nEsto es sencillo y aparente\n\nAhora vamos a ir añadiendo componentes. Selecciono una imagen: haciendo doble click en ella podemos elegir la foto.\n\nElegimos la foto de nuestro sistema de ficheros o de otras fuentes.\n\nElegimos uno de los dibujos de la baraja de cartas de Autentia.\n\nSi queremos que no se vea tan colorido, para no desentonar, podemos pulsar sketch it.\n\nVamos componiendo nuestra página\n\nY poco a poco va cogiendo forma. Un consejo: utilizad la pequeña barra superior para ir agrupando elemento y también bloqueándolos.\n\nUna de las cosas más interesantes es que podemos crear distintas pantallas y enlazarlas para hacer una presentación casi interactiva. Creamos un nuevo Mockup.\n\nElegimos que sea también Web. Copiamos y pegamos la página principal… también podríamos haber clonado la página.\nEn la ventana de configuración decimos que la lengüeta activa es la de Libro.\n\nPintamos el aspecto de nuestra nueva página con nuevos controles.\n\nGuardamos la página.\n\nAhora en la página principal elegimos en la caja de configuración la sección de links de la lengüeta y elegimos a dónde saltar.\n\nAhora aparece en enlace y pulsando Alt podemos saltar.\n\nOtra de las cosas interesantes es la posibilidad de extender los controles existentes … como componentes de geoposicionamiento..\n\nO incluso portales … entre otros cientos.\n\nLo dicho, impresionante. Creo que es una herramienta que todo el mundo debería tener y que creo que por lo menos yo usaré de un modo intensivo.\n', 12, 0, ''),
(38, NULL, '\n## Primeros pasos con Balsamiq Mockups\n\n![](https://www.adictosaltrabajo.com/wp-content/uploads/tutorial-data/mockups/mochups_img_17.jpg "enter image title here")\n\nHace unos días me comentaron la existencia de una herramienta estupenda para hacer borradores rápidos de Webs e incluso para aplicaciones móviles como iphone:\nBalsamic Mockups. Estoy modelando una aplicación comercial que se me ha ocurrido y … pocas veces he encontrado una herramienta tan sencilla, intuitiva y útil para dar forma a las ideas sin complicarte la vida en los detalles. Además cuesta 79 dólares, vamos, regalada.\n\nNos la descargamos desde http://www.balsamiq.com/products/mockups y lo voy a instalar en mi Mac.\n\nAntes hay de descargarse e instalar Adobe Air\nhttp://get.adobe.com/es/air/thankyou/?installer=Adobe_AIR_1.5.3_for_MacOS_X\n\nSi lo hemos comprado (aunque haya multitud de software libre no olvidemos que hay más modelos de negocio), introducimos el usuario y código de licencia.\n\nLa herramienta tiene una barra muy intuitiva. Elegimos inicialmente la lengüeta de contenedores. Elegimos la ventana de navegador.\n\nElegimos también otro contenedor con una barra. Separamos por comas los textos.\n\n![enter image description here](https://www.adictosaltrabajo.com/wp-content/uploads/tutorial-data/mockups/mochups_img_2.jpg "enter image title here")\n\nEsto es sencillo y aparente\n\nAhora vamos a ir añadiendo componentes. Selecciono una imagen: haciendo doble click en ella podemos elegir la foto.\n\nElegimos la foto de nuestro sistema de ficheros o de otras fuentes.\n\nElegimos uno de los dibujos de la baraja de cartas de Autentia.\n\nSi queremos que no se vea tan colorido, para no desentonar, podemos pulsar sketch it.\n\nVamos componiendo nuestra página\n\nY poco a poco va cogiendo forma. Un consejo: utilizad la pequeña barra superior para ir agrupando elemento y también bloqueándolos.\n\nUna de las cosas más interesantes es que podemos crear distintas pantallas y enlazarlas para hacer una presentación casi interactiva. Creamos un nuevo Mockup.\n\nElegimos que sea también Web. Copiamos y pegamos la página principal… también podríamos haber clonado la página.\nEn la ventana de configuración decimos que la lengüeta activa es la de Libro.\n\nPintamos el aspecto de nuestra nueva página con nuevos controles.\n\nGuardamos la página.\n\nAhora en la página principal elegimos en la caja de configuración la sección de links de la lengüeta y elegimos a dónde saltar.\n\nAhora aparece en enlace y pulsando Alt podemos saltar.\n\nOtra de las cosas interesantes es la posibilidad de extender los controles existentes … como componentes de geoposicionamiento..\n\nO incluso portales … entre otros cientos.\n\nLo dicho, impresionante. Creo que es una herramienta que todo el mundo debería tener y que creo que por lo menos yo usaré de un modo intensivo.\n', 12, 1, ''),
(39, NULL, '\n## Primeros pasos con Balsamiq Mockups\n\n![](https://www.adictosaltrabajo.com/wp-content/uploads/tutorial-data/mockups/mochups_img_14.jpg "enter image title here")\n\nHace unos días me comentaron la existencia de una herramienta estupenda para hacer borradores rápidos de Webs e incluso para aplicaciones móviles como iphone:\nBalsamic Mockups. Estoy modelando una aplicación comercial que se me ha ocurrido y … pocas veces he encontrado una herramienta tan sencilla, intuitiva y útil para dar forma a las ideas sin complicarte la vida en los detalles. Además cuesta 79 dólares, vamos, regalada.\n\nNos la descargamos desde http://www.balsamiq.com/products/mockups y lo voy a instalar en mi Mac.\n\nAntes hay de descargarse e instalar Adobe Air\nhttp://get.adobe.com/es/air/thankyou/?installer=Adobe_AIR_1.5.3_for_MacOS_X\n\nSi lo hemos comprado (aunque haya multitud de software libre no olvidemos que hay más modelos de negocio), introducimos el usuario y código de licencia.\n\nLa herramienta tiene una barra muy intuitiva. Elegimos inicialmente la lengüeta de contenedores. Elegimos la ventana de navegador.\n\nElegimos también otro contenedor con una barra. Separamos por comas los textos.\n\n![enter image description here](https://www.adictosaltrabajo.com/wp-content/uploads/tutorial-data/mockups/mochups_img_15.jpg "enter image title here")\n\nEsto es sencillo y aparente\n\nAhora vamos a ir añadiendo componentes. Selecciono una imagen: haciendo doble click en ella podemos elegir la foto.\n\nElegimos la foto de nuestro sistema de ficheros o de otras fuentes.\n\nElegimos uno de los dibujos de la baraja de cartas de Autentia.\n\nSi queremos que no se vea tan colorido, para no desentonar, podemos pulsar sketch it.\n\nVamos componiendo nuestra página\n\nY poco a poco va cogiendo forma. Un consejo: utilizad la pequeña barra superior para ir agrupando elemento y también bloqueándolos.\n\nUna de las cosas más interesantes es que podemos crear distintas pantallas y enlazarlas para hacer una presentación casi interactiva. Creamos un nuevo Mockup.\n\nElegimos que sea también Web. Copiamos y pegamos la página principal… también podríamos haber clonado la página.\nEn la ventana de configuración decimos que la lengüeta activa es la de Libro.\n\nPintamos el aspecto de nuestra nueva página con nuevos controles.\n\nGuardamos la página.\n\nAhora en la página principal elegimos en la caja de configuración la sección de links de la lengüeta y elegimos a dónde saltar.\n\nAhora aparece en enlace y pulsando Alt podemos saltar.\n\nOtra de las cosas interesantes es la posibilidad de extender los controles existentes … como componentes de geoposicionamiento..\n\nO incluso portales … entre otros cientos.\n\nLo dicho, impresionante. Creo que es una herramienta que todo el mundo debería tener y que creo que por lo menos yo usaré de un modo intensivo.\n', 12, 2, ''),
(40, NULL, '\n## Primeros pasos con Balsamiq Mockups\n\n![](https://www.adictosaltrabajo.com/wp-content/uploads/tutorial-data/mockups/mochups_img_9.jpg "enter image title here")\n\nHace unos días me comentaron la existencia de una herramienta estupenda para hacer borradores rápidos de Webs e incluso para aplicaciones móviles como iphone:\nBalsamic Mockups. Estoy modelando una aplicación comercial que se me ha ocurrido y … pocas veces he encontrado una herramienta tan sencilla, intuitiva y útil para dar forma a las ideas sin complicarte la vida en los detalles. Además cuesta 79 dólares, vamos, regalada.\n\nNos la descargamos desde http://www.balsamiq.com/products/mockups y lo voy a instalar en mi Mac.\n\nAntes hay de descargarse e instalar Adobe Air\nhttp://get.adobe.com/es/air/thankyou/?installer=Adobe_AIR_1.5.3_for_MacOS_X\n\nSi lo hemos comprado (aunque haya multitud de software libre no olvidemos que hay más modelos de negocio), introducimos el usuario y código de licencia.\n\nLa herramienta tiene una barra muy intuitiva. Elegimos inicialmente la lengüeta de contenedores. Elegimos la ventana de navegador.\n\nElegimos también otro contenedor con una barra. Separamos por comas los textos.\n\n![enter image description here](https://www.adictosaltrabajo.com/wp-content/uploads/tutorial-data/mockups/mochups_img_8.jpg "enter image title here")\n\nEsto es sencillo y aparente\n\nAhora vamos a ir añadiendo componentes. Selecciono una imagen: haciendo doble click en ella podemos elegir la foto.\n\nElegimos la foto de nuestro sistema de ficheros o de otras fuentes.\n\nElegimos uno de los dibujos de la baraja de cartas de Autentia.\n\nSi queremos que no se vea tan colorido, para no desentonar, podemos pulsar sketch it.\n\nVamos componiendo nuestra página\n\nY poco a poco va cogiendo forma. Un consejo: utilizad la pequeña barra superior para ir agrupando elemento y también bloqueándolos.\n\nUna de las cosas más interesantes es que podemos crear distintas pantallas y enlazarlas para hacer una presentación casi interactiva. Creamos un nuevo Mockup.\n\nElegimos que sea también Web. Copiamos y pegamos la página principal… también podríamos haber clonado la página.\nEn la ventana de configuración decimos que la lengüeta activa es la de Libro.\n\nPintamos el aspecto de nuestra nueva página con nuevos controles.\n\nGuardamos la página.\n\nAhora en la página principal elegimos en la caja de configuración la sección de links de la lengüeta y elegimos a dónde saltar.\n\nAhora aparece en enlace y pulsando Alt podemos saltar.\n\nOtra de las cosas interesantes es la posibilidad de extender los controles existentes … como componentes de geoposicionamiento..\n\nO incluso portales … entre otros cientos.\n\nLo dicho, impresionante. Creo que es una herramienta que todo el mundo debería tener y que creo que por lo menos yo usaré de un modo intensivo.\n', 12, 3, ''),
(41, NULL, '##Aprende el arte de realizar Mockups\n\n![](https://media.balsamiq.com/img/examples/boogle-sketch-sm.png "enter image title here")\n\n### Introducción\n* Descargue basamic en la URL siguiente: [Balsamiq](https://balsamiq.com/products/mockups)\n* Instalelo en su Computador\n* Corra su programa\n\n### Instrucciones\n![](https://media.balsamiq.com/img/examples/iphone-sketch-sm.png "enter image title here")\n\n* Eliga su plataforma, puede ser movil o en computador\n* Luego, comienze a agregar el contenido\n', 13, 0, '9b75901d8ad8716baf07f6f555bcccad'),
(42, NULL, '##Entra al flujo del Mockup\n\n![enter image description here](https://0.s3.envato.com/files/172228327/rigged_cartoon_character_animation_mockup_for_after_effects_preview.png "enter image title here")\n\nPara comenzar a crear tu primer mockup, te realizaremos una tutoria guuiada especificamente para **que logres lograr todos tus objetivos**.', 13, 1, '9b75901d8ad8716baf07f6f555bcccad'),
(43, NULL, '##Aprende a asimilar el arte de los mockups\n\n\n### Introducción\n* Descargue basamic en la URL siguiente: [Balsamiq](https://balsamiq.com/products/mockups)\n* Instalelo en su Computador\n* Corra su programa\n\n### Instrucciones\n![](https://media.balsamiq.com/img/process_bad.png"enter image title here")\n\n\n* Eliga su plataforma, puede ser movil o en computador\n* Luego, comienze a agregar el contenido', 13, 2, '9b75901d8ad8716baf07f6f555bcccad'),
(44, NULL, '##Aprende a asimilar el arte de los mockups\n\n![](https://media.balsamiq.com/img/products/mockupsinthemiddle-1-2.png "enter image title here")\n\n### Introducción\n* Descargue basamic en la URL siguiente: [Balsamiq](https://balsamiq.com/products/mockups)\n* Instalelo en su Computador\n* Corra su programa\n\n### Instrucciones\n![](https://media.balsamiq.com/img/process_bad.png"enter image title here")\n\n\n* Eliga su plataforma, puede ser movil o en computador\n* Luego, comienze a agregar el contenido', 13, 3, '9b75901d8ad8716baf07f6f555bcccad'),
(45, NULL, 'Adaptadores', 14, 0, ''),
(46, NULL, 'Divergentes', 14, 1, ''),
(47, NULL, 'Convergentes', 14, 2, ''),
(48, NULL, 'Asimiladores', 14, 3, '');

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
(6, 'Sistemas Opertativos', 'http://www.poderpda.com/wp-content/uploads/2012/12/sistemaasss-op.png', 'safda', 1),
(7, 'Curso de lucha', 'https://i.ytimg.com/vi/AOPqGGemLNs/maxresdefault.jpg', 'sdafdsafdsafsdafda', 2),
(8, 'Curso2', 'http://www.wwe.com/f//photo/image/2014/05/019HHH_03272003RR_00273.jpg', 'Probando otro curso', 2),
(10, 'dsfdsafdsa', 'aa', 'sss', 2),
(12, 'Inteligencia Artificial', 'http://blog.udlap.mx/wp-content/uploads/2014/06/ai.jpg', '', 4),
(13, 'Lenguajes de Programación', 'http://noticias.universia.es/net/images/ciencia-tecnologia/l/le/len/lenguajes-de-programacion.jpg', 'java, c/c', 4),
(14, 'Taller de Mockups', 'http://psd.fanextra.com/wp-content/uploads/2010/04/tool_002.jpg', 'Aprende a realizar bocetos rapidos de tus proyectos web', 1);

-- --------------------------------------------------------

--
-- Table structure for table `curso_estudiante`
--

CREATE TABLE `curso_estudiante` (
  `id` int(11) NOT NULL,
  `stu_id` int(11) NOT NULL,
  `curso_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `curso_estudiante`
--

INSERT INTO `curso_estudiante` (`id`, `stu_id`, `curso_id`) VALUES
(1, 46, 1),
(18, 46, 4),
(34, 46, 5),
(35, 46, 12),
(36, 47, 1),
(37, 47, 12),
(38, 48, 1),
(39, 48, 5),
(40, 48, 12),
(41, 52, 1),
(42, 52, 4),
(43, 52, 6),
(44, 52, 13),
(45, 52, 7),
(46, 52, 14),
(47, 49, 1),
(48, 49, 14),
(49, 50, 14),
(50, 50, 1),
(51, 50, 6),
(52, 51, 14),
(53, 51, 1),
(54, 52, 14),
(55, 53, 14),
(56, 51, 13),
(57, 0, 1),
(58, 0, 4),
(59, 0, 5),
(60, 60, 7);

-- --------------------------------------------------------

--
-- Table structure for table `curso_profe`
--

CREATE TABLE `curso_profe` (
  `id` int(11) NOT NULL,
  `prof_id` int(11) NOT NULL,
  `curso_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `curso_profe`
--

INSERT INTO `curso_profe` (`id`, `prof_id`, `curso_id`) VALUES
(1, 2, 1),
(2, 2, 14),
(3, 2, 8);

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
  `tipo` int(1) DEFAULT NULL,
  `img` varchar(256) DEFAULT 'http://i57.tinypic.com/2ng6cs3.png'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `estudiante`
--

INSERT INTO `estudiante` (`stu_id`, `nickname`, `nombre`, `email`, `password`, `tipo`, `img`) VALUES
(46, 'F', 'F', 'f@d', '$2a$10$bpUEoF8i0H6//VjLwzMPI.VpHq0f4vdMsnieKMSfgfnoI39LxbKOu', 3, 'http://i57.tinypic.com/2ng6cs3.png'),
(47, 'a', 'b', 'c', '$2a$10$bpUEoF8i0H6//VjLwzMPI.VpHq0f4vdMsnieKMSfgfnoI39LxbKOu', 1, 'http://i57.tinypic.com/2ng6cs3.png'),
(48, 'adaptador', 'Adaptador Perez', 'ad@sansano.usm.cl', '$2a$10$bpUEoF8i0H6//VjLwzMPI.VpHq0f4vdMsnieKMSfgfnoI39LxbKOu', 0, 'http://i57.tinypic.com/2ng6cs3.png'),
(49, 'divergente', 'Juan Divergente', 'di@sansano.usm.cl', '$2a$10$bpUEoF8i0H6//VjLwzMPI.VpHq0f4vdMsnieKMSfgfnoI39LxbKOu', 1, 'http://i57.tinypic.com/2ng6cs3.png'),
(50, 'convergente', 'Convergente Gonzalez', 'co@sansano.usm.cl', '$2a$10$bpUEoF8i0H6//VjLwzMPI.VpHq0f4vdMsnieKMSfgfnoI39LxbKOu', 2, 'http://i57.tinypic.com/2ng6cs3.png'),
(51, 'asimilador', 'Manuel Asimialdor', 'as@sansano.usm.cl', '$2a$10$bpUEoF8i0H6//VjLwzMPI.VpHq0f4vdMsnieKMSfgfnoI39LxbKOu', 3, 'http://i57.tinypic.com/2ng6cs3.png'),
(52, 'Jose', 'José Caimapo', 'jose.caimapo.12@sansano.usm.cl', '$2a$10$bpUEoF8i0H6//VjLwzMPI.VpHq0f4vdMsnieKMSfgfnoI39LxbKOu', 0, 'http://i57.tinypic.com/2ng6cs3.png'),
(53, 'Felipe', 'Felipe Avaria', 'favaria@gmiail.com', '$2a$10$bpUEoF8i0H6//VjLwzMPI.VpHq0f4vdMsnieKMSfgfnoI39LxbKOu', 1, 'http://i57.tinypic.com/2ng6cs3.png'),
(54, 'Pedro', 'Pedro Avaria', 'pavaria@gmiail.com', '$2a$10$bpUEoF8i0H6//VjLwzMPI.VpHq0f4vdMsnieKMSfgfnoI39LxbKOu', 2, 'http://i57.tinypic.com/2ng6cs3.png'),
(55, 'Catalina', 'Catalina Avaria', 'cavaria@gmiail.com', '$2a$10$bpUEoF8i0H6//VjLwzMPI.VpHq0f4vdMsnieKMSfgfnoI39LxbKOu', 3, 'http://i57.tinypic.com/2ng6cs3.png'),
(56, 'Juan', 'juan Perez', 'Juanpereza@gmiail.com', '$2a$10$bpUEoF8i0H6//VjLwzMPI.VpHq0f4vdMsnieKMSfgfnoI39LxbKOu', 1, 'http://i57.tinypic.com/2ng6cs3.png'),
(57, 'Andres', 'Andres Caimapo', 'andrescai@gmiail.com', '$2a$10$bpUEoF8i0H6//VjLwzMPI.VpHq0f4vdMsnieKMSfgfnoI39LxbKOu', 3, 'http://i57.tinypic.com/2ng6cs3.png'),
(58, 'fede', 'Federico Santa Maria', 'fav@alumnos.usm.com', '$2a$10$bpUEoF8i0H6//VjLwzMPI.VpHq0f4vdMsnieKMSfgfnoI39LxbKOu', 4, 'http://i57.tinypic.com/2ng6cs3.png'),
(59, 'maria', 'maria contreras', 'macontreras@alumnos.usm.com', '$2a$10$bpUEoF8i0H6//VjLwzMPI.VpHq0f4vdMsnieKMSfgfnoI39LxbKOu', 4, 'http://i57.tinypic.com/2ng6cs3.png'),
(60, 'aloja123', 'aloja123', 'aecifuentesv@gmail.com', '$2a$10$bpUEoF8i0H6//VjLwzMPI.VpHq0f4vdMsnieKMSfgfnoI39LxbKOu', 3, 'http://i57.tinypic.com/2ng6cs3.png');

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
(1, 'donfede', '$2a$10$bpUEoF8i0H6//VjLwzMPI.VpHq0f4vdMsnieKMSfgfnoI39LxbKOu'),
(2, 'aloja', '$2a$10$bpUEoF8i0H6//VjLwzMPI.VpHq0f4vdMsnieKMSfgfnoI39LxbKOu'),
(3, 'aloja3', '$2a$10$bpUEoF8i0H6//VjLwzMPI.VpHq0f4vdMsnieKMSfgfnoI39LxbKOu'),
(4, 'admin', '$2a$10$bpUEoF8i0H6//VjLwzMPI.VpHq0f4vdMsnieKMSfgfnoI39LxbKOu'),
(5, 'aloja123', '$2a$10$bpUEoF8i0H6//VjLwzMPI.VpHq0f4vdMsnieKMSfgfnoI39LxbKOu'),
(6, 'aloja456', '$2a$10$bpUEoF8i0H6//VjLwzMPI.VpHq0f4vdMsnieKMSfgfnoI39LxbKOu');

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
(7, 'Campo Electrico', 'https://upload.wikimedia.org/wikipedia/commons/4/40/Cargas3.PNG', 1),
(8, 'Programación C / C++', 'http://img.wonderhowto.com/img/27/15/63568835396673/0/c-c-for-hackers-part-6-our-first-program-c-using-c-code-c-and-comment-lines.1280x600.jpg', 13),
(9, 'Programación Java', 'http://core0.staticworld.net/images/article/2014/09/java-100432255-primary.idge.jpg', 13),
(10, 'Técnicas de Búsqueda Completa', 'http://ktiml.mff.cuni.cz/~bartak/constraints/images/backtrack.gif', 12),
(11, 'Técnicas de búsqueda incompleta', 'http://3.bp.blogspot.com/-BAlDPCou0BM/VKWt5Y_WvxI/AAAAAAAAGnA/vBfOYZqXgec/s1600/nrg3351-f4.jpg', 12),
(12, 'Introduccion a los Mockups y propotipos', 'http://zippypixels.com/wp-content/uploads/2015/09/03-3d-Perspective-website-mockup-824x542.jpg', 14),
(13, 'Taller de Prototipado', 'https://media.balsamiq.com/img/examples/all-controls-sketch.png', 14),
(14, 'Campo Magnetico', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Magnet0873.png/250px-Magnet0873.png', 1);

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

--
-- Dumping data for table `profesor`
--

INSERT INTO `profesor` (`prof_id`, `nickname`, `nombre`, `password`, `email`) VALUES
(1, 'Felipe', 'Felipe Avaria', '$2a$10$aOMlDS7TCbdyYLWSiVc/6.bBTVewLeQUB1DUIoE/LKsDoFZ/4GSKm', 'f@usm.cl'),
(2, 'andrew123', 'Andrew', '$2a$10$aOMlDS7TCbdyYLWSiVc/6.bBTVewLeQUB1DUIoE/LKsDoFZ/4GSKm', 'aecifuentesv@gmail.com'),
(3, 'dsfdsfda', 'fdsfda', '$2a$10$aOMlDS7TCbdyYLWSiVc/6.bBTVewLeQUB1DUIoE/LKsDoFZ/4GSKm', 'aecifuentesv@gmail.com'),
(4, 'aloja2', 'aloja2', '$2a$10$aOMlDS7TCbdyYLWSiVc/6.bBTVewLeQUB1DUIoE/LKsDoFZ/4GSKm', 'aecifuentesv@gmail.com'),
(5, 'aloja1', 'Aloja', '$2a$10$aOMlDS7TCbdyYLWSiVc/6.bBTVewLeQUB1DUIoE/LKsDoFZ/4GSKm', 'aecifuentesv@gmail.com'),
(6, 'aloja1', 'aloja1', '$2a$10$aOMlDS7TCbdyYLWSiVc/6.bBTVewLeQUB1DUIoE/LKsDoFZ/4GSKm', 'aecifuentesv@gmail.com'),
(7, 'aloja1', 'aloja1', '$2a$10$aOMlDS7TCbdyYLWSiVc/6.bBTVewLeQUB1DUIoE/LKsDoFZ/4GSKm', 'aecifuentesv@gmail.com'),
(8, 'aloja23', 'aloja2', '$2a$10$aOMlDS7TCbdyYLWSiVc/6.bBTVewLeQUB1DUIoE/LKsDoFZ/4GSKm', 'aecifuentesv@gmail.com'),
(9, 'sadfasd', 'alojasa', '$2a$10$aOMlDS7TCbdyYLWSiVc/6.bBTVewLeQUB1DUIoE/LKsDoFZ/4GSKm', 'aecifuentesv@gmail.com'),
(10, 'aa', 'alojaASD', '$2a$10$aOMlDS7TCbdyYLWSiVc/6.bBTVewLeQUB1DUIoE/LKsDoFZ/4GSKm', 'aecifuentesv@gmail.com');

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
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `curso_profe`
--
ALTER TABLE `curso_profe`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `bloque_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
--
-- AUTO_INCREMENT for table `curso`
--
ALTER TABLE `curso`
  MODIFY `curso_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `curso_estudiante`
--
ALTER TABLE `curso_estudiante`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;
--
-- AUTO_INCREMENT for table `curso_profe`
--
ALTER TABLE `curso_profe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `estudiante`
--
ALTER TABLE `estudiante`
  MODIFY `stu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;
--
-- AUTO_INCREMENT for table `experto`
--
ALTER TABLE `experto`
  MODIFY `exp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `modulo`
--
ALTER TABLE `modulo`
  MODIFY `mod_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `profesor`
--
ALTER TABLE `profesor`
  MODIFY `prof_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
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
-- Constraints for table `modulo`
--
ALTER TABLE `modulo`
  ADD CONSTRAINT `FKModulo188483` FOREIGN KEY (`curso_id_f`) REFERENCES `curso` (`curso_id`);

--
-- Constraints for table `progreso`
--
ALTER TABLE `progreso`
  ADD CONSTRAINT `FKProgreso853449` FOREIGN KEY (`mod_id_f`) REFERENCES `modulo` (`mod_id`),
  ADD CONSTRAINT `FKProgreso943627` FOREIGN KEY (`stu_id_f`) REFERENCES `estudiante` (`stu_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
