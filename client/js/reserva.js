//app web
let divContenedorLugares = document.getElementById("divContenedorLugares");
let botonConsulta = document.getElementById("boton-consulta");


botonConsulta.addEventListener("click", function(){
    console.log("llegue al evento");

    pedirDatosReserva(crearBotonesDias);
})

function crearBotonesDias(datos){
    let listaDeHorarios = datos;
    console.log(listaDeHorarios);

    for(let i = 0; i < listaDeHorarios.length; i++){
        crearBotonPorDia(listaDeHorarios[i].dia, listaDeHorarios[i].horario, listaDeHorarios[i].disponibilidad);
    }
}

function crearBotonPorDia(dia, horario, disponibilidadDelDia){
    let botonDia = document.createElement("button");
    let espaciado = document.createElement('br')
    botonDia.setAttribute("class", "estilo-boton");
    let textoDia = document.createTextNode(dia);
    let textoHorario = document.createTextNode(horario);
    botonDia.appendChild(textoDia);
    botonDia.append(espaciado);
    botonDia.appendChild(textoHorario);


    botonDia.addEventListener("click", function(){
        validacion(disponibilidadDelDia);
    })

    divContenedorLugares.appendChild(botonDia);
    
}


function validacion(disponibilidad) {
    if ( disponibilidad == true) {
        console.log("Reserva realizada")
    }else{
        console.log("No hay disponibilidad")
    }
}