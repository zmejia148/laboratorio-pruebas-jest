
# Reporte de pruebas dinámicas
## Unidad 2 - Verificación y Validación de Software

**Proyecto:** Laboratorio de pruebas dinámicas con Jest  
**Módulo:** src/compras.js  
**Herramientas:** JavaScript, Node.js y Jest  
**Estado:** Pruebas funcionales finalizadas

## 1. Objetivo

Presentar los resultados de las pruebas dinámicas
realizadas al módulo de cálculo de compras de una
tienda digital.

El reporte documenta la ejecución inicial, los
defectos confirmados, las correcciones realizadas,
las pruebas de regresión, la trazabilidad de
requisitos y la exploración del rendimiento.

## 2. Alcance y metodología

Se evaluó la función calcularTotal(precio,
cantidad, descuento) mediante 12 pruebas
automatizadas con Jest.

Se utilizaron las siguientes técnicas:

- Particiones de equivalencia.
- Análisis de valores límite.
- Pruebas de entradas inválidas.
- Verificación de precisión decimal.
- Pruebas de regresión.

Las pruebas corresponden al nivel unitario,
porque evalúan una función individual sin
dependencias externas.

## 3. Ambiente de ejecución

- Sistema operativo: Windows.
- Plataforma reportada por Node.js: win32.
- Editor: Visual Studio Code.
- Entorno de ejecución: Node.js v22.21.0.
- Framework: Jest.
- Comando de ejecución: npm test.

La versión específica de Jest puede verificarse
mediante el comando npx jest --version.

## 4. Resultados de las pruebas

### 4.1. Ejecución inicial

Las pruebas se ejecutaron sobre el código
original proporcionado en la actividad.

Resultados:

- Casos ejecutados: 12.
- Casos aprobados: 4.
- Casos fallidos: 8.
- Porcentaje de aprobación: 33,33 %.

Los casos CP-01 a CP-04 aprobaron.

Los casos CP-05 a CP-12 fallaron debido a
problemas de redondeo y ausencia de validaciones.

Evidencia:
evidencias/pruebas-iniciales.txt

### 4.2. Ejecución final

Después de implementar las correcciones,
se ejecutaron nuevamente los mismos casos.

Resultados:

- Casos ejecutados: 12.
- Casos aprobados: 12.
- Casos fallidos: 0.
- Porcentaje de aprobación: 100 %.
- Suites aprobadas: 1.

Evidencia:
evidencias/pruebas-finales.txt

### 4.3. Comparación

| Indicador | Inicial | Final |
| Casos ejecutados | 12 | 12 |
| Aprobados | 4 | 12 |
| Fallidos | 8 | 0 |
| Aprobación | 33,33 % | 100 % |

La mejora evidencia que las correcciones
permitieron cumplir los escenarios evaluados.

## 5. Defectos identificados y corregidos

### DEF-01: Falta de redondeo

Requisito: RF-03.

El módulo devolvía 28.0245 cuando se esperaba
28.02.

Se incorporó el redondeo a dos decimales.

Verificación: CP-05 aprobado.

### DEF-02: Ausencia de validación de rangos

Requisito: RF-04.

El código aceptaba precios negativos,
cantidades menores o iguales a cero y
descuentos fuera del intervalo permitido.

Se agregaron validaciones que generan
RangeError ante estas entradas.

Verificación: CP-06 a CP-10 aprobados.

### DEF-03: Ausencia de validación de tipos

Requisito: RF-05.

El módulo no rechazaba entradas no numéricas
ni valores no finitos.

Se incorporaron validaciones mediante typeof
y Number.isFinite(), generando TypeError
cuando corresponde.

Verificación: CP-11 y CP-12 aprobados.

Los tres defectos quedaron corregidos y
verificados para los casos ejecutados.

## 6. Cobertura por requisito

| Requisito | Casos | Resultado final |

| RF-01 | CP-01 | Aprobado |
| RF-02 | CP-02, CP-03 | Aprobado |
| RF-03 | CP-04, CP-05 | Aprobado |
| RF-04 | CP-06 a CP-10 | Aprobado |
| RF-05 | CP-11, CP-12 | Aprobado |
| RNF-01 | Medición exploratoria | Ejecutada |

Los cinco requisitos funcionales cuentan con
al menos un caso automatizado aprobado.

Esto representa una cobertura de requisitos
funcionales del 100 % en la matriz diseñada.

No equivale a una cobertura del 100 % de
líneas, ramas o posibles escenarios.

## 7. Pruebas de regresión

Se ejecutaron nuevamente los 12 casos
después de corregir el código.

Las pruebas CP-01 a CP-04, que inicialmente
aprobaron, continuaron funcionando.

Las pruebas CP-05 a CP-12, que inicialmente
fallaron, aprobaron después de las correcciones.

Los resultados proporcionan evidencia de
regresión satisfactoria para los escenarios
incluidos en la matriz.

## 8. Medición exploratoria de rendimiento

### Ambiente y procedimiento

Se utilizó Node.js v22.21.0 sobre Windows.

La medición consistió en ejecutar cinco
repeticiones de 100.000 llamadas a la
función calcularTotal.

Antes de medir, se realizaron 10.000
llamadas de calentamiento.

Se utilizó process.hrtime.bigint()
para medir el tiempo transcurrido.

### Resultados observados

| Repetición | Tiempo |
| 1 | 2.659 ms |
| 2 | 0.619 ms |
| 3 | 1.408 ms |
| 4 | 1.396 ms |
| 5 | 1.488 ms |

Tiempo mínimo: 0.619 ms.

Tiempo máximo: 2.659 ms.

Tiempo promedio: 1.514 ms.

Total de llamadas medidas: 500.000.

Estos resultados corresponden a la primera
ejecución mostrada en la terminal.

La evidencia rendimiento.txt fue generada
mediante una ejecución posterior, por lo que
puede contener tiempos diferentes.

### Interpretación

Los tiempos observados fueron bajos para
este escenario local de cálculo repetitivo.

Sin embargo, la medición no permite concluir
que el módulo mantendrá el mismo rendimiento
en otros equipos o bajo cargas reales.

### Limitaciones

- Se utilizó un solo equipo.
- No se realizaron pruebas concurrentes.
- No se midió el consumo de memoria.
- Se empleó una combinación fija de entradas.
- Los resultados pueden variar por las
  optimizaciones del motor JavaScript.
- No se definió un umbral de aceptación
  cuantitativo de rendimiento.

Por estas razones, la medición se considera
exploratoria y no una prueba de carga.

## 9. Riesgos residuales

Aunque los 12 casos aprobaron, permanecen
aspectos que requieren evaluación adicional:

- Posibles desbordamientos en operaciones
  con valores numéricos extremadamente grandes.
- Casos especiales de precisión decimal.
- Combinaciones de entradas no contempladas
  en la matriz actual.
- Comportamiento del módulo bajo cargas
  concurrentes o prolongadas.
- Ausencia de métricas de cobertura estructural.

Estos aspectos constituyen riesgos potenciales
y no defectos confirmados por la ejecución.

## 10. Conclusiones

La aplicación de pruebas dinámicas permitió
detectar tres defectos confirmados en el
módulo de compras.

La automatización mediante Jest facilitó
la reproducción de fallos y la comprobación
de las correcciones realizadas.

La tasa de aprobación pasó de 33,33 % a
100 % después de modificar el código.

La ejecución de regresión permitió verificar
que los casos previamente correctos
continuaran aprobando.

La medición exploratoria proporcionó una
primera referencia del tiempo de ejecución,
aunque sus resultados no pueden generalizarse
a escenarios de carga real.

En conclusión, la actividad demuestra
la importancia de combinar planificación,
diseño de casos, automatización, gestión
de defectos y documentación de evidencias
para mejorar la calidad del software.

## 11. Evidencias

- docs/plan-pruebas.md
- docs/matriz-casos.md
- docs/defectos.md
- evidencias/pruebas-iniciales.txt
- evidencias/pruebas-finales.txt
- evidencias/rendimiento.txt
- tests/compras.test.js
- tests/rendimiento.js
