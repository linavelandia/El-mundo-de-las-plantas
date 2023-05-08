const express = require('express');
const { faker } = require('@faker-js/faker')
const routerRegistro = express.Router();


routerRegistro.get('/', (req, res) =>{
  const Clientes = []
  for(let index = 0; index < 100; index++){
    Clientes.push({
      correo: faker.commerce.productName(),
      contraseña: faker.commerce.productDescription(),
    })
  }
  res.json(Clientes);
})

routerRegistro.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  });
});



module.exports = routerRegistro;

/*
let iniciar = document.getElementById('boton-iniciar-sesion')
iniciar.addEventListener('click', iniciarSesion)
let registro = document.getElementById('boton_registro')
registro.addEventListener('click', registrarse)

function iniciarSesion(){
    let correoInicio= document.getElementById('correo_sesion').value;
    let contraseñaInicio = document.getElementById('contraseña_sesion').value;

    alert("haz iniciado tu sesion correctamente tu correo es " + correoInicio + " tu contraseña es " + contraseñaInicio)
}

function registrarse(){
    let nombreRegistro= document.getElementById('nombre_registro').value;
    let correoRegistro= document.getElementById('correo_registro').value;
    let contraseñaRegistro= document.getElementById('contraseña_registro').value;

    alert("holaaa "+ nombreRegistro + " haz iniciado tu sesion correctamente tu correo es " + correoRegistro + " tu contraseña es " + contraseñaRegistro)

    registroUnico()
}/*
/*
function registroUnico(){
  fetch("http://localhost:8080/registro")
    .then(function(res){
      console.log(res)
    })
}*/