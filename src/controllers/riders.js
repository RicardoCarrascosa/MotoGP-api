// Cargo el modelo para saber como tengo que guardar los datos
const Rider = require('../models/riders.js')

// Create:

// Creo un Rider, Funcion ASINCRONA, requirements, response, next
const postRider = async (req, res, next) => {
  try {
    const newRider = new Rider(req.body)
    const riderSaved = newRider.save()
    return res.status(200).json(riderSaved)
  } catch (error) {
    res.status(400).json('Error')
  }
}

//Read:

const getRiders = async (req, res, next) => {
  try {
    const allRiders = await Rider.find()
    return res.status(200).json(allRiders)
  } catch (error) {
    res.status(400).json('Error en el Read')
  }
}
//Read:  By ID
const getRiderById = async (req, res, next) => {
  try {
    const { id } = req.params
    const rider = await Rider.find({ _id: id })
    return res.status(200).json(rider)
  } catch (error) {
    res.status(400).json('Error en el Read')
  }
}
// Update:
const updateRider = async (req, res, next) => {
  try {
    const { id } = req.params
    newRider = new Rider(req.body)
    newRider._id = id
    const updateRider = await Rider.findByIdAndUpdate(id, newRider, { new: true })
    return res.status(200).json(updateRider)
  } catch (error) {
    res.status(400).json('Error en el Update')
  }
}

// Delete:
const deleteRider = async (req, res, next) => {
  try {
    const { id } = req.params
    const riderDeleted = await Rider.findByIdAndDelete(id)
    return res.status(200).json(riderDeleted)
  } catch (error) {
    return res.status(400).json('Error at Delete Rider')
  }
}

// Exporto las funciones
module.exports = { getRiders, getRiderById, postRider, updateRider, deleteRider }
