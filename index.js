require("dotenv").config();

const colors = require("colors");
const express = require("express");

const app = express();
const port = process.env.SERVER_PORT || 8081;

app.set("view engine", "ejs");
app.use(express.static("./views/"));

app.use(require("./routers/page.controller"));
app.use(require("./routers/redirect.controller"));

app.listen(port, () => console.log(colors.yellow("[SERVER] - Servidor Iniciado com Sucesso;")));