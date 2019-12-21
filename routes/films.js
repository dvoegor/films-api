const express = require('express')
const router = express.Router()
const Film = require('../models/film')
const Log = require('../models/log')

function makeLog(req, res, result) {
  const log = new Log({
    ip: req.ip,
    originalUrl: req.originalUrl,
    time: Date(),
    method: req.method,
    status: res.statusCode,
    headers: res._header,
    request: req.body,
    response: result
  })
  log.save();
}

// GET
router.get('/', async (req, res) => {
  try {
    const result = await Film.find(req.query)
    res.status(200).json(result)
    makeLog(req, res, result)
  } catch (err) {
    res.status(500).json(result = { message: err.message })
    makeLog(req, res, result)
  }
})

// GET by id
router.get('/:id', async (req, res) => {
  try {
    const result = await Film.findById(req.params.id)
    res.status(200).json(result)
    makeLog(req, res, result)
  } catch (err) {
    res.status(500).json(result = { message: err.message })
    makeLog(req, res, result)
  }
})

// POST
router.post('/', async (req, res) => {
  const film = new Film({
    title: req.body.title,
    ageRestriction: req.body.ageRestriction,
    duration: req.body.duration,
    releaseDate: req.body.releaseDate,
    plot: req.body.plot,
    director: req.body.director,
    writers: req.body.writers,
    stars: req.body.stars,
    genres: req.body.genres,
    scores: req.body.scores,
  })
  try {
    const result = await film.save();
    res.status(201).json(result)
    makeLog(req, res, result)
  } catch (err) {
    res.status(400).json(result = { message: err.message })
    makeLog(req, res, result)
  }
})

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Film.deleteOne({ _id: req.params.id })
    res.status(200).json(result = { message: `Film with _id:${req.params.id} is deleted` })
    makeLog(req, res, result)
  } catch (err) {
    res.status(500).json(result = { message: err.message })
    makeLog(req, res, result)
  }
})

// UPDATE
router.patch('/:id', async (req, res) => {
  try {
    const result = await Film.findById(req.params.id)
    if (req.body.title != null) {
      result.title = req.body.title
    }
    if (req.body.ageRestriction != null) {
      result.ageRestriction = req.body.ageRestriction
    }
    if (req.body.duration != null) {
      result.duration = req.body.duration
    }
    if (req.body.genres != null) {
      result.genres = req.body.genres
    }
    if (req.body.releaseDate != null) {
      result.releaseDate = req.body.releaseDate
    }
    if (req.body.plot != null) {
      result.plot = req.body.plot
    }
    if (req.body.director != null) {
      result.director = req.body.director
    }
    if (req.body.writers != null) {
      result.writers = req.body.writers
    }
    if (req.body.stars != null) {
      result.stars = req.body.stars
    }
    if (req.body.scores != null) {
      result.scores = req.body.scores
    }
    result.save()
    res.status(200).json(result)
    makeLog(req, res, result)
  } catch (err) {
    res.status(400).json(result = { message: err.message })
    makeLog(req, res, result)
  }
})

module.exports = router