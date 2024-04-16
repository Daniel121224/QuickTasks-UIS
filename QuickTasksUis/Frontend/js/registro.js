function registrar() {
    let id = document.getElementById('usuario-id').value;
    let documento = document.getElementById('usuario-documento').value;
    let nombre = document.getElementById('usuario-nombre').value;
    let apellido = document.getElementById('usuario-apellido').value;
    let correo = document.getElementById('usuario-correo').value;
    let contraseña = document.getElementById('usuario-contraseña').value;
    let data = {
        'idUsuario': id,
        'documento': documento,
        'nombre': nombre,
        'apellido': apellido,
        'correo': correo,
        'contraseña': contraseña
    };
    let request = sendRequest('api/usuario/l', id ? 'PUT' : 'POST', data);
    request.onload = function() {
        window.location = 'login.html';
    };
    request.onerror = function() {
        alert('Error al guardar los cambios.');
    };
}
