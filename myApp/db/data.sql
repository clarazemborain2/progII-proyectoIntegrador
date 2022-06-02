USE data;

CREATE TABLE usuario (
/* nombreColumna    tipoDato     Restricciones */
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email	 VARCHAR(50) 		NOT NULL,
usuario	 VARCHAR(50) 		NOT NULL,
contrasenia	 VARCHAR(50) 	NOT NULL,
fechaDeNacimiento	DATE	NOT NULL,
nroDeDocumento	 INT 	NOT NULL,
fotoDePerfil	 VARCHAR(300),
seguidores	 INT,
Comentarios	 INT,
productos	 INT
);


CREATE TABLE `data`.`producto` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `descripcion` VARCHAR(150) NOT NULL,
  `fechaEntrega` DATETIME NOT NULL,
  `comentarios` INT NULL,
  `imagen` VARCHAR(400) NOT NULL,
  PRIMARY KEY (`id`));


CREATE TABLE `data`.`comentarios` (
  `nombreUsuario` VARCHAR(100) NOT NULL,
  `comentario` VARCHAR(200) NULL,
  PRIMARY KEY (`nombreUsuario`));