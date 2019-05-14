//Datos de registro
const nombreUsuario = document.getElementById("user-id");

//Función de login
function login() {

    let req = new XMLHttpRequest();
    
    req.onload = function() {
        
        const errorMessageDiv = document.getElementById("error-message");

        if (req.status == 200) {
            window.location.href = req.responseText;
        } else if (req.status == 403) {
            // 403: No autorizado
            errorMessageDiv.textContent = "Usuario/clave incorrectos";
            errorMessageDiv.style.display = "block";
        } else {
            // Otro código HTTP
            errorMessageDiv.textContent = `Error inesperado (código ${request.status})`;
            errorMessageDiv.style.display = "block";
        }
    }
    
    req.open("POST", "/login");
    
    let dato = {
        user: document.getElementById("user-id").value,
        password: document.getElementById("password").value
    };
    
    req.setRequestHeader('Content-type', 'application/json');
    req.send(JSON.stringify(dato));

}

//Función que muestra el usuario registrado en el home
function mostrarUsuarioLogueado(callback){
    let request = new XMLHttpRequest();

    request.onload = function() {
    var datosDeUsuarios = request.responseText;

    callback(datosDeUsuarios);
       
    }
   
   
    request.open('GET', '/usuarios/datosUsuarios');
    request.send();
}

function muestraDatosUsuario(datoUsuario) {
    var info = datoUsuario;
    console.log("aca")

}