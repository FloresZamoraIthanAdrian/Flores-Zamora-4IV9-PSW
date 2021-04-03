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

function calcularSueldo(){

    /* Consigue el valor de los inputs */
    var sueldoV = parseFloat(document.getElementById('horas').value);
    var horasV = parseFloat(document.getElementById('sueldo').value);
    /* Saca el sueldo de las horas */
    var normal = sueldoV * horasV;

    var horasExtras = 0

    var sueldoD = sueldoV * 2 
    var sueldoT = sueldoV * 3
    var sueldo48 = (sueldoD * 8) + normal

    if(horasV > 40){

        horasExtras = horasV - 40

        if(horasExtras > 8){

            document.getElementById('total').value = `El sueldo total es de: ${((horasExtras - 48) * sueldoT) + sueldo48}`

        }else if(horasExtras <= 8){

            console.log(normal)
            console.log(horasExtras)
            console.log(sueldoD)
            console.log(`${horasExtras*sueldoD}`)

            document.getElementById('total').value = `El sueldo total es de: ${(horasExtras * sueldoD) + normal}`

        }

    }else{
        
        document.getElementById('total').value = `El sueldo total es de: ${normal}`;

    }


    
}