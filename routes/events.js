/*
  Rutas de Usuarios / Event
  host + /api/events
*/

const {getEventos, crearEvento, actualizarEvento, eliminarEvento} = require('../controllers/events')
const express = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = express.Router();
const {check} = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const {isDate} = require('../helpers/isDate');


//Todas tienen que pasar por la validacion del JWT
router.use( validarJWT );


//Obtener eventos
router.get('/', getEventos);


//Crear un  nuevo evento
router.post(
    '/',
    [
      check('title', 'El titulo es obligatorio').not().isEmpty(),
      check('start', 'Fecha de inicio es obligatoria').custom(isDate),
      check('end', 'Fecha de finalizacion es obligatoria').custom(isDate),
      validarCampos
    ],
    crearEvento
  );


//Actualizar evento
router.put('/:id', actualizarEvento);


// //Borrar evento
router.delete('/:id', eliminarEvento);

module.exports = router;












