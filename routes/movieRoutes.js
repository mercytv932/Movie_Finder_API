const express = require("express");
const router = express.Router();

const {
  searchMovies,
  getMovieDetails,
} = require("../controllers/movieController"); //Get these function from movieController.js

router.get("/search", searchMovies);
router.get("/movies/:id", getMovieDetails);

module.exports = router;
