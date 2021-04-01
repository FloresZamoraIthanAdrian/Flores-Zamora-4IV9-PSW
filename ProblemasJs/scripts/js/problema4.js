var contador = 0
var sumaParciales = 0
var parciales = 0
var promedio = 0
var examen = 0
var trabajo = 0

function validarP(e){

    var entrada = (document.all)? e.keyCode : e.which;

    if (entrada == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(entrada);

    if(entrada == 13){

        var textCalificaciones = document.getElementById('numeroParcial');
        contador++

        parciales = parseFloat(document.getElementById('calificacion').value);
        sumaParciales += parciales

        promedio = sumaParciales / 3;

        document.getElementById('calificacion').value = '';
        
        if(contador == 1){
            textCalificaciones.textContent = 'Calificacion del Segundo parcial:';
        }else if(contador == 2){
            textCalificaciones.textContent = 'Calificacion del Tercer Parcial';
        }else if(contador == 3){
            document.getElementById('calificacion').disabled = true;
            document.getElementById('calificacion').value = `Promedio: ${promedio}`;
        }

    }

    return patron.test(prueba);

}

function validarE(e){

    console.log(contador)

    var entrada = (document.all)? e.keyCode : e.which;

    if (entrada == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(entrada);

    if(entrada == 13){

        examen = parseFloat(document.getElementById('examenFinal').value);
        document.getElementById('examenFinal').value = `Examen final: ${examen}`;
        document.getElementById('examenFinal').disabled = true;

    }

    return patron.test(prueba);

}

function validarT(e){

    var entrada = (document.all)? e.keyCode : e.which;

    if (entrada == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(entrada);

    if(entrada == 13){

        trabajo = parseFloat(document.getElementById('trabajoFinal').value);
        document.getElementById('trabajoFinal').value = `Trabajo final: ${trabajo}`;
        document.getElementById('trabajoFinal').disabled = true;

    }

    return patron.test(prueba);

}

function promediar(){
    var valorPromedio = promedio * 0.55;
    var valorExamen = examen * 0.3;
    var valorTrabajo = trabajo * 0.15;
    
    var promedioAlgoritmos = valorExamen + valorPromedio + valorTrabajo;

    document.getElementById('final').value = `Calificacion final de algoritmos: ${promedioAlgoritmos}`;
}

