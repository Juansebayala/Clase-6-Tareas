function calcularEdadMasGrande(edades) {
	let edadMasGrande = edades[0];
	for (let i = 0; i < edades.length; i++) {
		if (edades[i] > edadMasGrande) {
			edadMasGrande = edades[i];
		}
	}
	return edadMasGrande;
}

function calcularEdadMasPequenia(edades) {
	let edadMasPequenia = edades[0];
	for (let i = 0; i < edades.length; i++) {
		if (edades[i] < edadMasPequenia) {
			edadMasPequenia = edades[i];
		}
	}
	return edadMasPequenia;
}

function calcularPromedioEdades(edades) {
	let sumaEdades = 0;
	for (let i = 0; i < edades.length; i++) {
		sumaEdades += edades[i];
	}
	let promedio = sumaEdades / edades.length;
	return promedio;
}
