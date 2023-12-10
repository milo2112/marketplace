CREATE DATABASE marketplace;

\c marketplace;

CREATE TABLE IF NOT EXISTS users (
	id        SERIAL        NOT NULL UNIQUE,
	email     VARCHAR(50)   NOT NULL,
	password  VARCHAR(60)   NOT NULL,
	rol       VARCHAR(25)   NOT NULL,
	name      VARCHAR(20)   NOT NULL,
	lastname  VARCHAR(20)   NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS carts (
	id 			SERIAL	NOT NULL,
	userid		INT		NOT NULL UNIQUE,
	cartdate   	date 	NOT NULL UNIQUE,
	PRIMARY KEY (id),
	FOREIGN KEY (userid) REFERENCES users (id)
);

CREATE TABLE IF NOT EXISTS cartsproducts (
	id 			SERIAL	NOT NULL UNIQUE,
	cartid 		INT		NOT NULL UNIQUE,
	productid	INT		NOT NULL UNIQUE,
	cant		INT		NOT NULL,
	FOREIGN KEY (cartid) REFERENCES carts (id),
	FOREIGN KEY (productid) REFERENCES products (id),
	PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS products (
	id 			SERIAL			NOT NULL UNIQUE,
	name 		VARCHAR(30)		NOT NULL,
	price 		INT				NOT NULL,
	imgurl		VARCHAR(100)	NOT NULL,
	description	VARCHAR(200)	NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS purchases (
	id			SERIAL 			NOT NULL UNIQUE,
	cartid		INT 			NOT NULL,
	date		DATE			NOT NULL,
	total		INT				NOT NULL,
	FOREIGN KEY (cartid) REFERENCES carts (id),
	PRIMARY	 KEY (id)
);

