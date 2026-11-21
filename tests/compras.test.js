
const { calcularTotal } = require('../src/compras');

describe('Pruebas del módulo de compras', () => {

  // CP-01: Cálculo del subtotal sin descuento
  test('CP-01: calcular subtotal correctamente', () => {
    expect(calcularTotal(20, 3, 0)).toBe(60);
  });

  // CP-02: Descuento válido del 10 %
  test('CP-02: aplicar descuento del 10 %', () => {
    expect(calcularTotal(100, 2, 10)).toBe(180);
  });

  // CP-03: Límite inferior del descuento
  test('CP-03: aceptar descuento del 0 %', () => {
    expect(calcularTotal(50, 2, 0)).toBe(100);
  });

  // CP-04: Límite superior del descuento
  test('CP-04: descuento del 100 % produce cero', () => {
    expect(calcularTotal(50, 2, 100)).toBe(0);
  });

  // CP-05: Redondeo a dos decimales
  test('CP-05: redondear el total a dos decimales', () => {
    expect(calcularTotal(10.99, 3, 15)).toBe(28.02);
  });

  // CP-06: Precio negativo
  test('CP-06: rechazar precio negativo', () => {
    expect(() => calcularTotal(-10, 2, 10))
      .toThrow(RangeError);
  });

  // CP-07: Cantidad igual a cero
  test('CP-07: rechazar cantidad cero', () => {
    expect(() => calcularTotal(10, 0, 10))
      .toThrow(RangeError);
  });

  // CP-08: Cantidad negativa
  test('CP-08: rechazar cantidad negativa', () => {
    expect(() => calcularTotal(10, -2, 10))
      .toThrow(RangeError);
  });

  // CP-09: Descuento superior al 100 %
  test('CP-09: rechazar descuento mayor a 100 %', () => {
    expect(() => calcularTotal(100, 2, 101))
      .toThrow(RangeError);
  });

  // CP-10: Descuento negativo
  test('CP-10: rechazar descuento negativo', () => {
    expect(() => calcularTotal(100, 2, -1))
      .toThrow(RangeError);
  });

  // CP-11: Entrada no numérica
  test('CP-11: rechazar texto como precio', () => {
    expect(() => calcularTotal('abc', 2, 10))
      .toThrow(TypeError);
  });

  // CP-12: Entrada no finita
  test('CP-12: rechazar Infinity', () => {
    expect(() => calcularTotal(Infinity, 2, 10))
      .toThrow(TypeError);
  });

});
