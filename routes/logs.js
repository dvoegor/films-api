const express = require('express')
const router = express.Router()
const Log = require('../models/log')

router.get('/', async (req, res) => {
  try {
    const logs = await Log.find(req.query)
    res.json(logs)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router