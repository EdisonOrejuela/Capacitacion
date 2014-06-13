var App={};

function ViewModel () {
	this.clientes=ko.observableArray();
	this.ClienteSeleccionado=ko.observable();
	this.clientes().push(new Cliente ("nom1", "corre1", [new Compra("produc1","22-mar"), new Compra("produc2","23-mar")]));
	this.clientes().push(new Cliente ("nom2", "corre2"));
	this.clientes().push(new Cliente ("nom3", "corre3"));
	this.clientes().push(new Cliente ("nom4", "corre4"));
	this.clientes().push(new Cliente ("nom5", "corre5"));
	// body...
}

function  Cliente (nombre, correo, compra) {
	this.nombre=ko.observable(nombre);
	this.correo=ko.observable(correo);
	this.compras=ko.observableArray(compra);

	// body...
}

function Compra (producto, fecha) {
	this.producto=ko.observable(producto);
	this.fecha=ko.observable(fecha);
	// body...
}
App.SeleccionarCliente=function (cliente) {
	App.modelo.ClienteSeleccionado(cliente);
	console.log(cliente);
	// body...
}
$("#item").popover({ placement: 'bottom', html : true, trigger:'hover', title: 'Detalles Cliente', content: 'Seleccione un Cliente para ver detalles' });
$("#item1").popover({ placement: 'right', html : true, trigger:'hover', content: 'Click para enviar correos a todos los clientes de la lista' });

$(document).ready(function () {
	// App.modelo.clientes().push(cliente1);
	// App.modelo.clientes().push(cliente2);
	// App.modelo.clientes().push(cliente3);
	App.modelo=new ViewModel();
	ko.applyBindings(App.modelo);
	var cliente1= new Cliente ("nom1", "corre1");
	var cliente2= new Cliente ("nom2", "corre2");
	var cliente3= new Cliente ("nom3", "corre3");
	// body...
});