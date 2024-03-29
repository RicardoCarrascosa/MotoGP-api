const {
  postRider,
  getRiderById,
  getRiders,
  updateRider,
  deleteRider
} = require('../controllers/riders.js')

// Del modulo express aqui solo quiero las RUTAS
const ridersRoutes = require('express').Router()

ridersRoutes.get('/getRiderByID/:id', getRiderById)
ridersRoutes.get('/', getRiders)
ridersRoutes.post('/', postRider)
ridersRoutes.put('/:id', updateRider)
ridersRoutes.delete('/:id', deleteRider)

module.exports = ridersRoutes
