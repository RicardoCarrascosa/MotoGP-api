// Cargo la libreria
const mongoose = require('mongoose')

const riderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    number: { type: Number, required: true },
    team: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: 'riders'
  }
)
const Rider = mongoose.model('riders', riderSchema, 'riders')
module.exports = Rider
