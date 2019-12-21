const mongoose = require('mongoose')

const filmSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  ageRestriction: {
      type: Number,
      required: true
  },
  duration: {
      type: Number,
      required: true
  },
  genres: {
      type: Object,
      required: true
  },
  releaseDate: {
      type: String,
      required: true
  },
  plot: {
      type: String,
      required: true
  },
  director: {
      type: String,
      required: true
  },
  writers: {
      type: Object,
      required: true
  },
  stars: {
      type: Object,
      required: true
  },
  scores: {
      type: Object,
      required: true
  }
},{
    timestamps: true
}
)

module.exports = mongoose.model('Film', filmSchema)