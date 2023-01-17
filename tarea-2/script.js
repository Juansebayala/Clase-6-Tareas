const $botonAgregarIntegrantes = document.querySelector('#agregar-integrantes');

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

function crearBotonCalcular() {
	const botonCalcular = document.createElement('button');
	const atributoCalcular = document.createAttribute('id');
	atributoCalcular.value = 'boton-calcular';
	botonCalcular.setAttributeNode(atributoCalcular);
	const textoCalcular = 'Calcular';
	botonCalcular.textContent = textoCalcular;
	return botonCalcular;
}

function agregarElementos(cantidadAAgregar, botonCalcular) {
	const $nodoForm = document.querySelector('form');
	for (let i = 0; i < cantidadAAgregar; i++) {
		let elementos = crearElementosLabelEInputs();
		$nodoForm.appendChild(elementos);
	}
	$nodoForm.appendChild(botonCalcular);
}

function conseguirNumeroSalarios(salarios) {
	const numerosSalarios = [];
	for (let i = 0; i < salarios.length; i++) {
		if (salarios[i].value === '') {
			continue;
		} else {
			numerosSalarios.push(Number(salarios[i].value));
		}
	}
	return numerosSalarios;
}

function calcularSalarioMasAlto(salarios) {
	let salarioMasAlto = salarios[0];
	for (let i = 0; i < salarios.length; i++) {
		if (salarioMasAlto < salarios[i]) {
			salarioMasAlto = salarios[i];
		}
	}
	return salarioMasAlto;
}

function calcularSalarioMasBajo(salarios) {
	let salarioMasAlto = salarios[0];
	for (let i = 0; i < salarios.length; i++) {
		if (salarioMasAlto > salarios[i]) {
			salarioMasAlto = salarios[i];
		}
	}
	return salarioMasAlto;
}

function calcularSalarioPromedio(salarios) {
	let sumaSalarios = 0;
	for (let i = 0; i < salarios.length; i++) {
		sumaSalarios += salarios[i];
	}
	let promedio = sumaSalarios / salarios.length;
	return promedio;
}

function convertirSalariosAnualesAMensuales(salarios) {
	const salariosMensuales = [];
	const MESES_EN_UN_ANIO = 12;
	for (let i = 0; i < salarios.length; i++) {
		salariosMensuales.push(salarios[i] / MESES_EN_UN_ANIO);
	}
	return salariosMensuales;
}

$botonAgregarIntegrantes.onclick = function() {
	const $cantidadIntegrantes = Number(document.querySelector('#integrantes-familia').value);
	const elementoBotonCalcular = crearBotonCalcular();
	agregarElementos($cantidadIntegrantes, elementoBotonCalcular);
	
	const $botonCalcular = document.querySelector('#boton-calcular');

	$botonCalcular.onclick = function() {
		const $salariosFamilia = document.querySelectorAll('div input');
		const salariosFamilia = conseguirNumeroSalarios($salariosFamilia);
		const salariosFamiliaMensual = convertirSalariosAnualesAMensuales(salariosFamilia);
		$salarioMasAltoMensaje = document.querySelector('#salario-mas-alto');
		$salarioMasBajoMensaje = document.querySelector('#salario-mas-bajo');
		$salarioAnualPromedioMensaje = document.querySelector('#salario-anual-promedio');
		$salarioMensualPromedioMensaje = document.querySelector('#salario-mensual-promedio');
		$salarioMasAltoMensaje.textContent = `El salario más alto es: $${calcularSalarioMasAlto(salariosFamilia)}`;
		$salarioMasBajoMensaje.textContent = `El salario más bajo es: $${calcularSalarioMasBajo(salariosFamilia)}`;
		$salarioAnualPromedioMensaje.textContent = `El salario anual promedio es: $${calcularSalarioPromedio(salariosFamilia)}`;
		$salarioMensualPromedioMensaje.textContent = `El salario mensual promedio es: $${calcularSalarioPromedio(salariosFamiliaMensual)}`;
		return false;
	}
	return false;
}
