USE data;

CREATE TABLE usuario (
/* nombreColumna    tipoDato     Restricciones */
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email	 VARCHAR(50) 		NOT NULL,
usuario	 VARCHAR(50) 		NOT NULL,
contrasenia	 VARCHAR(50) 	NOT NULL,
fechaDeNacimiento	DATE	NOT NULL,
nroDeDocumento	 INT 	NOT NULL,
fotoDePerfil	 VARCHAR(300)
);


CREATE TABLE producto (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  descripcion VARCHAR(150) NOT NULL,
  fechaEntrega DATETIME NOT NULL,
  comentarios INT NULL,
  imagen VARCHAR(400) NOT NULL,
  usuario_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (usuario_id) REFERENCES usuario(id)
  
 );


CREATE TABLE comentario (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  comentario VARCHAR(200) NULL,
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

