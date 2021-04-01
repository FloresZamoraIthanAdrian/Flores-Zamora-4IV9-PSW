var f = new Date();
var actual = f.getDate() + (f.getMonth() +1) + f.getFullYear();
console.log(actual)

var fecha = document.getElementById('fecha');
fecha.max = actual

function calcularEdad(){

    console.log(fecha.value)

    if(fecha.value == actual){
        alert('Fecha no valida, intente de nuevo')
    }else{
        alert('Fecha valida')
    }

}