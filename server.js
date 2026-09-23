const express = require("express");
require("dotenv").config();
const movieRoutes = require("./routes/movieRoutes");
const app = express();

app.use(express.json()); //Know to read json text
app.use("/api", movieRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http:/localhost:${port}`);
});
