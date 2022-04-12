CREATE TABLE restaurants (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    owner varchar(255) NOT NULL,
    address varchar(255) NOT NULL,
    description text NOT NULL,
    image varchar(255) NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE products (
    id int NOT NULL AUTO_INCREMENT,
    id_restaurant int NOT NULL,
    name varchar(255) NOT NULL,
    description text NOT NULL,
    price float(64) NOT NULL,
    image varchar(255) NOT NULL,

    PRIMARY KEY (id)

    FOREIGN KEY (id_restaurant) REFERENCES restaurants(id),
);

CREATE TABLE additional (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    price float(64) NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE products_extras (
    id_product int NOT NULL,
    id_additional int NOT NULL,

    PRIMARY KEY (id,id_additional),

    FOREIGN KEY (id_product) REFERENCES products(id),
    FOREIGN KEY (id_additional) REFERENCES additional(id)
);