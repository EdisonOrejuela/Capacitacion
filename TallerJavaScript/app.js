function loadclientes(listaClientes, callbackExito){
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

$(document).ready(function() {
  var lista= new Array();
  loadclientes(lista, function(lista){
  	alert("lista Recibida "+lista.length);
  });
  

});


