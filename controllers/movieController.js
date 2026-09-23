const axios = require("axios");

const searchMovies = async (req, res) => {
  const { title } = req.query; //req.query contains/has the movie title to display when asked.

  if (!title) {
    return res.status(400).json({ error: "Title query parameter is required" });
  } //if someone searches without a title, return error message.

  try {
    const response = await axios.get("http://www.omdbapi.com/", {
      params: { s: title, apikey: process.env.OMDB_API_KEY },
    });

    return res.json(response.data);
  } catch (error) {
    return res.status(500).json({ error: "Failed to search movies" });
  }
};

const getMovieDetails = (req, res) => {};

module.exports = { searchMovies, getMovieDetails };
