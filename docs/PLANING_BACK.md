# **Back-End**

**`Express`** X Next.js

_Lembrar de implementar validações_

- POST {URL}/restaurants/
__request body__
```
{
    "name": "Mc donalds", //string
    "owner": "Ronald mc donalds", //string
    "address": "Rua sem cobertura, 33", //string
    "description": "Restaurante para comidas frias", //string
    "image": "https://insira.uma.imagem.aqui.com.br/", //string
}
```
- GET {URL}/restaurants/
__response body__
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
__response body__
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
        "extras": [
            {
                "name": "queijo", //string
                "price": 2.00, //float64
            }
        ]
    }]
}
```
- GET {URL}/restaurants/:id/products
`ja vir com os adicionais de cada produto`
__response body__
```
"products": [{
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
    }]
```
- POST {URL}/restaurants/:id/products
__request body__
```
{
    "name": "cheeseburguer", //string
    "description": "pão, carne e queijo", //string
    "price": 15.00, //float64
    "image": "https://insira.uma.imagem.aqui.com.br/", //string     
}
```
- POST {URL}/restaurants/:id/products/:id/adicionais
__request body__
```
{
    "name": "queijo", //string
    "price": 2.00, //float64      
}
```

- GET {URL}/restaurants/:id/products/:id
`ja vir com os adicionais de cada produto`
__response body__
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
- GET {URL}/restaurants/:id/products/:id/extras
`ja vir com os adicionais de cada produto`
__response body__
```
"extras": [
    {
        "name": "queijo", //string
        "price": 2.00, //float64
    }
]
```
