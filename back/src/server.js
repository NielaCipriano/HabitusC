const express = require('express');
const cors = require('cors');
const routes = require('./routes');

require('./database');

const app = express();

app.use(cors());
app.use(express.json()); //para reconhecer json
app.use(routes); //para usar as rotas
app.listen(3333); //porta