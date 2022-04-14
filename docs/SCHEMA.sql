\c postgres;

CREATE TABLE IF NOT EXISTS restaurants (
  "id" SERIAL,
  "name" TEXT,
  "owner" TEXT,
  "address" TEXT,
  "description" TEXT,
  "image" TEXT,

	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS products (
  "id" SERIAL,
  "id_restaurant" INT,
  "name" TEXT,
  "description" TEXT,
  "price" MONEY,
  "image" TEXT,

	PRIMARY KEY ("id"),

	CONSTRAINT fk_restaurant
		FOREIGN KEY("id_restaurant")
			REFERENCES restaurants("id")
);

CREATE TABLE IF NOT EXISTS additionals (
  "id" SERIAL,
  "name" TEXT,
  "price" MONEY,

  PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS products_extras (
  "id_product" INT,
  "id_additional" INT,

  PRIMARY KEY ("id_product","id_additional"),

	CONSTRAINT fk_product
		FOREIGN KEY("id_product")
			REFERENCES products("id"),

	CONSTRAINT fk_additional
		FOREIGN KEY("id_additional")
			REFERENCES additionals("id")
);






INSERT INTO restaurants(name, owner, address, description, image)
VALUES ('Restaurante1', 'Miguel Muller', 'Rua da Ladeira', 'Restaurante Underground', 'http://');
INSERT INTO restaurants(name, owner, address, description, image)
VALUES ('Restaurant2', 'Alexia Assumpção', 'Rua sem saída', 'Restaurante Hardcore', 'http://');






INSERT INTO products(id_restaurant, name, description, price, image)
VALUES (1, 'X-Tudo', 'Mega Tudão Delicioso', 14.32, 'http://teste');

INSERT INTO products(id_restaurant, name, description, price, image)
VALUES (1, 'X-Salada', 'Mega Saladão Delicioso', 11.78, 'http://teste');

INSERT INTO products(id_restaurant, name, description, price, image)
VALUES (2, 'X-Tudo', 'Tudão Mega Supimpa', 11.21, 'http://teste');




INSERT INTO additionals(name, price)
VALUES ('Bacon', 1.25);

INSERT INTO additionals(name, price)
VALUES ('Cheddar', 3.50);






INSERT INTO products_extras(id_product, id_additional)
VALUES (1, 1);

INSERT INTO products_extras(id_product, id_additional)
VALUES (1, 2);

INSERT INTO products_extras(id_product, id_additional)
VALUES (2, 2);