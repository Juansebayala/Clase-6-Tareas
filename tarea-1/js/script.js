const $agregarIntegrantes = document.querySelector('#agregar-integrantes');

$agregarIntegrantes.onclick = function(event) {
	eliminarIntegrantesCreados(integrantes);
	const hayIntegrantes = comprobarIngresoDeIntegrantes();
	if (hayIntegrantes) {
		ocultarAlertaIngresoIntegrantes();
		agregarIntegrantes();
		mostrarBotones();
	} else {
		mostrarAlertaIngresoIntegrantes();
		ocultarBotones();
	}
	event.preventDefault();
}

function eliminarIntegrantesCreados() {
	const $integrantes = document.querySelectorAll('#integrantes-familia div');
	for (let i = 0; i < $integrantes.length; i++) {
		$integrantes[i].remove();
	}
}

function comprobarIngresoDeIntegrantes() {
	const cantidadIntegrantes = document.querySelector('#integrantes').value;
	if (!cantidadIntegrantes) {
		return false;
	} else {
		return true;
	}
}

function crearIntegrante() {
	const $integrante = document.createElement('div');
	const nuevoLabel = document.createElement('label');
	const textoLabel = document.createTextNode('Por favor, inserta la edad del familiar: ');
	const nuevoInput = document.createElement('input');
	const atributoInput = document.createAttribute('type');
	atributoInput.value = 'number';
	nuevoLabel.appendChild(textoLabel);
	nuevoInput.setAttributeNode(atributoInput);
	$integrante.appendChild(nuevoLabel);
	$integrante.appendChild(nuevoInput);
	return $integrante;
}

function agregarIntegrante(nodoIntegrantes, integrante) {
	nodoIntegrantes.appendChild(integrante);
}

function mostrarAlertaIngresoIntegrantes() {
	const $mensaje = document.querySelector('#alerta-ingreso-integrantes');
	$mensaje.className = '';
}

function ocultarAlertaIngresoIntegrantes() {
	const $mensaje = document.querySelector('#alerta-ingreso-integrantes');
	$mensaje.className = 'oculto';
}

function agregarIntegrantes() {
	const $nodoIntegrantes = document.querySelector('#integrantes-familia');
	cantidadIntegrantesFamilia = document.querySelector('#integrantes').value;
	if (cantidadIntegrantesFamilia > 0) {	
		for (let i = 1; i <= cantidadIntegrantesFamilia; i++) {
			const nuevoIntegrante = crearIntegrante();
			agregarIntegrante($nodoIntegrantes, nuevoIntegrante);
		}
	} else {
		return false;
	}
}

function mostrarBotones() {
	document.querySelector('#boton-calcular').className = '';
	document.querySelector('#boton-resetear').className = '';
}

function ocultarBotones(botonCalcular, botonResetear) {
	document.querySelector('#boton-calcular').className = 'oculto';
	document.querySelector('#boton-resetear').className = 'oculto';
}
