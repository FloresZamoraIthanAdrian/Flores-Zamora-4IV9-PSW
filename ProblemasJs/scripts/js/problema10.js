function validar(e) {

    var entrada = (document.all) ? e.keyCode : e.which;

    if (entrada == 8) return true;

    var patron = /[0-9\d]/;

    var prueba = String.fromCharCode(entrada);

    return patron.test(prueba);

}

function utilidades(){

    var sueldo = parseFloat(document.getElementById('salario').value);
    var antiguedad = parseInt(document.getElementById('antiguedad').value);
    var input = document.getElementById('calculado');

    var div = antiguedad / 12;

    if(div < 1){
        
        input.value = `Utilidad: ${sueldo * 0.05}`

    }else if(div > 1 && div < 2){

        input.value = `Utilidad: ${sueldo * 0.07}`

    }else if(div > 2 && div < 5){

        input.value = `Utilidad: ${sueldo * 0.1}`

    }else if(div > 5 && div < 10){

        input.value = `Utilidad: ${sueldo * 0.15}`

    }else if(div > 10 ){

        input.value = `Utilidad: ${sueldo * 0.2}`

    }

}