function pedirDatos(cbRequest) {
    var request = new XMLHttpRequest();

    request.onload = function() {
        var datosLugares = JSON.parse(request.responseText);

        cbRequest(datosLugares);
    }
    request.open('GET', 'server/lugaresDisponibles')
}

function pedirDatosReserva(callback){
    let request = new XMLHttpRequest();

    request.onload = function() {

        let datosLugares = JSON.parse(request.responseText);
        //console.log(datosLugares);
        callback(datosLugares);
    }
    request.open('GET', 'datos/reserva');
    request.send()
}