
let total_element = document.getElementById('contador')

function sumar () {
    let total_value = parseInt(total_element.innerHTML);
    total_element.innerHTML = total_value + 1;
  }
  
  
  function restar () {
    let total_value = parseInt(total_element.innerHTML);
    if (total_value == 0) return; // validamos que el valor no sea menor a 0
    total_element.innerHTML = total_value - 1;
  }


document.getElementById('suma').addEventListener('click', sumar);

document.getElementById('resta').addEventListener('click', restar);


/*function contadorProductos() {
    if( contadorResta == true){
        if(contador = 0){
            console.log(contador)
        }
        else if(contador >= 1){
            contador --
            console.log(contador)
        }
        else{
            console.log("error")
        }
    }
    else if( contadorSuma = true ){
        if(contador = 0){
            console.log(contador)
        }
        else if(contador >= 1){
            contador ++
            console.log(contador)
        }
        else{
            console.log("error")
        }
    }
}*/
