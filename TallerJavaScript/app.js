function loadclientes(clientes){
	
	for (var i =0 ; i<50; i++) {
		var cliente= new Object();
		clientes.push(cliente);
		cliente.id=i+1;
		cliente.nombre="Cliente"+(i+1);
		cliente.email="cliente"+(i+1)+"@mail.com";
		cliente.telefono="123-456-789";
		cliente.descripcion="ninguna";

	};
	
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

function addClient(clientToAdd){
	var prub = new RegExp("^[0-9]*$");
	if(prub.test(clientToAdd.id)==false){

			alert("El id debe ser numerico");
	}

	if(clientToAdd.nombre==""){
		alert("El Nombre es Requerido");
	}

	var prub1= new RegExp("^[a-z0-9]*[@][a-z0-9]*[.][c][o][m]")
	if(prub1.test(clientToAdd.email)==false){
		alert("Email Invalido: Use formato --------@------.com");
	}

	var prub2= new RegExp("^[0-9]\{9\}$")
	if(prub2.test(clientToAdd.telefono)==false){
		alert("Numero Telefonico invalido: Debe ser de 9 digitos")
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
var clientes= new Array();
var clientToAdd= new Object();
loadclientes(clientes);
printClients(clientes);
capturarCliente(clientToAdd);
addClient(clientToAdd);