function loadData() {
    let request = sendRequest('api/usuario/list', 'GET', '');
    let table = document.getElementById('usuarios-table');
    table.innerHTML = "";
    request.onload = function() {
        let data = request.response;
        console.log(data);
        data.forEach((element, index) => {
            table.innerHTML += `
                <tr>
                    <th>${element.documento}</th>
                    <td>${element.nombre} ${element.apellido}</td>
                    <td>${element.correo}</td>
                    <td>
                        <button type="button" class="btn btn-primary" onclick='window.location = 
                        "form_usuarios.html?idUsuario=${element.idUsuario}"'>Ver</button>
                    </td>
                </tr>
            `;
        });
    };
    request.onerror = function() {
        table.innerHTML = `
            <tr>
                <td colspan="5">Error al recuperar los datos.</td>
            </tr>
        `;
    };
}

function loadUsuario(idUsuario) {
    let request = sendRequest('api/usuario/' + idUsuario, 'GET', '');
    let documento = document.getElementById('usuario-documento');
    let nombre = document.getElementById('usuario-nombre');
    let apellido = document.getElementById('usuario-apellido');
    let correo = document.getElementById('usuario-correo');
    let contraseña = document.getElementById('usuario-contraseña');
    let id = document.getElementById('usuario-id');
    request.onload = function() {
        let data = request.response;
        id.value = data.idUsuario;
        documento.value = data.documento;
        nombre.value = data.nombre;
        apellido.value = data.apellido;
        correo.value = data.correo;
        contraseña.value = data.contraseña;
    };
    request.onerror = function() {
        alert("Error al recuperar los datos.");
    };
}

function loadUsuarioTable(idUsuario) {
    let request = sendRequest('api/usuario/' + idUsuario, 'GET', '');
    let body = document.getElementById('usuarios-body');
    body.innerHTML = "";

    request.onload = function() {
        let data = request.response;
        body.innerHTML += `
            <tr>
                <td>${data.documento}</td>
                <td>${data.nombre} ${data.apellido}</td>
                <td>${data.correo}</td>
                <td>
                    <button type="button" class="btn btn-primary" onclick='window.location = 
                    "form_usuarios.html?idUsuario=${data.idUsuario}"'>Ver</button>
                </td>
            </tr>
        `;
    };

    request.onerror = function() {
        alert("Error al recuperar los datos del usuario.");
    };
}

function saveUsuario() {
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
        window.location = 'usuarios.html';
    };
    request.onerror = function() {
        alert('Error al guardar los cambios.');
    };
}

function deleteUsuario() {
    let id = document.getElementById('usuario-id').value;
    let request = sendRequest('api/usuario/' + id, 'DELETE', '');
    request.onload = function() {
        alert('Registro Eliminado Exitosamente.');
        window.location = 'usuarios.html';
    };
    request.onerror = function() {
        alert('Error al guardar los cambios.');
    };
}


