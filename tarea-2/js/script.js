const $botonAgregarIntegrantes = document.querySelector('#agregar-integrantes');

$botonAgregarIntegrantes.onclick = function(event) {
	const $cantidadIntegrantes = Number(document.querySelector
	('#integrantes-familia').value);
	borrarElementosCreados();
	agregarElementos($cantidadIntegrantes);
	
	mostrarBotonCalcular();

	event.preventDefault();
}

function crearElementosLabelEInputs() {
	const nuevoDiv = document.createElement('div');
	const nuevoLabel = document.createElement('label');
	const textoLabel = 'Por favor, indica el salario anual del integrante: ';
	nuevoLabel.textContent = textoLabel;
	const nuevoInput = document.createElement('input');
	nuevoDiv.appendChild(nuevoLabel);
	nuevoDiv.appendChild(nuevoInput);
	return nuevoDiv;
}

function agregarElementos(cantidadAAgregar) {
	const $nodoSalariosIntegrantes = document.querySelector('#salarios-integrantes');
	for (let i = 0; i < cantidadAAgregar; i++) {
		const elementos = crearElementosLabelEInputs();
		$nodoSalariosIntegrantes.appendChild(elementos);
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
