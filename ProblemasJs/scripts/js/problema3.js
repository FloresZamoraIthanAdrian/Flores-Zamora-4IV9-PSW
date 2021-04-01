var sumaProductos = 0

function validar(e){

    var entrada = (document.all)? e.keyCode : e.which;

    if (entrada == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(entrada);

    if(entrada == 13){

        var producto = parseFloat(document.getElementById('producto').value);
        
        sumaProductos += producto;
        
        document.getElementById('calculo').value = sumaProductos;

        document.getElementById('producto').value = '';

    }

    return patron.test(prueba);

}

function calcularPrecio(){

    var descuento = sumaProductos * 0.15;
    var precioFinal = sumaProductos - descuento

    document.getElementById('final').value = `Su total a pagar es de $${precioFinal}`;

}