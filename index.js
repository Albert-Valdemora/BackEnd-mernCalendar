const express = require('express');
require('dotenv').config();
const cors = require('cors');
const {dbConnection} = require('./database/config');


//Crear el sevidor de express
const app = express()


//Base de datos
dbConnection();


//cors
app.use(cors());

//Lectura y paseo del body
app.use ( express.json() );


//Directorio publico
app.use( express.static('public') );



//Rutas

//TODO: auth // crear, login, renew
app.use('/api/auth', require('./routes/auth'));

//TODO: CRUD: Eventos
app.use('/api/events', require('./routes/events'));


//Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
})