function probarCalcularSalarioMasAlto() {
    console.assert(calcularSalarioMasAlto([2500000, 2750000, 3000000, 1800000]) === 3000000,
    'calcularSalarioMasAlto() no calcula correctamente el salario más alto de entre los salarios brindados'
    );
}

function probarCalcularSalarioMasBajo() {
    console.assert(calcularSalarioMasBajo([2500000, 2750000, 3000000, 1800000]) === 1800000,
    'calcularSalarioMasBajo() no calcula correctamente el salario más bajo de entre los salarios brindados'
    );
}

function probarCalcularSalarioPromedio() {
    console.assert(calcularSalarioPromedio([2500000, 2750000, 3000000, 1800000]) === 2512500,
    'calcularSalarioPromedio() no calcula correctamente el salario promedio de entre los salarios brindados'
    );
}

function probarConvertirSalariosAnualesAMensuales() {
    console.assert(JSON.stringify(convertirSalariosAnualesAMensuales([1200000, 2400000])) === JSON.stringify([100000, 200000]),
    'convertirSalariosAnualesAMensuales() no calcula correctamente los salarios mensuales de entre los salarios anuales brindados'
    );
}

probarCalcularSalarioMasAlto();
probarCalcularSalarioMasBajo();
probarCalcularSalarioPromedio();
probarConvertirSalariosAnualesAMensuales();
