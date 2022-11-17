const express = require('express')
const animeCtrl = require('../controllers/anime-controllers')
const router = express.Router()

router.post('/anime', animeCtrl.createAnime)
router.put('/anime/:id', animeCtrl.updateAnime)
router.delete('/anime/:id', animeCtrl.deleteAnime)
router.get('/anime/:id', animeCtrl.getAnimeById)
router.get('/animes', animeCtrl.getAnimes)

module.exports = router