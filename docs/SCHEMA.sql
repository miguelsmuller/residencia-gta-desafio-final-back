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


-- 20 Restaurantes
insert into restaurants (name, owner, address, description, image) values ('Hoppe-Becker', 'Goober Weddell', '8776 Glendale Court', 'blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede', 'https://robohash.org/etvoluptatemcorporis.png?size=150x150&set=set1');
insert into restaurants (name, owner, address, description, image) values ('Wyman, Wisoky and Ebert', 'Ali Blezard', '62 Kipling Lane', 'donec ut mauris eget massa tempor convallis nulla neque libero convallis eget', 'https://robohash.org/quiautexplicabo.png?size=150x150&set=set1');
insert into restaurants (name, owner, address, description, image) values ('Walker-O''Connell', 'Vallie Edden', '1 Scoville Crossing', 'diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris', 'https://robohash.org/eosblanditiissapiente.png?size=150x150&set=set1');
insert into restaurants (name, owner, address, description, image) values ('Kunze Inc', 'Amaleta Sharpling', '55 Lighthouse Bay Avenue', 'in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere', 'https://robohash.org/autemidea.png?size=150x150&set=set1');
insert into restaurants (name, owner, address, description, image) values ('Krajcik Group', 'Stanwood Scholler', '842 Nancy Terrace', 'eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at', 'https://robohash.org/quodtotamadipisci.png?size=150x150&set=set1');
insert into restaurants (name, owner, address, description, image) values ('Jenkins Group', 'Carlie Avramov', '8 Commercial Terrace', 'velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque', 'https://robohash.org/aomnisvoluptas.png?size=150x150&set=set1');
insert into restaurants (name, owner, address, description, image) values ('Conroy Inc', 'Sayres Leyninye', '8 Hazelcrest Road', 'tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla', 'https://robohash.org/esseplaceatvero.png?size=150x150&set=set1');
insert into restaurants (name, owner, address, description, image) values ('Borer-Kuhlman', 'Efren Ricson', '5 Kropf Terrace', 'vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio', 'https://robohash.org/possimusquiadolorum.png?size=150x150&set=set1');
insert into restaurants (name, owner, address, description, image) values ('Towne Group', 'Cassondra Kneel', '44315 Amoth Trail', 'ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu', 'https://robohash.org/doloresquiaoccaecati.png?size=150x150&set=set1');
insert into restaurants (name, owner, address, description, image) values ('Gulgowski, Hettinger and Willms', 'Willem Aizikov', '19 Donald Trail', 'ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam', 'https://robohash.org/estdoloremqui.png?size=150x150&set=set1');
insert into restaurants (name, owner, address, description, image) values ('Mayert, Smitham and Swaniawski', 'Claribel Wilson', '8117 South Road', 'proin at turpis a pede posuere nonummy integer non velit', 'https://robohash.org/temporibusplaceatquam.png?size=150x150&set=set1');
insert into restaurants (name, owner, address, description, image) values ('Collier-Pollich', 'Arman Trigwell', '83 Main Trail', 'tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla', 'https://robohash.org/voluptatibusmagnamrecusandae.png?size=150x150&set=set1');
insert into restaurants (name, owner, address, description, image) values ('Donnelly LLC', 'Hillel Squibe', '3785 Carpenter Point', 'cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam', 'https://robohash.org/laborumetdolor.png?size=150x150&set=set1');
insert into restaurants (name, owner, address, description, image) values ('Beer-Bergstrom', 'Fredric Antonikov', '9 Fisk Park', 'sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat', 'https://robohash.org/maximevoluptatemet.png?size=150x150&set=set1');
insert into restaurants (name, owner, address, description, image) values ('Murazik and Sons', 'Carlita Ousby', '15 Michigan Road', 'lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat', 'https://robohash.org/atquedoloresvel.png?size=150x150&set=set1');
insert into restaurants (name, owner, address, description, image) values ('Walsh, Harvey and Muller', 'Berget Raspison', '33783 Moland Park', 'vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum', 'https://robohash.org/utetbeatae.png?size=150x150&set=set1');
insert into restaurants (name, owner, address, description, image) values ('Wilkinson-Bernhard', 'Claudina Deevey', '8 Hayes Alley', 'lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in', 'https://robohash.org/voluptatemquodeserunt.png?size=150x150&set=set1');
insert into restaurants (name, owner, address, description, image) values ('Koelpin-Leannon', 'Erhart Grayley', '5178 Larry Place', 'primis in faucibus orci luctus et ultrices posuere cubilia curae duis', 'https://robohash.org/utinquo.png?size=150x150&set=set1');
insert into restaurants (name, owner, address, description, image) values ('Cartwright LLC', 'Hewe Lambrecht', '7008 Lighthouse Bay Drive', 'ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in', 'https://robohash.org/delenitiquasautem.png?size=150x150&set=set1');
insert into restaurants (name, owner, address, description, image) values ('Fay and Sons', 'Gillan Excell', '179 Derek Terrace', 'aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede', 'https://robohash.org/quisvoluptatedolor.png?size=150x150&set=set1');



-- 50 produtos
insert into products (id_restaurant, name, description, price, image) values (17, 'Beef - Flank Steak', 'Nulla tellus.', 22.41, 'https://robohash.org/recusandaeaccusamusaliquid.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (20, 'Truffle Cups - Red', 'Pellentesque viverra pede ac diam.', 13.01, 'https://robohash.org/estvoluptatemdolorem.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (10, 'Star Fruit', 'Nulla ut erat id mauris vulputate elementum.', 3.58, 'https://robohash.org/voluptasvoluptatibusexpedita.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (12, 'Vermouth - Sweet, Cinzano', 'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 9.02, 'https://robohash.org/quiaquiaamet.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (11, 'Island Oasis - Sweet And Sour Mix', 'Suspendisse accumsan tortor quis turpis.', 32.56, 'https://robohash.org/quisnobisea.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (4, 'Pasta - Cannelloni, Sheets, Fresh', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.', 28.18, 'https://robohash.org/doloremqueassumendaillum.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (6, 'Flounder - Fresh', 'Sed vel enim sit amet nunc viverra dapibus.', 25.09, 'https://robohash.org/laudantiuminventoremodi.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (13, 'Coffee Decaf Colombian', 'Etiam faucibus cursus urna.', 30.86, 'https://robohash.org/facilisethic.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (11, 'Juice - V8 Splash', 'Duis ac nibh.', 24.92, 'https://robohash.org/autautet.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (8, 'Tequila - Sauza Silver', 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 14.79, 'https://robohash.org/officiisabut.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (20, 'Tea - Black Currant', 'Ut tellus.', 3.97, 'https://robohash.org/maioresmollitiaaliquid.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (15, 'Wine - Montecillo Rioja Crianza', 'Fusce posuere felis sed lacus.', 9.03, 'https://robohash.org/temporibuspraesentiumquos.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (11, 'Cup Translucent 9 Oz', 'Morbi non lectus.', 14.46, 'https://robohash.org/quiaducimussed.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (3, 'Tuna - Yellowfin', 'Nulla nisl.', 7.43, 'https://robohash.org/facereerroreveniet.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (20, 'Guava', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 32.55, 'https://robohash.org/fugiatducimussed.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (2, 'Cookies - Oreo, 4 Pack', 'Integer ac neque.', 30.95, 'https://robohash.org/rerumipsamet.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (16, 'Soup - Campbells Pasta Fagioli', 'Pellentesque eget nunc.', 3.29, 'https://robohash.org/autemdolorrepellendus.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (3, 'Bouq All Italian - Primerba', 'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.', 19.33, 'https://robohash.org/officiaeostotam.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (9, 'Chips Potato Reg 43g', 'Duis ac nibh.', 6.36, 'https://robohash.org/eaoptioid.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (16, 'Beef - Striploin', 'Donec posuere metus vitae ipsum.', 14.62, 'https://robohash.org/quasexplicabomollitia.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (1, 'Filo Dough', 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 27.06, 'https://robohash.org/officiisveroest.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (14, 'Orange Roughy 4/6 Oz', 'In blandit ultrices enim.', 9.08, 'https://robohash.org/enimquiasperiores.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (14, 'Beef - Rib Eye Aaa', 'Donec ut dolor.', 33.43, 'https://robohash.org/idisteenim.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (14, 'Cup Translucent 9 Oz', 'Nulla tellus.', 27.65, 'https://robohash.org/excepturivoluptasvel.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (4, 'Pasta - Tortellini, Fresh', 'Donec posuere metus vitae ipsum.', 11.13, 'https://robohash.org/recusandaeullamsuscipit.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (9, 'Wine - Pinot Noir Mondavi Coastal', 'Proin at turpis a pede posuere nonummy.', 32.05, 'https://robohash.org/estvoluptatemnisi.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (12, 'Ketchup - Tomato', 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 31.79, 'https://robohash.org/etundeomnis.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (10, 'Wine - Kwv Chenin Blanc South', 'Nulla facilisi.', 20.73, 'https://robohash.org/doloremsapienteeaque.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (1, 'Wine - Barossa Valley Estate', 'Maecenas ut massa quis augue luctus tincidunt.', 1.94, 'https://robohash.org/distinctiositvel.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (18, 'Pepper - Roasted Red', 'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.', 10.61, 'https://robohash.org/commodiprovidentet.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (16, 'Vegetable - Base', 'Cras in purus eu magna vulputate luctus.', 28.86, 'https://robohash.org/repellatsedrepellendus.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (2, 'Ice Cream Bar - Rolo Cone', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 11.47, 'https://robohash.org/evenietquoet.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (17, 'Cake - Box Window 10x10x2.5', 'Donec ut mauris eget massa tempor convallis.', 6.73, 'https://robohash.org/itaqueidunde.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (2, 'Muffin Mix - Chocolate Chip', 'Duis consequat dui nec nisi volutpat eleifend.', 9.05, 'https://robohash.org/itaquemodiut.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (20, 'Tea - Decaf 1 Cup', 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.', 28.82, 'https://robohash.org/veritatiscorruptidolorem.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (17, 'Mix Pina Colada', 'Aenean auctor gravida sem.', 27.12, 'https://robohash.org/rationeevenietin.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (15, 'Jam - Blackberry, 20 Ml Jar', 'Aliquam erat volutpat.', 15.95, 'https://robohash.org/consequunturrepellatperferendis.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (8, 'Chips - Potato Jalapeno', 'Nullam varius.', 28.67, 'https://robohash.org/utoditnon.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (3, 'Bread - Calabrese Baguette', 'Morbi vel lectus in quam fringilla rhoncus.', 10.64, 'https://robohash.org/repudiandaequiasit.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (6, 'Sterno - Chafing Dish Fuel', 'Etiam faucibus cursus urna.', 33.51, 'https://robohash.org/etetunde.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (20, 'Leeks - Baby, White', 'Pellentesque viverra pede ac diam.', 7.24, 'https://robohash.org/harumaliquamquas.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (6, 'Muskox - French Rack', 'Nunc purus.', 10.01, 'https://robohash.org/culpaetexercitationem.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (16, 'Alize Sunset', 'Vivamus in felis eu sapien cursus vestibulum.', 31.32, 'https://robohash.org/voluptatesquodquasi.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (9, 'Cornstarch', 'In sagittis dui vel nisl.', 33.1, 'https://robohash.org/etvoluptatemaut.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (3, 'Spice - Chili Powder Mexican', 'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 17.75, 'https://robohash.org/molestiaeexcepturiofficiis.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (5, 'Lettuce - Boston Bib - Organic', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.', 24.75, 'https://robohash.org/quiarerumaut.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (4, 'Tomato - Green', 'Cras in purus eu magna vulputate luctus.', 27.19, 'https://robohash.org/ataddolorem.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (15, 'Bread - Crusty Italian Poly', 'Nullam porttitor lacus at turpis.', 14.43, 'https://robohash.org/architectositaut.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (3, 'Lamb Rack - Ontario', 'Aliquam non mauris.', 14.77, 'https://robohash.org/suscipitsaepeasperiores.png?size=150x150&set=set1');
insert into products (id_restaurant, name, description, price, image) values (18, 'Bandage - Flexible Neon', 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 29.94, 'https://robohash.org/eligendicommodiat.png?size=150x150&set=set1');