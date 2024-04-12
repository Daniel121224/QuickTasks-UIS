function validarLogin(){
    let nombreUsuario = document.getElementById('icon_user').value;
    let contraseña = document.getElementById('icon_pass').value;
    
    let data = {
        'nombreUsuario': nombreUsuario,
        'contraseña': contraseña
    };
    
    let request = sendRequest('api/usuario/loginclient', 'POST', data);
    
    request.onload = function(){
        let dataResponse = request.response;
        console.log(dataResponse);

        if(dataResponse === 1){
            alert("Inicio de sesión exitoso");
            window.location = 'index.html';
        } else {
            alert('Usuario o contraseña incorrectos.');
        }
    };

    request.onerror = function(){
        alert("Error al enviar la solicitud.");
    };
}
