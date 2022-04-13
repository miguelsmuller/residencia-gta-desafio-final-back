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