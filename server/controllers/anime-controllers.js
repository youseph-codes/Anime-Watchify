const Anime = require("../models/anime-model");

// Create anime 
createAnime = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a valid anime!",
    });
  }

  const anime = new Anime(body);

  if (!anime) {
    return res.status(400).json({ success: false, error: err });
  }

  anime
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: anime._id,
        message: "Anime created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Anime not created!",
      });
    });
};

module.exports = createAnime;
