![Imgur](https://i.imgur.com/j9JmM4L.png)

# **Trilha Específica - Desafio Final - Back End**

## **Aula 1 - Equipe 2 - 11/04/2022**

- [Alexia Assumpção](https://github.com/alexiaassumpcao)
- [Carlos Lopes](https://github.com/devcarlosl)
- [Heloise Meirelles](https://github.com/Heloisemeirelles)
- [Miguel Müller](https://github.com/miguelsmuller)

## Projeto de Front-End

- [Link do Repositório de Front End](https://github.com/Heloisemeirelles/theJasonsProject)

## Planning

- [Trello Board](https://trello.com/b/KfE5ZTRF/the-jasons-projectd)
- [Data Base Planning](./docs/planing/PLANING_DB.md)
- [Back-End Planning](./docs/planing/PLANING_BACK.md)

## Docker

### Para Ambiente de Desenvolvimento

`docker-compose up --detach --force-recreate --build database pgadmin`

_**with DB_HOST = localhost**_

### Para Ambiente de Produção

`docker-compose up --detach --force-recreate --build database api`

_**with DB_HOST = database**_

### Encerrar o docker

- `docker-compose stop`
  - Interrompe os container do projeto
- `docker-compose down -v`
  - Apaga o conjunto removendo os volumes do projeto

### Portas Abertas na máquina

- `netstat -a -b`

### Outros

- `docker build -t {NOME-IMAGEM} .`
- `docker run -p 8001:80 -d {NOME-IMAGEM}`
