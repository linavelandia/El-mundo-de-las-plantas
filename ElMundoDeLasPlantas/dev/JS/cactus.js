const contenedorCactus = document.getElementById('contenedor_cactus')

let plantas= []
let opcionDePlantas
enlaceCactus1 = document.getElementById('cactus1')
enlaceCactus2 = document.getElementById('cactus2')
enlaceCactus3 = document.getElementById('cactus3')

class Plantas {
    constructor(foto, nombre, precio){
        this.foto = foto
        this.nombre = nombre
        this.precio = precio
    }
}
let cactus1 = new Plantas('../assets/cactus1.jpg', 'Cactus1', 5000)
let cactus2 = new Plantas('../assets/cactus2.jpg', 'Cactus2', 7000)
let cactus3 = new Plantas('../assets/cactus3.jpg', 'Cactus3', 5000)

plantas.push(cactus1,cactus2,cactus3)

function mostrarPlantas(){
    plantas.forEach((plantas) => {
        opcionDePlantas = `
        <div class="general">
                <a id${plantas.nombre} href="">
                    <div class="imagen_button_card">
                        <img src=${plantas.foto}>
                        <button type="button" class="añadir_carrito_compra">Agregar al carrito</button>
                    </div>
                    <p class="nombre_planta">${plantas.nombre}</p>
                    <p>Desde ${plantas.precio}</p>
                </a>
        </div>
        `
        contenedorCactus.innerHTML += opcionDePlantas
        enlaceCactus1 = document.getElementById('Cactus1')
        enlaceCactus2 = document.getElementById('Cactus2')
        enlaceCactus3 = document.getElementById('Cactus3')
    })
}

window.addEventListener('load', mostrarPlantas)