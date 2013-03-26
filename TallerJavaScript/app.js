var listaClientes= new Array();
function loadclientes(callbackExito){
	$.ajax({
		url:"listaClientes.json"
	}).done(function(data){
		var lista= JSON.parse(data);
		callbackExito(lista);
	});

}

function capturarCliente(clientToAdd){
	var id= prompt("Ingrese Id");
	clientToAdd.id= id;
	var nombre= prompt("Ingrese Nombre");
	clientToAdd.nombre= nombre;
	var email= prompt("Ingrese Email");
	clientToAdd.email= email;
	var tel= prompt("Ingrese Tel");
	clientToAdd.telefono= tel;
	var desc= prompt("Ingrese Descripcion");
	clientToAdd.descripcion= desc;
	console.log(clientToAdd);

}
function callbackPrueba(lista){
console.log("Datos Recibidos");
}

function callbackPrueba2(items){
console.log("Tamaño: "+items.length);
}

function callbackPrueba3(listacompleta){
console.log("La lista es: ");
console.log(listacompleta);
}
	

function addClient(clientToAdd){
	var prub = new RegExp("^[0-9]*$");
	if(prub.test(clientToAdd.id)==false){

			throw new Error("El id debe ser numerico");
	}

	if(clientToAdd.nombre==""){
		throw new Error("El Nombre es Requerido");
	}

	var prub1= new RegExp("^[a-z0-9]*[@][a-z0-9]*[.][c][o][m]")
	if(prub1.test(clientToAdd.email)==false){
		throw new Error("Email Invalido: Use formato --------@------.com");
	}

	var prub2= new RegExp("^[0-9]\{9\}$")
	if(prub2.test(clientToAdd.telefono)==false){
		throw new Error("Numero Telefonico invalido: Debe ser de 9 digitos")
	}

	clientes.push(clientToAdd);
	console.log(clientes);
}


function  printClients(clientes){

	for (var i = 0; i < clientes.length; i++) {
		console.log("Cliente: "+clientes[i].nombre);
		console.log("Id: "+clientes[i].id);
		console.log("Email: "+clientes[i].email);
		console.log("Tel: "+clientes[i].telefono);
		console.log("Description: "+clientes[i].descripcion);
		console.log("--");
	};

}
function mostrarClientes(listaClientes){
        var padre= $(".panellista");
        for (var i = 0; i < listaClientes.length; i++) {
        	var cliente=$("<div>");
        	jQuery.data(cliente[0], "idCliente", listaClientes[i].id);
        	//console.log(listaClientes[i].id);
           	var correo=$("<div>");
           	var nombre=$("<div>");
          	nombre.text(listaClientes[i].nombre);
          	correo.text(listaClientes[i].email);
          	cliente.addClass("itemCliente");
           	padre.append(cliente);
           	cliente.append(nombre);
           	cliente.append(correo);



        };


}
function configurarEventos(){
	$(".itemCliente").click(function(){
           		//var idCliente= jQuery.data(this, "id");
           		var idCliente=jQuery.data(this, "idCliente");
           		console.log("Click en id: "+idCliente);
           		mostrarDetalles(idCliente, listaClientes);
           	});

}
function mostrarDetalles(idCliente, lista){
      var detalles=$(".paneldetalles");
      var id=$(".id");
      var nombre=$(".nombre");
      var email=$(".email");
      var telefono=$(".telefono");
      var descripcion=$(".descripcion");
      for (var i = 0; i < lista.length; i++) {
      	if(idCliente==lista[i].id){
      		id.text(lista[i].id);
      		nombre.text(lista[i].nombre);
      		email.text(lista[i].email);
      		telefono.text(lista[i].telefono);
      		descripcion.text(lista[i].descripcion);
      	}

}
}

$(document).ready(function() {
  console.log("Cargando...");
  loadclientes(function(lista){
  	listaClientes=lista;
  	printClients(lista);
  	mostrarClientes(lista);
  	configurarEventos();
  	//mostrarDetalles(1, lista);
  	console.log("Finalizado");
  });
  // loadclientes(lista,
  //  function(items){
  //  alert("  ");
  // });

});