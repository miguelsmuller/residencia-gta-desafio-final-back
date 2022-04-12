# **Banco da dados**

**`Postgres`** X ~~**MySQL**~~

![DER](./images/DER.jpg)

### restaurants

| field       | type   | obs |
| ----------- | ------ | --- |
| **id**      | SERIAL | PK  |
| name        | TEXT   |     |
| owner       | TEXT   |     |
| address     | TEXT   |     |
| description | TEXT   |     |
| image       | TEXT   |     |

### products

| field             | type   | obs |
| ----------------- | ------ | --- |
| **id**            | SERIAL | PK  |
| **id_restaurant** | INT    | FK  |
| name              | TEXT   |     |
| description       | TEXT   |     |
| price             | MONEY  |     |
| image             | TEXT   |     |

### additionals

| field  | type   | obs |
| ------ | ------ | --- |
| **id** | SERIAL | PK  |
| name   | TEXT   |     |
| price  | MONEY  |     |

### products_extras

| field             | type | obs   |
| ----------------- | ---- | ----- |
| **id_product**    | int  | PK FK |
| **id_additional** | int  | PK FK |
