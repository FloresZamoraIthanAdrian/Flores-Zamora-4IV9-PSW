function validarn(e) {
    var teclado = (document.all) ? e.keyCode : e.which;

    if (teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function validarMeses(e) {
    var teclado = (document.all) ? e.keyCode : e.which;

    if (teclado == 8) return true;

    var patron = /[0-9\d ]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function Calcular() {
    var inversion = parseFloat(document.getElementById('invertir').value);
    var numMeses = parseFloat(document.getElementById('tiempoMeses').value);
    var i = 0

    while (i < numMeses) {
        i++
        var total = inversion * 0.02
        var inversion = inversion + total

        var info = `En el mes numero ${i} se genero: $${inversion.toFixed(2)}`
    }

    document.getElementById('inversionFinal').value = info;
}

$("#submitForm").on("click", function (event) {
    event.preventDefault();
});

