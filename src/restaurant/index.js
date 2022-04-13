const express = require('express');

const routes = require('./routes');

const app = express();

const PORT = 1234;

app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`));