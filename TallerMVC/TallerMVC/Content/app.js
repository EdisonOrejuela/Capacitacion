var listaClientes = new Array();
function loadclientes(callbackExito) {
    $.getJSON("/Clientes/GetClients", function (data) {
       callbackExito(data);
    });
}
    

function capturarCliente(clientToAdd) {
    var id = prompt("Ingrese Id");
    clientToAdd.id = id;
    var nombre = prompt("Ingrese Nombre");
    clientToAdd.nombre = nombre;
    var email = prompt("Ingrese Email");
    clientToAdd.email = email;
    var tel = prompt("Ingrese Tel");
    clientToAdd.telefono = tel;
    var desc = prompt("Ingrese Descripcion");
    clientToAdd.descripcion = desc;
    console.log(clientToAdd);

}
function callbackPrueba(lista) {
    console.log("Datos Recibidos");
}

function callbackPrueba2(items) {
    console.log("Tamaño: " + items.length);

}

function callbackPrueba3(listacompleta) {
    console.log("La lista es: ");
    console.log(listacompleta);
}


function addClient(clientToAdd) {
    var prub = new RegExp("^[0-9]*$");
    if (prub.test(clientToAdd.id) == false) {

        throw new Error("El id debe ser numerico");

    }

    if (clientToAdd.nombre == "") {
        throw new Error("El Nombre es Requerido");

    }

    var prub1 = new RegExp("^[a-z0-9]*[@][a-z0-9]*[.][c][o][m]")
    if (prub1.test(clientToAdd.email) == false) {

        throw new Error("Email Invalido: Use formato --------@------.com");

    }

    var prub2 = new RegExp("^[0-9]\{9\}$")
    if (prub2.test(clientToAdd.telefono) == false) {

        throw new Error("Numero Telefonico invalido: Debe ser de 9 digitos")

    }


    listaClientes.push(clientToAdd);
    //console.log(clientes);

}


function printClients(clientes) {

    for (var i = 0; i < clientes.length; i++) {
        console.log("Cliente: " + clientes[i].nombre);
        console.log("Id: " + clientes[i].id);
        console.log("Email: " + clientes[i].email);
        console.log("Tel: " + clientes[i].telefono);
        console.log("Description: " + clientes[i].descripcion);
        console.log("--");
    };

}
function mostrarClientes(listaClientes) {
    var padre = $(".panellista");
    padre.html("");
    for (var i = 0; i < listaClientes.length; i++) {
        var cliente = $("<div>");
        jQuery.data(cliente[0], "idCliente", listaClientes[i].id);
        //console.log(listaClientes[i].id);
        var correo = $("<div>");
        var nombre = $("<div>");
        var icono = $("<i>");
        jQuery.data(icono[0], "idCliente", listaClientes[i].id);
       // jQuery.data(icono[0], "idCliente", listaIconos[i].id);
        
        nombre.text(listaClientes[i].nombre);
        correo.text(listaClientes[i].email);
        cliente.addClass("itemCliente");
        icono.addClass("icon-remove");
        nombre.append(icono);
        padre.append(cliente);
        cliente.append(nombre);
        cliente.append(correo);



    }
    configurarEventos();
    decorar(".panellista");
}

function decorar(selector) {
    var lista = $(selector).children();
    for (var i = 0; i < lista.length; i++) {
        if (i % 2 == 0) {
            $(lista[i]).css("backgroundColor", "#cccccc");
        } else {
            $(lista[i]).css("backgroundColor", "#CEECF5");
        }

    }

}
function configurarEventos() {
    $(".itemCliente").click(function () {
        //var idCliente= jQuery.data(this, "id");
        var idCliente = jQuery.data(this, "idCliente");
        console.log("Click en id: " + idCliente);
        mostrarDetalles(idCliente, listaClientes);
    });
    $("input:text").change(function () {
        $(".mensajeError").hide();

    })

    $("input:text").change(function () {
        $(".mensajeErrorActualizar").hide();

    })

    $(".icon-remove").click(function () {
        var idCliente = jQuery.data(this, "idCliente");
        if (confirm("Va a eliminar el Cliente: " + idCliente)){
            eliminarCliente(idCliente)
            $(this).closest(".itemCliente").slideUp(function () {
                $(this).closest(".itemCliente").remove();
                decorar(".panellista");
                });
            $(".paneldetalles").slideUp();
            
        }
        return false;
        
    });
    $("#boton1Actualizar").click(function () {
        var clientToUpdate = new Object();
        clientToUpdate.id = $("#campo1Actualizar").text();
        clientToUpdate.nombre = document.getElementById("campo2Actualizar").value
        clientToUpdate.email = document.getElementById("campo3Actualizar").value
        clientToUpdate.telefono = document.getElementById("campo4Actualizar").value
        clientToUpdate.descripcion = document.getElementById("campo5Actualizar").value
        console.log("Evento Actualizar");
        console.log(clientToUpdate.descripcion + "  " + clientToUpdate.telefono);
        try {
            validarActualizacion(clientToUpdate);
            actualizarCliente(clientToUpdate);
            

        } catch (e) {
            $(".mensajeErrorActualizar").text(e).show();

        }
    });
           
}
function validarActualizacion(clientToUpdate) {
    var prub = new RegExp("^[0-9]*$");
    if (prub.test(clientToUpdate.id) == false) {

        throw new Error("El id debe ser numerico");

    }

    if (clientToUpdate.nombre == "") {
        throw new Error("El Nombre es Requerido");

    }

    var prub1 = new RegExp("^[a-z0-9]*[@][a-z0-9]*[.][c][o][m]")
    if (prub1.test(clientToUpdate.email) == false) {

        throw new Error("Email Invalido: Use formato --------@------.com");

    }

    var prub2 = new RegExp("^[0-9]\{9\}$")
    if (prub2.test(clientToUpdate.telefono) == false) {

        throw new Error("Numero Telefonico invalido: Debe ser de 9 digitos")

    }
    

}

function actualizarCliente(clienToUpdate) {
   /* var id = clienToUpdate.id;
    var nombre = clienToUpdate.nombre;
    var email = clienToUpdate.email;
    var telefono = clienToUpdate.telefono;
    var descripcion = clienToUpdate.descripcion; */
    var url = "/Clientes/UpdateClient";
    $.post(url, clienToUpdate, function (data) {
        for (var i = 0; i < listaClientes.length; i++) {

            if (listaClientes[i].id == clienToUpdate.id) {
                listaClientes[i].nombre = clienToUpdate.nombre;
                listaClientes[i].email = clienToUpdate.email;
                listaClientes[i].telefono = clienToUpdate.telefono;
                listaClientes[i].descripcion = clienToUpdate.descripcion;
            }
        }
        mostrarClientes(listaClientes);
        console.log("Datos Cliente Actualizar Listos");
    }
  )
    
};


function eliminarCliente(idCliente) {

    var url = "/Clientes/RemoveClient";
    $.post(url, { id: idCliente }, function (data) {
        console.log("Datos Listos");
    }
  )
};

function mostrarDetalles(idCliente, lista) {
    $(".paneldetalles").slideDown();
    var detalles = $(".paneldetalles");
    var id = $("#campo1Actualizar");
    var nombre = $("#campo2Actualizar");
    var email = $("#campo3Actualizar");
    var telefono = $("#campo4Actualizar");
    var descripcion = $("#campo5Actualizar");
    for (var i = 0; i < lista.length; i++) {
        if (idCliente == lista[i].id) {
            id.text(lista[i].id);
            nombre.val(lista[i].nombre);
            email.val(lista[i].email);
            telefono.val(lista[i].telefono);
            descripcion.val(lista[i].descripcion);
            
              /*
            nombre.text(lista[i].nombre);
            email.text(lista[i].email);
            telefono.text(lista[i].telefono);
            descripcion.text(lista[i].descripcion);*/
        }

    }
}
function configurarBotonAgregar() {
    var url = "/Clientes/AddClient";
    $("#boton1").click(function () {
        var clientToAdd = new Object();
        var id = document.getElementById("campo1").value;
        var nombre = document.getElementById("campo2").value;
        var email = document.getElementById("campo3").value;
        var telefono = document.getElementById("campo4").value;
        var descripcion = document.getElementById("campo5").value;
        //alert(id+"    "+nombre+"   "+email+"   "+telefono+"   "+descripcion);
        clientToAdd.id = id;
        clientToAdd.nombre = nombre;
        clientToAdd.email = email;
        clientToAdd.telefono = telefono;
        clientToAdd.descripcion = descripcion;
        try {
            addClient(clientToAdd);
            $.post(url, clientToAdd, function (data) {
                console.log("Datos Cargados");
            });
        } catch (e) {
            $(".mensajeError").text(e).show();

        }

        mostrarClientes(listaClientes);
        //console.log(listaClientes);

    });
}

$(document).ready(function () {
    console.log("Cargando...");
    loadclientes(function (lista) {
        listaClientes = lista;
        printClients(lista);
        mostrarClientes(lista);
        configurarBotonAgregar();
       //mostrarDetalles(1, lista);
        console.log("Finalizado");
    });
    // loadclientes(lista,
    //  function(items){
    //  alert("  ");
    // });

});