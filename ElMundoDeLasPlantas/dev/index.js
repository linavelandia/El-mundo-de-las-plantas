// Importamos Express desde la carpeta node_modules
const express = require('express');
const routerApi = require('./jsRouter');
// Creamos la aplicación de Express
const app = express();

routerApi(app);

app.use(express.json());

app.listen(3005, () =>{
    console.log("servidor funcionando")
})


/*
// Página para visualizar el mensaje "¡Hola Express!"
app.get('/registro', (req, res) => {
    res.json({
      name: 'Prueba',
      correo: 'prueba@gmail.com'
    });

    //res.setHeader("Access-Control-Allow-Origin", "*")
  });*/

// Escojemos un puerto por el que el servidor web escuchará