
var listaClientes= new Array();
for (var i = 0; i < 200; i++) {
	var cliente= new Object()
	cliente.id=i+1;
	cliente.nombre="Cliente "+(i+1);
	cliente.email="cliente"+(i+1)+"@email.com";
	cliente.telefono="123-456-789";
	cliente.descripcion="";
	listaClientes.push(cliente);
};
console.log(JSON.stringify(listaClientes));