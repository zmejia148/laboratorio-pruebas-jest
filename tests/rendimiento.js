
const { calcularTotal } = require('../src/compras');

const iteraciones = 100000;
const repeticiones = 5;
const tiempos = [];

console.log('MEDICIÓN EXPLORATORIA DE RENDIMIENTO');
console.log('-----------------------------------');
console.log('Iteraciones por repetición:', iteraciones);
console.log('Repeticiones:', repeticiones);
console.log('Node.js:', process.version);
console.log('Sistema operativo:', process.platform);

// Calentamiento previo
for (let i = 0; i < 10000; i++) {
  calcularTotal(100, 2, 10);
}

// Ejecutar las mediciones
for (let r = 1; r <= repeticiones; r++) {
  const inicio = process.hrtime.bigint();

  for (let i = 0; i < iteraciones; i++) {
    calcularTotal(100, 2, 10);
  }

  const fin = process.hrtime.bigint();

  const milisegundos = Number(fin - inicio) / 1e6;
  tiempos.push(milisegundos);

  console.log(
    `Repetición ${r}: ${milisegundos.toFixed(3)} ms`
  );
}

// Calcular resultados
const promedio =
  tiempos.reduce((suma, tiempo) => suma + tiempo, 0)
  / repeticiones;

console.log('-----------------------------------');
console.log('Tiempo mínimo:', Math.min(...tiempos).toFixed(3), 'ms');
console.log('Tiempo máximo:', Math.max(...tiempos).toFixed(3), 'ms');
console.log('Tiempo promedio:', promedio.toFixed(3), 'ms');

console.log(
  'Nota: medición exploratoria, no prueba de carga.'
);
