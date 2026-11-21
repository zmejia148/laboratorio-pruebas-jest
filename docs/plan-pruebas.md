
# Plan de pruebas - Módulo de compras

## 1. Objetivo

Planificar las pruebas dinámicas del módulo de cálculo de compras de una tienda digital, con el propósito de identificar defectos, verificar el cumplimiento de los requisitos y comprobar las correcciones mediante pruebas de regresión.

## 2. Alcance

Se evaluará la función calcularTotal(precio, cantidad, descuento), considerando:

- Cálculo del subtotal.
- Aplicación de descuentos entre 0 % y 100 %.
- Resultado con dos decimales.
- Validación de valores negativos y fuera de rango.
- Validación de entradas no numéricas o no finitas.
- Exploración limitada del rendimiento.

No se evaluarán interfaces gráficas, bases de datos ni servicios externos.

## 3. Requisitos

- RF-01: Calcular el subtotal multiplicando precio por cantidad para números positivos.
- RF-02: Permitir descuentos entre 0 % y 100 %.
- RF-03: Devolver el total con dos decimales; un descuento del 100 % produce cero.
- RF-04: Generar RangeError cuando el precio sea negativo, la cantidad sea menor o igual a cero o el descuento esté fuera de rango.
- RF-05: Generar TypeError para entradas no numéricas o no finitas.
- RNF-01: Realizar una exploración limitada del rendimiento.

## 4. Tipos y niveles de pruebas

Nivel: pruebas unitarias de la función calcularTotal.

Tipos:
- Funcionales: comprobar cálculos y validaciones.
- Valores límite: evaluar 0 %, 100 % y valores fuera de rango.
- Particiones de equivalencia: entradas válidas e inválidas.
- Regresión: repetir las pruebas después de corregir defectos.
- Rendimiento exploratorio: medir tiempos de ejecución sin establecer conclusiones definitivas.

## 5. Riesgos identificados

- Cálculos incorrectos del total.
- Aceptación de descuentos superiores al 100 %.
- Falta de validación de entradas.
- Resultados con más de dos decimales.
- Resultados inesperados con valores no finitos.

## 6. Ambiente de pruebas

- Sistema operativo: Windows.
- Editor: Visual Studio Code.
- Lenguaje: JavaScript.
- Entorno de ejecución: Node.js.
- Framework de pruebas: Jest.
- Ejecución: npm test.

Las versiones instaladas se registrarán al ejecutar las pruebas.

## 7. Criterios de entrada

- Código inicial disponible.
- Requisitos identificados.
- Node.js y Jest instalados.
- Casos de prueba diseñados.

## 8. Criterios de salida

- Ejecutar al menos 10 pruebas automatizadas.
- Registrar al menos tres defectos confirmados.
- Conservar evidencias iniciales y finales.
- Corregir los defectos identificados.
- Ejecutar pruebas de regresión.
- Documentar los resultados y riesgos residuales.

## 9. Evidencias

Los resultados de las ejecuciones se guardarán en:

- evidencias/pruebas-iniciales.txt
- evidencias/pruebas-finales.txt

Los defectos y resultados se documentarán en la carpeta docs.
