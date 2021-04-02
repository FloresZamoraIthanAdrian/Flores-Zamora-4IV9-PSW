function validar(e) {

    var entrada = (document.all) ? e.keyCode : e.which;

    if (entrada == 8) return true;

    var patron = /[0-9\d]/;

    var prueba = String.fromCharCode(entrada);

    return patron.test(prueba);

}

function validarS(e) {

    var entrada = (document.all) ? e.keyCode : e.which;

    if (entrada == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(entrada);

    return patron.test(prueba);

}

var horasIn = document.getElementById('horas');
var sueldoIn = document.getElementById('sueldo');

var totalIn = document.getElementById('total');

function calcularSueldo(){

    var sueldoV = parseFloat(sueldoIn.value);
    var horasV = parseFloat(horasIn.value);
    var normal = sueldoV * horasV;

    if(horas > 40){

    }else{
        
        totalIn.value = `El sueldo total es de ${normla}`

    }


    
}