function loadData() {
    let request = sendRequest('api/equipo/list', 'GET', '');
    let table = document.getElementById('equipos-table');
    table.innerHTML = "";
    request.onload = function() {
        let data = request.response;
        console.log(data);
        data.forEach((element, index) => {
            table.innerHTML += `
                <tr>
                    <th>${element.nombre}</th>
                    <td>${element.integrantes}</td>
                    <td>${element.metodologia}</td>
                    <td>${element.codigo}</td>
                    <td>
                        <button type="button" class="btn btn-primary" onclick='window.location = 
                        "form_equipos.html?idEquipo=${element.idEquipo}"'>Ver</button>
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

function loadEquipo(idEquipo) {
    let request = sendRequest('api/equipo/' + idEquipo, 'GET', '');
    let nombre = document.getElementById('equipo-nombre');
    let integrantes = document.getElementById('equipo-integrantes');
    let metodologia = document.getElementById('equipo-metodologia');
    let codigo = document.getElementById('equipo-codigo');
    let id = document.getElementById('equipo-id');
    request.onload = function() {
        let data = request.response;
        id.value = data.idEquipo;
        nombre.value = data.nombre;
        integrantes.value = data.integrantes;
        metodologia.value = data.metodologia;
        codigo.value = data.codigo;
    };
    data.forEach((element, index) => {
            table.innerHTML += `
                <tr>
                    <th>${element.nombre}</th>
                    <td>${element.integrantes}</td>
                    <td>${element.metodologia}</td>
                    <td>${element.codigo}</td>
                    <td>
                        <button type="button" class="btn btn-primary" onclick='window.location = 
                        "form_equipos.html?idEquipo=${element.idEquipo}"'>Ver</button>
                    </td>
                </tr>
            `;
        });
    request.onerror = function() {
        alert("Error al recuperar los datos.");
    };
}

function loadEquipoTable(idEquipo) {
    let request = sendRequest('api/equipo/' + idEquipo, 'GET', '');
    let body = document.getElementById('equipos-body');
    body.innerHTML = "";

    request.onload = function() {
        let data = request.response;
        body.innerHTML += `
            <tr>
                <td>${data.nombre}</td>
                <td>${data.integrantes}</td>
                <td>${data.metodologia}</td>
                <td>${data.codigo}</td>
                <td>
                    <button type="button" class="btn btn-primary" onclick='window.location = 
                    "form_equipos.html?idEquipo=${data.idEquipo}"'>Ver</button>
                </td>
            </tr>
        `;
    };

    request.onerror = function() {
        alert("Error al recuperar los datos del equipo.");
    };
}


function saveEquipo() {
    let id = document.getElementById('equipo-id').value;
    let nombre = document.getElementById('equipo-nombre').value;
    let integrantes = document.getElementById('equipo-integrantes').value;
    let metodologia = document.getElementById('equipo-metodologia').value;
    let codigo = document.getElementById('equipo-codigo').value;
    let data = {
        'idEquipo': id,
        'nombre': nombre,
        'integrantes': integrantes,
        'metodologia': metodologia,
        'codigo': codigo
    };
    let request = sendRequest('api/equipo/l', id ? 'PUT' : 'POST', data);
    request.onload = function() {
        window.location = 'equipos.html';
    };
    request.onerror = function() {
        alert('Error al guardar los cambios.');
    };
}

function deleteEquipo() {
    let id = document.getElementById('equipo-id').value;
    let request = sendRequest('api/equipo/' + id, 'DELETE', '');
    request.onload = function() {
        alert('Equipo Eliminado Exitosamente.');
        window.location = 'equipos.html';
    };
    request.onerror = function() {
        alert('Error al eliminar el equipo.');
    };
}
