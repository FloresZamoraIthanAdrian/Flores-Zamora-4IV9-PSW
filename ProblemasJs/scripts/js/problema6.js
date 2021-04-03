function validar(e) {

    var entrada = (document.all) ? e.keyCode : e.which;

    if (entrada == 8) return true;

    var patron = /[0-9\d]/;

    var prueba = String.fromCharCode(entrada);

    return patron.test(prueba);

}

function calcularEdad() {

    var an = parseInt(document.getElementById('ano').value);
    var me = parseInt(document.getElementById('mes').value);
    var di = parseInt(document.getElementById('dia').value);

    var nacimiento = new Date(an, me, di)
    var hoy = new Date

    var tiempoPasado = new Date() - nacimiento
    var segs = 1000;
    var mins = segs * 60;
    var hours = mins * 60;
    var days = hours * 24;
    var months = days * 30.416666666666668;
    var years = months * 12;

    //calculo 
    var anos = Math.floor(tiempoPasado / years);

    tiempoPasado = tiempoPasado - (anos * years);
    var meses = Math.floor(tiempoPasado / months)

    tiempoPasado = tiempoPasado - (meses * months);
    var dias = Math.floor(tiempoPasado / days)

    tiempoPasado = tiempoPasado - (dias * days);
    var horas = Math.floor(tiempoPasado / hours)

    tiempoPasado = tiempoPasado - (horas * hours);
    var minutos = Math.floor(tiempoPasado / mins)

    var mostrar = document.getElementById('resultado');
    mostrar.value = `${anos} años, ${meses} meses, ${dias} dias, ${horas} horas, y ${minutos} minutos.`

}