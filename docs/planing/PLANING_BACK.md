# **Back-End**

**`Express`** X ~~**Next.js**~~

_Lembrar de implementar validações_

- GET {URL}/restaurants/
  **response body**

```
"restaurants":[
    {
        "name": "Mc donalds", //string
        "owner": "Ronald mc donalds", //string
        "address": "Rua sem cobertura, 33", //string
        "description": "Restaurante para comidas frias", //string
        "image": "https://insira.uma.imagem.aqui.com.br/", //string
    }, ...
]
```

- GET {URL}/restaurants/:id
  **response body**

```
{
    "name": "Mc donalds", //string
    "owner": "Ronald mc donalds", //string
    "address": "Rua sem cobertura, 33", //string
    "description": "Restaurante para comidas frias", //string
    "image": "https://insira.uma.imagem.aqui.com.br/", //string
}
```

- GET {URL}/restaurants/:id/products
  `ja vir com os adicionais de cada produto`
  **response body**

```
{
    "name": "Mc donalds", //string
    "owner": "Ronald mc donalds", //string
    "address": "Rua sem cobertura, 33", //string
    "description": "Restaurante para comidas frias", //string
    "image": "https://insira.uma.imagem.aqui.com.br/", //string
    "products": [{
        "name": "cheeseburguer", //string
        "description": "pão, carne e queijo", //string
        "price": 15.00, //float64
        "image": "https://insira.uma.imagem.aqui.com.br/", //string
    }]
}

```

- GET {URL}/products/:id
  `ja vir com os adicionais de cada produto`
  **response body**

```
{
    "name": "cheeseburguer", //string
    "description": "pão, carne e queijo", //string
    "price": 15.00, //float64
    "image": "https://insira.uma.imagem.aqui.com.br/", //string
}
```

- GET {URL}/products/:id/extras
  `ja vir com os adicionais de cada produto`
  **response body**

```
{
    "name": "cheeseburguer", //string
    "description": "pão, carne e queijo", //string
    "price": 15.00, //float64
    "image": "https://insira.uma.imagem.aqui.com.br/", //string
    "extras": [
        {
            "name": "queijo", //string
            "price": 2.00, //float64
        }
    ]
}
```

- POST {URL}/restaurants/:id/products/
  **request body**

```
{
    "name": "cheeseburguer", //string
    "description": "pão, carne e queijo", //string
    "price": 15.00, //float64
    "image": "https://insira.uma.imagem.aqui.com.br/", //string
    "extras": [
        {
            "name": "queijo", //string
            "price": 2.00, //float64
        }
    ]
}
```

- POST {URL}/restaurants/
  **request body**

```
{
    "name": "Mc donalds", //string
    "owner": "Ronald mc donalds", //string
    "address": "Rua sem cobertura, 33", //string
    "description": "Restaurante para comidas frias", //string
    "image": "https://insira.uma.imagem.aqui.com.br/", //string
}
```
