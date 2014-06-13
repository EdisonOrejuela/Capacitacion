// var arreglo=ko.observableArray([{name: "nom1", type: "tipo1"}, {name: "nom2", type: "tipo2"}]);
// alert("tamaño: "+arreglo().length);
// alert("primer elemento: "+arreglo()[0]);
// ko.applyBindings(arreglo);

// var view={mostrar: ko.observable(false)};
// ko.applyBindings(view);

 var meses= ["jan", "feb", "mar", "etc"];
 //, {mes: "feb"}, {mes: "mar"}, {mes: "etc"}];
ko.applyBindings(meses);