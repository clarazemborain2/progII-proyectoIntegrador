CREATE SCHEMA data ;

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
  fecha_entrega DATE NOT NULL,
  created_at DATE NULL,
  imagen VARCHAR(400) NOT NULL,
  usuario_id INT UNSIGNED,
  FOREIGN KEY (usuario_id) REFERENCES usuario(id)
  
 );


CREATE TABLE comentario (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  comentario VARCHAR(255) NULL,
  product_id INT UNSIGNED NOT NULL, 
  usuario_id INT UNSIGNED NOT NULL,
  created_at DATE,
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


INSERT INTO usuario VALUES (DEFAULT, "zoelevinson@gmail.com", "zoelevinson", "zoe1234" , "2002-09-11", 44234568, "");
INSERT INTO usuario VALUES (DEFAULT, "anitabar@gmail.com", "anitabarbenza", "anita1234" , "2002-04-26", 44875634, "");
INSERT INTO usuario VALUES (DEFAULT, "pilisauthier@gmail.com", "sauthier123", "pili44" , "2000-03-15", 44234889, "");
INSERT INTO usuario VALUES (DEFAULT, "tomasruiz@gmail.com", "tomiruiz", "gym123" , "2001-01-09", 41917242, "");
INSERT INTO producto VALUES (DEFAULT, "Cuarzo Azul", "Este cristal favorece la comunicación y el habla. Posee energías calmantes, reduce el estrés y relaja", "2022-08-10","2021-10-11", "cuarzo-azul.jpeg", 2);
INSERT INTO producto VALUES (DEFAULT, "Amatista", "Tiene el poder de transformar la energía de baja vibración en alta vibración.", "2022-09-20","2022-03-15", "amatista.jpg", 3);
INSERT INTO producto VALUES (DEFAULT, "Sodalita", "Ayuda a estimular la visión interna en la meditación y la percepción. ", "2022-08-22", "2022-02-11", "sodalita.jpg", 4);
INSERT INTO comentario VALUES (DEFAULT, "Excelente producto!", 1, 1, "2022-03-18");
INSERT INTO comentario VALUES (DEFAULT, "Este cristal me trae mucha paz", 2, 2, "2021-08-22");
INSERT INTO comentario VALUES (DEFAULT, "Que lindas energias brindan estos cristales!", 3, 3, "2022-02-23");
INSERT INTO comentario VALUES (DEFAULT, "Definitivamente voy a volver a comprar aca", 4, 4, "2021-07-05");