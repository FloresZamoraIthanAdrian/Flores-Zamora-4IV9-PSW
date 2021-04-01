function validar(e) {

    var entrada = (document.all) ? e.keyCode : e.which;

    if (entrada == 8) return true;

    var patron = /[0-9\d]/;

    var prueba = String.fromCharCode(entrada);

    if (entrada == 13) {

        console.log('ola owo');
        /* document.getElementById('mujeres').focus();
        esto deberia jalar pero nomas no */

    }

    return patron.test(prueba);

}

function calcular() {

    var hombres = parseInt(document.getElementById('hombres').value);
    var mujeres = parseInt(document.getElementById('mujeres').value);

    var total = hombres + mujeres

    var porcentajeHombre = hombres * 100 / total;
    var porcentajeMujer = mujeres * 100 / total;

    document.getElementById('mostrar').textContent = `Hombres: %${porcentajeHombre.toFixed(2)} Mujeres: %${porcentajeMujer.toFixed(2)}`;

}
