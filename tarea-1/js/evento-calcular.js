const $botonCalcular = document.querySelector('#boton-calcular');

$botonCalcular.onclick = function(event) {
	const $edadesFamilia = document.querySelectorAll('#integrantes-familia input');
	const edadesFamilia = conseguirEdadesDeFamilia($edadesFamilia);
	const edadMasGrande = calcularEdadMasGrande(edadesFamilia);
	const edadMasPequenia = calcularEdadMasPequenia(edadesFamilia);
	const edadPromedio = calcularPromedioEdades(edadesFamilia);
	agregarMensajes(edadMasGrande, edadMasPequenia, edadPromedio);
	event.preventDefault();
}

function conseguirEdadesDeFamilia($edades) {
	const edades = [];
	for (let i = 0; i < $edades.length; i++) {
		edades.push(Number($edades[i].value));
	}
	return edades;
}

function agregarMensajes(edadMasGrande, edadMasPequenia, edadPromedio) {
	const $mensajeMasGrande = document.querySelector('#edad-mas-grande');
	const $mensajeMasPequenia = document.querySelector('#edad-mas-pequenia');
	const $mensajePromedio = document.querySelector('#edad-promedio');
	$mensajeMasGrande.textContent = `La edad más grande es ${edadMasGrande}`;
	$mensajeMasPequenia.textContent = `La edad más pequeña es ${edadMasPequenia}`;
	$mensajePromedio.textContent = `La edad promedio es ${edadPromedio.toFixed(2)}`;
	mostrarMensajesResultados();
}

function mostrarMensajesResultados() {
	document.querySelector('#mensajes-resultados').className = '';
}
