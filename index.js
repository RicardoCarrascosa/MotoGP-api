//Cargo las variables de estado
require('dotenv').config()
// CArgo la libreria del servidor
const express = require('express')

//Cargo los modulos
const { connectDB } = require('./src/config/db.js')
const riderRoutes = require('./src/routes/riders.js')
// Ejecuto el servidor
const app = express()
// Me conecto a la BBDD
connectDB()

//Le digo a la APP que acepte formato JSON de entrada
app.use(express.json())

// Vinvulo las Rutas
app.use('/api/v1/riders', riderRoutes)
// En el caso que no encuentre una ruta, paso este mensaje
app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})
//Pongo a escuchar al servidor
app.listen(3000, () => {
  console.log('Servidor conectado en http://localhost:3000')
})
