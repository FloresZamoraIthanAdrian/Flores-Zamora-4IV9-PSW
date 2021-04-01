function validar(e){

    var entrada = (document.all)? e.keyCode : e.which;

    if (entrada == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(entrada);

    return patron.test(prueba);

}

function calcularSueldo(){
    var base = parseFloat(document.getElementById('base').value);
    var comision = parseFloat(document.getElementById('comision').value);

    var sueldo = base + comision;

    document.getElementById('sueldo').value = `El sueldo total es de: $${sueldo}`;

}

