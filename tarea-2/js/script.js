const $botonAgregarIntegrantes = document.querySelector('#agregar-integrantes');

$botonAgregarIntegrantes.onclick = function(event) {
	const $cantidadIntegrantes = Number(document.querySelector
	('#integrantes-familia').value);
	borrarElementosCreados();
	agregarElementos($cantidadIntegrantes);
	
	mostrarBotonCalcular();

	event.preventDefault();
}

function crearIntegrante() {
	const $integrante = document.createElement('div');
	const nuevoLabel = document.createElement('label');
	const textoLabel = 'Por favor, indica el salario anual del integrante: ';
	nuevoLabel.textContent = textoLabel;
	const nuevoInput = document.createElement('input');
	$integrante.appendChild(nuevoLabel);
	$integrante.appendChild(nuevoInput);
	return $integrante;
}

function agregarElementos(cantidadAAgregar) {
	const $nodoSalariosIntegrantes = document.querySelector('#salarios-integrantes');
	for (let i = 0; i < cantidadAAgregar; i++) {
		const $integrante = crearIntegrante();
		$nodoSalariosIntegrantes.appendChild($integrante);
	}
}

function mostrarBotonCalcular() {
	const $botonCalcular = document.querySelector('#boton-calcular');
	$botonCalcular.className = '';
}

function borrarElementosCreados() {
	$nodoPadre = document.querySelector('#salarios-integrantes');
	$elementos = document.querySelectorAll('#salarios-integrantes div');
	for (let i = 0; i < $elementos.length; i++) {
		$nodoPadre.removeChild($elementos[i]);
	}
}
