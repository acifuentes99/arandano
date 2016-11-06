# Arandano Project - Plataforma de Aprendizaje

Proyecto para el ramo FISW de la UTFSM

## Requisitos
- Tener Gulp instalado globalmente (comando: npm install -g gulp)
- Tener Bower instalado globalmente (npm install -g bower)
- Tener corriendo una base de datos SQL

## Instrucciones
- Comenzar servicio de base de datos SQL en su PC, si no, Node tirara error.
- Ejecutar en terminal:
    - npm install
    - bower install
- En carpeta raíz, ejecutar "npm start"
- El sitio se encuentra listo para su uso, esto en la dirección localhost:8080.

## Estructura de Archivos
(puede ir cambiando con el tiempo, para mejores practicas)

### Documentos

En carpeta /documentos, se encuentran lo siguiente:
* Informe1FISW_Arandano.pdf : Informe, donde se encuentran los casos de uso en formato completo. También, se incluyen unas imágenes de los diagramas (diagramas completos en ProyetoArandano.vpp).
* ProyectoArandano.vpp : Archivo de visual paradigm, donde se encuentran: Diagrama de caso de uso, diagramas de secuencia, y el modelo entidad relación de base de datos.
* arandano.sql : Archivo .sql con las tablas de la base de datos
*

### Software

#### Backend
* Servidor Node: /server/server.js
* Rutas del Backend: /server/routes/routes.js

#### MVC

* Modelos: /client/models/*.js
* Vistas: /client/partials/*.html
* Controladores: /client/js/controllers.js
