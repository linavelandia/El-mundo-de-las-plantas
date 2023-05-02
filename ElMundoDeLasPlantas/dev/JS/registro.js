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
}