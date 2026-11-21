
# Matriz de casos de prueba
## Módulo de cálculo de compras

### Objetivo
Diseñar casos de prueba para verificar los requisitos
funcionales del módulo calcularTotal y detectar
defectos mediante técnicas de pruebas dinámicas.

### Estados
- No ejecutado: caso diseñado, pendiente de ejecución.
- Aprobado: resultado real coincide con el esperado.
- Fallido: resultado real no coincide con el esperado.

| ID | Requisito | Técnica | Datos de entrada | Resultado esperado | Prioridad | Estado |
|---|---|---|---|---|---|---|
| CP-01 | RF-01 | Partición válida | (20, 3, 0) | 60.00 | Alta | Aprobado |
| CP-02 | RF-02 | Partición válida | (100, 2, 10) | 180.00 | Alta | Aprobado |
| CP-03 | RF-02 | Valor límite inferior | (50, 2, 0) | 100.00 | Alta | Aprobado |
| CP-04 | RF-03 | Valor límite superior | (50, 2, 100) | 0.00 | Alta | Aprobado |
| CP-05 | RF-03 | Precisión decimal | (10.99, 3, 15) | 28.02 | Alta | Aprobado |
| CP-06 | RF-04 | Partición inválida | (-10, 2, 10) | RangeError | Alta | Aprobado |
| CP-07 | RF-04 | Valor límite | (10, 0, 10) | RangeError | Alta | Aprobado |
| CP-08 | RF-04 | Partición inválida | (10, -2, 10) | RangeError | Alta | Aprobado |
| CP-09 | RF-04 | Límite superior inválido | (100, 2, 101) | RangeError | Alta | Aprobado |
| CP-10 | RF-04 | Límite inferior inválido | (100, 2, -1) | RangeError | Alta | Aprobado |
| CP-11 | RF-05 | Tipo inválido | ("abc", 2, 10) | TypeError | Alta | Aprobado |
| CP-12 | RF-05 | Valor no finito | (Infinity, 2, 10) | TypeError | Alta | Aprobado |

### Justificación de las técnicas

**Particiones de equivalencia:**
Se agruparon los datos de entrada en categorías válidas
e inválidas para comprobar el comportamiento del módulo
sin probar todas las combinaciones posibles.

**Análisis de valores límite:**
Se seleccionaron valores como 0 %, 100 %, 101 % y
cantidad igual a cero, debido a que los defectos suelen
presentarse cerca de los límites permitidos.

**Pruebas de precisión:**
Se incluyó un caso con valores decimales para comprobar
que el total se redondee correctamente a dos decimales.

### Trazabilidad
Cada caso está asociado con un requisito funcional
RF-01 a RF-05, permitiendo identificar qué
funcionalidades se verifican durante la ejecución.

### Observaciones
Los estados se actualizarán después de ejecutar
las pruebas automatizadas con Jest.

La exploración de rendimiento RNF-01 se documentará
por separado en la fase D.


### Historial de ejecución

**Primera ejecución:**
- Aprobados: CP-01, CP-02, CP-03 y CP-04.
- Fallidos: CP-05 a CP-12.

**Ejecución posterior a las correcciones:**
- Aprobados: CP-01 a CP-12.
- Fallidos: ninguno.

La segunda ejecución permitió verificar las
correcciones y realizar pruebas de regresión.
```
