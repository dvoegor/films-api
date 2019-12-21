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
    await Film.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          ageRestriction: req.body.ageRestriction,
          duration: req.body.duration,
          genres: req.body.genres,
          releaseDate: req.body.releaseDate,
          plot: req.body.plot,
          director: req.body.director,
          writers: req.body.writers,
          stars: req.body.stars,
          scores: req.body.scores
        }
      })
    const result = await Film.findById(req.params.id)
    res.status(200).json(result)
    makeLog(req, res, result)
  } catch (err) {
    res.status(400).json(result = { message: err.message })
    makeLog(req, res, result)
  }
})

module.exports = router