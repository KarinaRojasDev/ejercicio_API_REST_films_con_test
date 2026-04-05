const express = require("express");
const router = express.Router();
const {
  getFilm,
  addFilm,
  updateFilm,
  deleteFilm,
} = require("../controllers/films.controller");

router.get("/film/:title", getFilm);
router.post("/film/", addFilm);
router.put("/film/", updateFilm);
router.delete("/film/", deleteFilm);

module.exports = router;
