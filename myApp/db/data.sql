CREATE SCHEMA `data` ;

USE data;

CREATE TABLE usuario (
/* nombreColumna    tipoDato     Restricciones */
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email	 VARCHAR(250) 		NOT NULL,
usuario	 VARCHAR(250) 		NOT NULL,
contra	 VARCHAR(250) 		NOT NULL,
fecha_de_nacimiento	DATETIME	NOT NULL,
nro_de_documento	 INT 	NOT NULL,
foto_de_perfil	 VARCHAR(300)
);


CREATE TABLE producto (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  nombre VARCHAR(250) NOT NULL,
  descripcion VARCHAR(500) NOT NULL,
  fecha_entrega DATETIME NOT NULL,
  imagen VARCHAR(400) NOT NULL,
  usuario_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (usuario_id) REFERENCES usuario(id)
  
 );


CREATE TABLE comentario (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  comentario VARCHAR(255) NULL,
  product_id INT UNSIGNED NOT NULL, 
  usuario_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (product_id) REFERENCES producto(id),
  FOREIGN KEY (usuario_id) REFERENCES usuario(id)
  );
  
CREATE TABLE follower (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL, 
seguidor_id INT UNSIGNED NOT NULL, 
seguido_id INT UNSIGNED NOT NULL, 
FOREIGN KEY (seguidor_id) REFERENCES usuario(id),
FOREIGN KEY (seguido_id) REFERENCES usuario(id)
);