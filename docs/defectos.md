
# Registro de defectos confirmados
## Unidad 2 - Evaluación dinámica

**Proyecto:** Laboratorio de pruebas dinámicas con Jest  
**Módulo:** `src/compras.js`  
**Herramienta:** Jest  
**Total de casos automatizados:** 12  
**Defectos confirmados:** 3  
**Estado final:** Corregidos y verificados

---

## 1. Objetivo

Documentar los defectos identificados durante la ejecución
de pruebas dinámicas del módulo de cálculo de compras,
registrando sus causas, pasos de reproducción, resultados
esperados y reales, severidad, correcciones y evidencias.

La finalidad es garantizar la trazabilidad entre los
requisitos, los casos de prueba y las modificaciones
realizadas al código fuente.

---

## 2. Resultados de la ejecución inicial

Se ejecutaron 12 casos de prueba automatizados con Jest
sobre el código original proporcionado en la actividad.

**Resultados obtenidos:**

- Total de pruebas ejecutadas: 12.
- Pruebas aprobadas: 4.
- Pruebas fallidas: 8.
- Porcentaje de aprobación: 33,33 %.
- Porcentaje de fallos: 66,67 %.

**Casos aprobados:**
CP-01, CP-02, CP-03 y CP-04.

**Casos fallidos:**
CP-05, CP-06, CP-07, CP-08, CP-09, CP-10,
CP-11 y CP-12.

Los resultados evidenciaron tres grupos de defectos
relacionados con el redondeo decimal, la validación
de rangos y la validación de tipos de datos.

**Evidencia:** `evidencias/pruebas-iniciales.txt`

---

## 3. Registro detallado de defectos

### DEF-01: Falta de redondeo decimal

**Requisito:** RF-03  
**Caso relacionado:** CP-05  
**Severidad:** Media  
**Estado:** Corregido y verificado

**Descripción:**

La función `calcularTotal` devolvía resultados con
más de dos decimales, incumpliendo el requisito
de precisión monetaria establecido para el sistema.

**Pasos para reproducir:**

1. Abrir el proyecto en Visual Studio Code.
2. Ejecutar el comando `npm test`.
3. Localizar el caso CP-05.
4. Comparar el resultado real con el esperado.

**Datos utilizados:**

- Precio: 10.99
- Cantidad: 3
- Descuento: 15 %

**Resultado esperado:**

28.02

**Resultado real inicial:**

28.0245

**Causa identificada:**

El código original realizaba la operación matemática,
pero devolvía directamente el resultado sin aplicar
ningún mecanismo de redondeo.

**Corrección aplicada:**

Se incorporó una operación de redondeo a dos decimales
mediante `Math.round` y `Number.EPSILON`.

**Verificación:**

Después de modificar el código, se ejecutó nuevamente
el caso CP-05, obteniendo el resultado esperado.

**Resultado final:** Aprobado.

**Evidencias:**

- `evidencias/pruebas-iniciales.txt`
- `evidencias/pruebas-finales.txt`

---

### DEF-02: Ausencia de validación de rangos

**Requisito:** RF-04  
**Casos relacionados:** CP-06, CP-07, CP-08,
CP-09 y CP-10  
**Severidad:** Alta  
**Estado:** Corregido y verificado

**Descripción:**

El módulo permitía procesar valores fuera de los
rangos establecidos sin generar la excepción
`RangeError` requerida.

Esto podía provocar cálculos incorrectos, como
totales negativos o descuentos superiores al
valor permitido.

**Pasos para reproducir:**

1. Abrir el proyecto en Visual Studio Code.
2. Ejecutar `npm test`.
3. Revisar los resultados de CP-06 a CP-10.
4. Comprobar que el código original no generaba
   las excepciones esperadas.

**Datos utilizados:**

| Caso | Entrada | Resultado esperado |
|---|---|---|
| CP-06 | (-10, 2, 10) | RangeError |
| CP-07 | (10, 0, 10) | RangeError |
| CP-08 | (10, -2, 10) | RangeError |
| CP-09 | (100, 2, 101) | RangeError |
| CP-10 | (100, 2, -1) | RangeError |

**Resultado esperado:**

La función debe generar `RangeError` cuando:

- El precio sea negativo.
- La cantidad sea menor o igual a cero.
- El descuento sea inferior a 0 %.
- El descuento sea superior a 100 %.

**Resultado real inicial:**

La función realizaba las operaciones sin generar
las excepciones correspondientes.

**Causa identificada:**

El código original no contenía condiciones para
validar los límites de los parámetros recibidos.

**Corrección aplicada:**

Se incorporaron estructuras condicionales para
comprobar los rangos permitidos y lanzar
`RangeError` cuando corresponda.

**Verificación:**

Se ejecutaron nuevamente los cinco casos asociados
al defecto, obteniendo resultados satisfactorios.

**Resultado final:** 5 casos aprobados.

**Evidencias:**

- `evidencias/pruebas-iniciales.txt`
- `evidencias/pruebas-finales.txt`

---

### DEF-03: Ausencia de validación de tipos

**Requisito:** RF-05  
**Casos relacionados:** CP-11 y CP-12  
**Severidad:** Alta  
**Estado:** Corregido y verificado

**Descripción:**

La función original no comprobaba si los parámetros
recibidos eran números válidos y finitos.

Como consecuencia, podía procesar cadenas de texto
o valores especiales como `Infinity`, sin generar
la excepción `TypeError` requerida.

**Pasos para reproducir:**

1. Abrir el proyecto en Visual Studio Code.
2. Ejecutar `npm test`.
3. Revisar los casos CP-11 y CP-12.
4. Verificar que la función original no generaba
   la excepción correspondiente.

**Datos utilizados:**

| Caso | Entrada | Resultado esperado |
|---|---|---|
| CP-11 | ("abc", 2, 10) | TypeError |
| CP-12 | (Infinity, 2, 10) | TypeError |

**Resultado esperado:**

La función debe generar `TypeError` cuando
alguno de los parámetros sea no numérico
o no finito.

**Resultado real inicial:**

El código original no generaba la excepción
requerida y continuaba con las operaciones.

**Causa identificada:**

No existían comprobaciones de tipo ni validaciones
para valores no finitos.

**Corrección aplicada:**

Se incorporaron validaciones utilizando:

- `typeof`
- `Number.isFinite()`
- `throw new TypeError()`

Estas comprobaciones permiten rechazar entradas
inválidas antes de efectuar los cálculos.

**Verificación:**

Se ejecutaron nuevamente CP-11 y CP-12,
obteniendo resultados satisfactorios.

**Resultado final:** 2 casos aprobados.

**Evidencias:**

- `evidencias/pruebas-iniciales.txt`
- `evidencias/pruebas-finales.txt`

---

## 4. Resumen general de defectos

| ID | Requisito | Casos afectados | Severidad | Estado |
|---|---|---|---|---|
| DEF-01 | RF-03 | CP-05 | Media | Corregido y verificado |
| DEF-02 | RF-04 | CP-06 a CP-10 | Alta | Corregido y verificado |
| DEF-03 | RF-05 | CP-11 y CP-12 | Alta | Corregido y verificado |

Los tres defectos identificados fueron corregidos
mediante modificaciones al código fuente, sin
alterar los requisitos establecidos ni los casos
de prueba originales.

---

## 5. Verificación de correcciones y regresión

Después de implementar las correcciones, se
ejecutaron nuevamente los 12 casos automatizados
mediante Jest.

### Comparación de resultados

| Indicador | Inicial | Final |
|---|---|---|
| Pruebas ejecutadas | 12 | 12 |
| Pruebas aprobadas | 4 | 12 |
| Pruebas fallidas | 8 | 0 |
| Porcentaje de aprobación | 33,33 % | 100 % |

**Resultados de la ejecución final:**

- Suites aprobadas: 1.
- Pruebas aprobadas: 12.
- Pruebas fallidas: 0.
- Tiempo reportado por Jest: 0.701 segundos.

Los casos CP-01 a CP-04, que inicialmente
funcionaban correctamente, continuaron aprobando
después de modificar el código.

Esto constituye evidencia de regresión para
los escenarios evaluados.

Asimismo, CP-05 a CP-12 aprobaron después
de aplicar las correcciones correspondientes.

**Evidencia final:**
`evidencias/pruebas-finales.txt`

---

## 6. Análisis de resultados

La ejecución inicial permitió identificar defectos
que no podían detectarse únicamente mediante
la lectura del código fuente.

Las pruebas automatizadas facilitaron la
reproducción de los errores y permitieron
comparar los resultados reales con los
comportamientos esperados.

La corrección de los tres defectos incrementó
el porcentaje de aprobación de 33,33 % a 100 %.

Sin embargo, obtener todas las pruebas aprobadas
no garantiza que el sistema esté completamente
libre de defectos.

La cobertura alcanzada corresponde a los casos
diseñados y ejecutados, por lo que todavía
podrían existir situaciones no evaluadas.

---

## 7. Riesgos residuales

Aunque todas las pruebas automatizadas
aprobaron, se identifican posibles riesgos
que podrían analizarse posteriormente:

- Operaciones con valores numéricos extremadamente
  grandes que puedan producir desbordamientos.
- Diferencias de precisión en determinados
  cálculos con números decimales.
- Comportamiento ante combinaciones de entradas
  que no se incluyeron en la matriz.
- Rendimiento bajo cargas superiores a las
  evaluadas en esta actividad.

Estos riesgos no representan defectos confirmados,
sino aspectos que requieren pruebas adicionales.

---

## 8. Conclusiones

La aplicación de pruebas dinámicas permitió
identificar y confirmar tres defectos del módulo
de compras, relacionados con la precisión decimal,
la validación de rangos y el control de tipos.

La automatización mediante Jest facilitó la
ejecución repetible de los casos y permitió
comprobar las correcciones implementadas.

Los resultados finales evidenciaron una mejora
en el cumplimiento de los requisitos evaluados,
pasando de cuatro pruebas aprobadas a doce.

La ejecución de pruebas de regresión permitió
verificar que las funcionalidades previamente
correctas continuaran funcionando después de
los cambios.

En conclusión, la actividad demuestra la
importancia de planificar, ejecutar, documentar
y repetir las pruebas de software para detectar
defectos y mejorar la confiabilidad del sistema.
