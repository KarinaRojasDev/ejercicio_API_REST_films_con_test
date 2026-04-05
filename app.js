require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

const {getFilm,addFilm,updateFilm,deleteFilm} = require("./controllers/films.controller");

// Rutas
app.get("/api/film/:title", getFilm);
app.post("/api/film/", addFilm);
app.put("/api/film/", updateFilm);
app.delete("/api/film/", deleteFilm);

module.exports = app;