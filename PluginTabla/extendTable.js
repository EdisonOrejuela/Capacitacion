


function extendTable(selector){
$(selector).each(function(){
	$(this).data("paginaglobal", 0);
	$(this).data("cantidadHojaGlobal", 0);
	$(this).data("cantidadListaGlobal", 0);
	$(this).data("registrosTablaGlobal", 0);
	agregarThead($(this));
	agregarTfoot($(this));
	agregarID($(this));
	paginaDefault($(this));
	configurarEventos($(this));
})

}

function agregarThead(tabla){
	var head=$("<th>");
	var head1=$("<thead>");
	var registro=$("<tr>");
	var sel=$("<select>");
	var opcionvacio=$("<option>")
	var opcion=$("<option>");
	var opcion2=$("<option>");
	var opcion3=$("<option>");
	var opcion4=$("<option>");
	var opcion5=$("<option>");
	sel.addClass("comboPagina");
	tabla.append(head1);
	head1.append(registro);
	registro.append(head);
	head.append(sel);
	sel.append(opcionvacio);
	sel.append(opcion);
	sel.append(opcion2);
	sel.append(opcion3);
	sel.append(opcion4);
	sel.append(opcion5);
	opcionvacio.text("  ");
	opcion.text("10");
	opcion2.text("20");
	opcion3.text("25");
	opcion4.text("50");
	opcion5.text("100");
}

function agregarTfoot(tabla){
    var foot1=$("<td>");
	var foot=$("<tfoot>");
	var registro=$("<tr>");
	var resumenPagina=$("<span>");
	var icono1=$("<i>");
	var icono2=$("<i>");
	icono1.addClass("icon-backward icon-align-left");
	icono2.addClass("icon-forward icon-align-center");
	resumenPagina.addClass("resumenPagina");
	tabla.append(foot);
	foot.append(registro);
	registro.append(foot1);
	foot1.append(icono1);
	foot1.append(resumenPagina);
	foot1.append(icono2);
}
function agregarID(tabla){
var id;
var registros=tabla.find("tbody >tr");
var tamano= registros.length;
	id=1;
	registros.each(function() {
     $(this).addClass(""+id);
     id=id+1;
});
	
}
function paginaDefault(tabla){
	var pagina=tabla.find(".resumenPagina");
	pagina.text("Pagina 1 de 1");

}


function configurarEventos(tabla){
tabla.find(".comboPagina").change(function(){
 //$("select option:selected").each(function () {
 tabla.find("select option:selected").each(function () {
             var registros = $(this).text();
             console.log(registros);
         mostrarPaginaInicial(registros, tabla);
  });

 
});

tabla.find(".icon-backward").on("click", function(){
  retrocederPagina(tabla);
console.log("Hacia atras");
});

tabla.find(".icon-forward").click(function(){
  avanzarPagina(tabla);
console.log("Hacia Adelante");
});

}

function mostrarPaginaInicial(cantidad, tabla){
//Oculta y muestra elementos tr de la pagina inicial
	var paginaglobal= tabla.data("paginaglobal");
	var registrosTabla= tabla.find("tbody >tr").length;
	var cantidadHoja=Math.ceil(registrosTabla/cantidad);
	var cantidadHojaGlobal= tabla.data("cantidadHojaGlobal");
	cantidadHojaGlobal=cantidadHoja;
	tabla.data("cantidadHojaGlobal", cantidadHojaGlobal);
	var cantidadListaGlobal= tabla.data("cantidadListaGlobal");
	var registrosTablaGlobal= tabla.data("registrosTablaGlobal");
	//var id=1;
	for (var i = 1; i <= registrosTabla; i++) {
			tabla.find("."+i).hide();
		};
	for (var i = 1; i <= cantidad; i++) {
			tabla.find("."+i).show();
		};	
	//Actualiza el numero de pagina y la cantidad de paginas en el elemento span
	var pagina=tabla.find(".resumenPagina");
	paginaglobal=1;
	tabla.data("paginaglobal", paginaglobal);
	pagina.text("Pagina "+paginaglobal+" de "+cantidadHoja);
	cantidadListaGlobal=cantidad;
	tabla.data("cantidadListaGlobal", cantidadListaGlobal);
	registrosTablaGlobal=registrosTabla;
	tabla.data("registrosTablaGlobal", registrosTablaGlobal);
}

//
//

function avanzarPagina(tabla){
var pagina=tabla.find(".resumenPagina");
var paginaglobal= tabla.data("paginaglobal");
var cantidadHojaGlobal= tabla.data("cantidadHojaGlobal");
var cantidadListaGlobal= tabla.data("cantidadListaGlobal");
var registrosTablaGlobal= tabla.data("registrosTablaGlobal");
paginaglobal++;
if(paginaglobal<=cantidadHojaGlobal){
tabla.data("paginaglobal", paginaglobal);
pagina.text("Pagina "+paginaglobal+" de "+cantidadHojaGlobal);
}
var actual=paginaglobal*cantidadListaGlobal;
var iterador=actual- cantidadListaGlobal;
console.log(actual+"  "+iterador);
if(paginaglobal<=cantidadHojaGlobal){
for (var i = 1; i < registrosTablaGlobal; i++) {
	tabla.find("."+i).hide();	
};
 for (var i = (iterador+1); i <=actual; i++) {
			tabla.find("."+i).show();
		}	
}
else{
	alert("No hay mas Paginas");
	throw new Error("No hay mas Paginas");
}

}

function retrocederPagina(tabla){
var pagina=tabla.find(".resumenPagina");
var paginaglobal= tabla.data("paginaglobal");
var cantidadHojaGlobal= tabla.data("cantidadHojaGlobal");
var cantidadListaGlobal= tabla.data("cantidadListaGlobal");
var registrosTablaGlobal= tabla.data("registrosTablaGlobal");
paginaglobal--;
if(paginaglobal>0){
tabla.data("paginaglobal", paginaglobal);
pagina.text("Pagina "+paginaglobal+" de "+cantidadHojaGlobal);
}
var actual=paginaglobal*cantidadListaGlobal;
var iterador=actual- cantidadListaGlobal;
console.log(actual+"  "+iterador);
if(paginaglobal>0){
for (var i = 1; i <=registrosTablaGlobal; i++) {
	tabla.find("."+i).hide();	
	
};
  for (var i = (iterador+1); i <=actual; i++) {
 	tabla.find("."+i).show();	
  };

}
else{
	alert("No hay mas Paginas");
	throw new Error("No hay mas Paginas");
}

}


	
