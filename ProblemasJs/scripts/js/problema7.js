var contador = 0;
var resultado = 0;
var num1 = 0;
var num2 = 0;

function validar(e) {

    var entrada = (document.all) ? e.keyCode : e.which;

    if (entrada == 8) return true;

    var patron = /[0-9\d]/;

    var prueba = String.fromCharCode(entrada);

    if (entrada == 13) {

        contador++

        if(contador == 1 ){

            num1 = document.getElementById('registrar').value;
            console.log(num1)

        }else if(contador == 2){

            num2 = document.getElementById('registrar').value;
            console.log(num2)
            document.getElementById('numero').textContent = "Digite el segundo numero";
            document.getElementById('registrar').disabled = true;

        }

        document.getElementById('registrar').value = '';

    }

    return patron.test(prueba);

}

function calcular(){
    console.log('Hola mundo')

    if(num1 == num2){

        resultado = num1 * num2
        document.getElementById('resultado').value = `Se multiplican con resultado de: ${resultado}`

    }else if(num1 > num2){

        resultado = num1 - num2
        document.getElementById('resultado').value = `Se restan con resultado de: ${resultado}`

    }else if(num1 < num2){

        resultado = num1 + num2
        document.getElementById('resultado').value = `Se suman con resultado de: ${resultado}`

    }
}