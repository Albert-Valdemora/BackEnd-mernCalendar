const { response } = require("express");
const Evento = require('../models/Evento');

const getEventos = async (req, res = response()) => {


  try {

    const eventos = await Evento.find().populate('user', 'name');

    res.status(200).json({
      ok: true,
      eventos
    })

  } catch (error) {
    console.log(error);
    res.status(400).json({
      ok: false,
      msg: 'GetEvent incorrecto'
    })

  }

}

const crearEvento = async (req, res = response()) => {

  const evento = new Evento(req.body)

  try {
    evento.user = req.uid;
    const eventoGuardado = await evento.save();

    res.status(200).json({
      ok: true,
      evento: eventoGuardado
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador'
    })

  }

}

const actualizarEvento = async (req, res = response()) => {

  
  const eventoId = req.params.id;
  
  
  try {
    
    const evento = await Evento.findById( eventoId );
    const uid = req.uid;

    if ( !evento ) {
      return res.status(404).json({
        ok: false,
        msg: "Evento no existe por ese id"
      })
    }

    if (evento.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'No tiene privilegio de editar este evento'
      })
    }
    
    const nuevoEvento = {
      ...req.body,
      user: uid
    }

    const eventoActualizado = await Evento.findByIdAndUpdate( eventoId, nuevoEvento, { new: true });

    res.json({
      ok: true,
      evento: eventoActualizado
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador'
    })

  }
}

const eliminarEvento = async (req, res = response()) => {

  const eventoId = req.params.id;  
  const uid = req.uid
  
  
  try {
    const evento = await Evento.findById( eventoId );
    
    if ( !evento ) {
      return res.status(404).json({
        ok: false,
        msg: "Evento no existe por ese id"
      })
    }

    if (evento.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'No tiene privilegio de borrar este evento'
      })
    }

     await Evento.findByIdAndDelete(eventoId);

    res.json({ ok: true })
    

  } catch (error) {
    console.log(error);
    res.status(400).json({
      ok: false,
      msg: 'Error al elimanar el evento'
    })

  }
}



module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento
}