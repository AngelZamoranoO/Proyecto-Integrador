CREATE DATABASE `bd_funko` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */

-- bd_funko.product definition

CREATE TABLE `product` (
  `product_id` int NOT NULL,
  `product_name` varchar(60) NOT NULL,
  `product_description` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` int NOT NULL,
  `discount` int NOT NULL,
  `sku` varchar(30) NOT NULL,
  `dues` int NOT NULL,
  `img_front` varchar(200) NOT NULL,
  `img_back` varchar(200) NOT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `category_id` int NOT NULL,
  `licence_id` int NOT NULL,
  PRIMARY KEY (`product_id`),
  KEY `product_FK` (`category_id`),
  KEY `product_FK_1` (`licence_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- bd_funko.category definition

CREATE TABLE `category` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(100) NOT NULL,
  `category_description` varchar(255) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;

-- bd_funko.licence definition

CREATE TABLE `licence` (
  `licence_id` int NOT NULL AUTO_INCREMENT,
  `licence_name` varchar(200) NOT NULL,
  `licence_description` varchar(255) NOT NULL,
  `licence_img` varchar(255) NOT NULL,
  PRIMARY KEY (`licence_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

-- bd_funko.`user` definition

CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `lastname` varchar(80) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(32) NOT NULL,
  `create_time` timestamp NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;




INSERT INTO licence VALUES (1,'Pokemon', 'Atrapa todos los que puedas','imagen de la url');

INSERT INTO category VALUES (1,'Funkos','Figura coleccionable'),(2,'remeras','Remeras de anime');

INSERT INTO product
VALUES(1, 'Figuras coleccionables', 'Figuras coleccionables', 1799.99, 10, 0, 'PKM001001', 0, '/img/pokemon/pidgeotto-1.webp', '/img/pokemon/pidgeotto-box.webp', null, 0, 0);

