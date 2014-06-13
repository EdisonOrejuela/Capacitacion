$(document).ready(llenarTabla);

function llenarTabla(){
	var tabla=$(".miTabla");


	for (var i = 0; i < 500; i++) {
	var registros=$("<tr>");
	var columna1=$("<td>");
	var columna2=$("<td>");
	var columna3=$("<td>");
	tabla.append(registros);
    registros.append(columna1.text("Fila: "+i+"  Columna: 0"));
    registros.append(columna2.text("Fila: "+i+"  Columna: 1"));
    registros.append(columna3.text("Fila: "+i+"  Columna: 2"));
	}
	extendTable(tabla);

}