![Imgur](https://i.imgur.com/j9JmM4L.png)

# **Trilha Específica - Desafio Final - Back End**

# **Apresentação**

### **Equipe 2 - 11/04/2022 a 14/04/2022**

- [Alexia Assumpção](https://github.com/alexiaassumpcao)
- [Carlos Lopes](https://github.com/devcarlosl)
- [Heloise Meirelles](https://github.com/Heloisemeirelles)
- [Miguel Müller](https://github.com/miguelsmuller)

### Repositórios Relacionados

- [Repositório do **_Front End_**](https://github.com/Heloisemeirelles/theJasonsProject)
- [Repositório do **_Back End_**](https://github.com/miguelsmuller/residencia-gta-desafio-final-back)
- [Repositório do **_Back End_** em **_Go_**](https://github.com/miguelsmuller/residencia-gta-desafio-final-back-go)

# **Planning**

- [Trello Board](https://trello.com/b/KfE5ZTRF/the-jasons-projectd)
- [Data Base Planning](./docs/planing/PLANING_DB.md)
- [Back-End Planning](./docs/planing/PLANING_BACK.md)

# **Requerimentos**

#### _Banco de Dados_

Postgres Data Base ou Docker para executar o Data Base como container

#### _Variáveis de Ambiente_

Na raiz do projeto existe um arquivo de exemplo (**_.env.example_**) que deve ser copiado e nomeado como **_.env_** e suas variáveis referenciadas conforme necessidade de execução como apresentado na seção abaixo.

# **Execução**

## Executando o Back End com **_NPM_**

`npm run server`

Nesse cenário a variável de ambiente `DB_HOST` deverá ser definida como `localhost` ou com o endereço de um Postgres Data Base válido e com o schema montado.

## Executando o Back End com **_Docker_**

#### _Executar somente Postgres Data Base_

`docker-compose up --detach --force-recreate --build database`

`docker-compose up --detach --force-recreate --build database pgadmin`

Nesse cenário a variável de ambiente `DB_HOST` deverá ser definida como `localhost` ou com o endereço de um Postgres Data Base válido e com o schema montado.

#### _Executar a API e o Postgres Data Base_

`docker-compose up --detach --force-recreate --build database api`

Nesse cenário a variável de ambiente `DB_HOST` deverá ser definida como `database` ou com o endereço de um Postgres Data Base válido e com o schema montado.

# **Comando úteis**

| Comando                                  | Descrição                                        |
| ---------------------------------------- | ------------------------------------------------ |
| `docker-compose stop`                    | Interrompe os container do projeto               |
| `docker-compose down -v`                 | Apaga o conjunto removendo os volumes do projeto |
| `netstat -a -b`                          | Lista as portas abertas na máquina               |
| `docker build -t {NOME-IMAGEM} .`        | Cria uma imagem - comando para o Front End       |
| `docker run -p 8001:80 -d {NOME-IMAGEM}` | Executa uma image - comando para o Front End     |
