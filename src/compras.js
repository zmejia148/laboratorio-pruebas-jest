
function calcularTotal(precio, cantidad, descuento) {

  // RF-05: Validar tipos y valores finitos
  if (
    typeof precio !== 'number' ||
    typeof cantidad !== 'number' ||
    typeof descuento !== 'number' ||
    !Number.isFinite(precio) ||
    !Number.isFinite(cantidad) ||
    !Number.isFinite(descuento)
  ) {
    throw new TypeError(
      'Los valores deben ser números finitos'
    );
  }

  // RF-04: Validar los rangos permitidos
  if (precio < 0) {
    throw new RangeError(
      'El precio no puede ser negativo'
    );
  }

  if (cantidad <= 0) {
    throw new RangeError(
      'La cantidad debe ser mayor que cero'
    );
  }

  if (descuento < 0 || descuento > 100) {
    throw new RangeError(
      'El descuento debe estar entre 0 y 100'
    );
  }

  // RF-01: Calcular el subtotal
  const subtotal = precio * cantidad;

  // RF-02: Aplicar el descuento
  const valorDescuento = subtotal * descuento / 100;

  // RF-03: Calcular y redondear el total
  const total = subtotal - valorDescuento;

  return Math.round((total + Number.EPSILON) * 100) / 100;
}

module.exports = { calcularTotal };
