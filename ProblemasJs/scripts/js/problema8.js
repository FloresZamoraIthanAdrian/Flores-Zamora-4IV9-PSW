var num1 = 0
var num2 = 0
var num3 = 0
var contador = 0

function validar(e) {

    var entrada = (document.all) ? e.keyCode : e.which;

    if (entrada == 8) return true;

    var patron = /[0-9\d]/;

    var prueba = String.fromCharCode(entrada);

    if (entrada == 13) {

        contador++

        if (contador == 1) {

            num1 = document.getElementById('comparacion').value;
            document.getElementById('sucesion').textContent = "Digite el segundo numero";

        } else if (contador == 2) {

            num2 = document.getElementById('comparacion').value;
            document.getElementById('sucesion').textContent = "Digite el tercer numero";

        } else if (contador == 3) {

            num3 = document.getElementById('comparacion').value;
            document.getElementById('comparacion').disabled = true;
            /* document.getElementById('sucesion').textContent = "Digite el tercer numero"; */

        }

        document.getElementById('comparacion').value = '';

    }

    return patron.test(prueba);

}

var mostrar = document.getElementById('comprobacion');

function mayor() {

    num1 > num2 ?
    num1 > num3 ? mostrar.value = `El primero es el mayor (${num1})` : mostrar.value = `El tercero es el mayor (${num3})` : 
    num2 > num3 ? mostrar.value = `El segundo es el mayor (${num2})` : mostrar.value = `El tercero es el mayor (${num3})`;

    document.getElementById('comparacion').disabled = false;
        
}