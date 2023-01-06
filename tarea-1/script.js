//Crear elementos para introducir los integrantes de la familia y sus respectivas edades
function crearElementos() {
	const nuevoDiv = document.createElement('div');
	const nuevoLabel = document.createElement('label');
	const textoLabel = document.createTextNode('Por favor, inserta la edad del familiar: ');
	const nuevoInput = document.createElement('input');
	const atributoInput = document.createAttribute('type');
	atributoInput.value = 'number';
	nuevoLabel.appendChild(textoLabel);
	nuevoInput.setAttributeNode(atributoInput);
	nuevoDiv.appendChild(nuevoLabel);
	nuevoDiv.appendChild(nuevoInput);
	return nuevoDiv;
}

function agregarElementosALaPagina(nodoPrincipal, elementos) {
	nodoPrincipal.appendChild(elementos);
}

function crearNuevosBotones(nodoPrincipal) {
	const nuevoBotonCalcular = document.createElement('button');
	const atributoBotonCalcular = document.createAttribute('id');
	atributoBotonCalcular.value = 'boton-calcular';
	const textoBotonCalcular = document.createTextNode('Calcular');
	const nuevoBotonReset = document.createElement('button');
	const atributoBotonReset = document.createAttribute('id');
	atributoBotonReset.value = 'empezar-de-nuevo';
	const textoBotonReset = document.createTextNode('Empezar de nuevo');
	//Boton calcular
	nuevoBotonCalcular.setAttributeNode(atributoBotonCalcular);
	nuevoBotonCalcular.appendChild(textoBotonCalcular);
	nodoPrincipal.appendChild(nuevoBotonCalcular);
	//Boton reset
	nuevoBotonReset.setAttributeNode(atributoBotonReset);
	nuevoBotonReset.appendChild(textoBotonReset);
	nodoPrincipal.appendChild(nuevoBotonReset);
}

function comprobarIntegrantesFamilia() {
	const cantidadIntegrantesFamilia = Number(prompt('Por favor, dinos cuántos integrantes hay en tu familia:'));
	if (cantidadIntegrantesFamilia > 0) {
		return cantidadIntegrantesFamilia;
	} else {
		return comprobarIntegrantesFamilia();
	}
}

function agregarElementos() {
	const $formulario = document.querySelector('form');
	cantidadIntegrantesFamilia = comprobarIntegrantesFamilia();
	for (let i = 1; i <= cantidadIntegrantesFamilia; i++) {
		const elementosCreados = crearElementos();
		agregarElementosALaPagina($formulario, elementosCreados);
	}
	crearNuevosBotones($formulario);
}

agregarElementos();

//Calcular edades y mostrarlas en pantalla
function agregarSeparadoresEnPantalla(nodoPrincipal) {
	const elementosASeparar = document.querySelectorAll('span');
	for (let i = 0; i < elementosASeparar.length; i++) {
		const nuevoHr = document.createElement('hr');
		nodoPrincipal.insertBefore(nuevoHr, elementosASeparar[i]);
	}
	//Agrega un separador al final del último elemento
	const nuevoHr = document.createElement('hr');
	let ultimoElemento = elementosASeparar[elementosASeparar.length - 1];
	nodoPrincipal.insertBefore(nuevoHr, ultimoElemento.nextSibling);
}

function conseguirEdadesDeLista(lista) {
	edades = []
	for (let i = 0; i < lista.length; i++) {
		edades.push(Number(lista[i].value));
	}
	return edades;
}

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

function mostrarMensajes(nodoPrincipal, edadMasGrande, edadMasPequenia, edadPromedio) {
	const $mensajeMasGrande = document.querySelector('#edad-mas-grande');
	const $mensajeMasPequenia = document.querySelector('#edad-mas-pequenia');
	const $mensajePromedio = document.querySelector('#edad-promedio');
	agregarSeparadoresEnPantalla(nodoPrincipal);
	$mensajeMasGrande.textContent = `La edad más grande es ${edadMasGrande}`
	$mensajeMasPequenia.textContent = `La edad más pequeña es ${edadMasPequenia}`
	$mensajePromedio.textContent = `La edad promedio es ${edadPromedio}`
}

const $botonCalcular = document.querySelector('#boton-calcular');

$botonCalcular.onclick = function() {
	const $edadesFamilia = document.querySelectorAll('div input');
	const $mensajes = document.querySelector('#mensajes');
	const edadesFamilia = conseguirEdadesDeLista($edadesFamilia);
	const edadMasGrande = calcularEdadMasGrande(edadesFamilia);
	const edadMasPequenia = calcularEdadMasPequenia(edadesFamilia);
	const edadPromedio = calcularPromedioEdades(edadesFamilia);
	mostrarMensajes($mensajes, edadMasGrande, edadMasPequenia, edadPromedio);	
	return false;
}

//Boton empezar de nuevo
const $botonEmpezarDeNuevo = document.querySelector('#empezar-de-nuevo');

function eliminarElementos(nodoPrincipal, elementos, botonCalcular, botonEmpezarDeNuevo, separadores) {
	for (let i = 0; i < $edadesFamilia.length; i++) {
		nodoPrincipal.removeChild(elementos);
	}
	nodoPrincipal.removeChild(botonCalcular);
	nodoPrincipal.removeChild(botonEmpezarDeNuevo);
	for (let i = 0; i < separadores.length; i++) {
		nodoPrincipal.removeChild(separadores[i]);
	}
}

function borrarMensajes() {
	const $mensajeMasGrande = document.querySelector('#edad-mas-grande');
	const $mensajeMasPequenia = document.querySelector('#edad-mas-pequenia');
	const $mensajePromedio = document.querySelector('#edad-promedio');
	$mensajeMasGrande.textContent = '';
	$mensajeMasPequenia.textContent = '';
	$mensajePromedio.textContent = '';
}

$botonEmpezarDeNuevo.onclick = function() {
	const $formulario = document.querySelector('form');
	const $edadesFamilia = document.querySelectorAll('div');
	const $botonCalcular = document.querySelectorAll('#boton-calcular');
	const $botonEmpezarDeNuevo = document.querySelectorAll('#empezar-de-nuevo');
	const $separadores = document.querySelectorAll('hr');
	eliminarElementos($formulario, $edadesFamilia, $botonCalcular, $botonEmpezarDeNuevo, $separadores);
	borrarMensajes();
	agregarElementos();
	return false;
}
