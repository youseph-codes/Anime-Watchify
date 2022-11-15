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

// Update anime
updateAnime = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update!",
    });
  }

  Anime.findOne({ _id: req.params.id }, (err, anime) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Anime not found!",
      });
    }
    anime.name = body.name;
    anime.time = body.time;
    anime.rating = body.rating;
    anime
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: anime._id,
          message: "Anime updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Anime not updated!",
        });
      });
  });
};

// Delete anime
deleteAnime = async (req, res) => {
  await Anime.findOneAndDelete({ _id: req.params.id }, (err, anime) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!anime) {
      return res.status(404).json({ success: false, error: `Anime not found!` });
    }

    return res.status(200).json({ success: true, data: anime });
  }).catch((err) => console.log(err));
};

// Get all animes
getAnimes = async (req, res) => {
  await Anime.find({}, (err, animes) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!animes.length) {
      return res.status(404).json({ success: false, error: `Anime not found!` });
    }
    return res.status(200).json({ success: true, data: animes });
  }).catch((err) => console.log(err));
};

module.exports = { createAnime, updateAnime, deleteAnime, getAnimes };
