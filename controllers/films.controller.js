const fetchFilm = require("../utils/fetchFilms");

// GET /api/film/:title
const getFilm = async (req, res) => {
  const title = req.params.title;
  const pelicula = await fetchFilm(title);

  if (!pelicula) {
    return res.status(404).json({ message: "Film not found" });
  }

  res.status(200).json(pelicula);
};

// POST /api/film/
const addFilm = async (req, res) => {
  const newFilm = req.body;
  res.status(200).json({ message: `Se ha guardado ${newFilm.Title}` });
};

// PUT /api/film/
const updateFilm = async (req, res) => {
  const updatedFilm = req.body;
  res.status(200).json({ message: `Se ha actualizado ${updatedFilm.Title}` });
};

// DELETE /api/film/
const deleteFilm = async (req, res) => {
  const { id } = req.body;
  res.status(200).json({ message: `Se ha borrado la película con ID: ${id}` });
};

module.exports = {
  getFilm,
  addFilm,
  updateFilm,
  deleteFilm,
};
