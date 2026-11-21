
# Laboratorio de Pruebas Dinámicas con Jest

## Universidad Politécnica Salesiana

**Asignatura:** Verificación y Validación de Software  
**Unidad:** 2 - Evaluación Dinámica  
**Estudiante:** Zaida Mejía  
**Actividad:** Laboratorio de pruebas dinámicas:
diseño de casos, automatización con Jest
y gestión de defectos.

---

## 1. Descripción del proyecto

Este proyecto tiene como finalidad aplicar
técnicas de pruebas dinámicas a un módulo
de cálculo de compras desarrollado en JavaScript.

Se utiliza Jest para automatizar las pruebas,
detectar defectos, verificar las correcciones
y ejecutar pruebas de regresión.

También se realiza una medición exploratoria
de rendimiento y se documentan las evidencias
obtenidas durante el proceso.

## 2. Objetivos

- Diseñar casos de prueba basados en requisitos.
- Aplicar particiones de equivalencia y valores límite.
- Automatizar pruebas unitarias mediante Jest.
- Identificar y documentar defectos confirmados.
- Corregir los defectos sin modificar los requisitos.
- Ejecutar pruebas de regresión.
- Realizar una medición exploratoria de rendimiento.
- Registrar evidencias y resultados.

## 3. Requisitos evaluados

| ID | Descripción |
|---|---|
| RF-01 | Calcular el subtotal mediante precio por cantidad. |
| RF-02 | Aplicar descuentos entre 0 % y 100 %. |
| RF-03 | Presentar el total con precisión de dos decimales. |
| RF-04 | Generar RangeError ante valores fuera de rango. |
| RF-05 | Generar TypeError ante valores no numéricos o no finitos. |
| RNF-01 | Realizar una medición exploratoria de rendimiento. |

## 4. Tecnologías utilizadas

- JavaScript.
- Node.js.
- Jest.
- Visual Studio Code.
- Git y GitHub.

## 5. Estructura del proyecto

```text
laboratorio-pruebas-jest/
|
|-- src/
|   |-- compras.js
|
|-- tests/
|   |-- compras.test.js
|   |-- rendimiento.js
|
|-- docs/
|   |-- plan-pruebas.md
|   |-- matriz-casos.md
|   |-- defectos.md
|   |-- reporte-pruebas.md
|
|-- evidencias/
|   |-- pruebas-iniciales.txt
|   |-- pruebas-finales.txt
|   |-- rendimiento.txt
|
|-- .gitignore
|-- package.json
|-- package-lock.json
|-- README.md
```

## 6. Instalación y ejecución

### Requisitos previos

Tener instalado Node.js y npm.

### Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
cd laboratorio-pruebas-jest
```

Reemplazar URL_DEL_REPOSITORIO por
la dirección real del repositorio.

### Instalar dependencias

```bash
npm install
```

### Ejecutar pruebas automatizadas

```bash
npm test
```

### Ejecutar medición de rendimiento

```bash
node tests/rendimiento.js
```

## 7. Casos de prueba

Se diseñaron y automatizaron 12 casos
de prueba mediante Jest.

Los casos incluyen:

- Cálculo de subtotales.
- Aplicación de descuentos.
- Redondeo decimal.
- Validación de precios negativos.
- Validación de cantidades inválidas.
- Validación de descuentos fuera de rango.
- Validación de tipos de datos.
- Validación de valores no finitos.

## 8. Resultados

### Ejecución inicial

- Total de casos: 12.
- Aprobados: 4.
- Fallidos: 8.
- Porcentaje de aprobación: 33,33 %.

### Ejecución final

- Total de casos: 12.
- Aprobados: 12.
- Fallidos: 0.
- Porcentaje de aprobación: 100 %.

## 9. Defectos confirmados

| ID | Descripción | Estado |
|---|---|---|
| DEF-01 | Falta de redondeo decimal | Corregido |
| DEF-02 | Ausencia de validación de rangos | Corregido |
| DEF-03 | Ausencia de validación de tipos | Corregido |

Las correcciones fueron verificadas mediante
la ejecución de los casos automatizados.

## 10. Medición exploratoria de rendimiento

Se realizaron cinco repeticiones de
100.000 llamadas a la función calcularTotal.

En la primera ejecución se obtuvieron
los siguientes resultados:

- Tiempo mínimo: 0.619 ms.
- Tiempo máximo: 2.659 ms.
- Tiempo promedio: 1.514 ms.

Estos resultados son exploratorios y
no representan una prueba de carga.

## 11. Evidencias

Los archivos de evidencia se encuentran
en la carpeta evidencias.

La documentación técnica y los registros
de defectos están disponibles en docs.

## 12. Conclusión

Las pruebas dinámicas permitieron identificar
tres defectos y verificar sus correcciones.

La automatización mediante Jest facilitó
la ejecución repetible de las pruebas y
la validación de los requisitos evaluados.

El proyecto demuestra la importancia de
la planificación, la trazabilidad,
la documentación de evidencias y las
pruebas de regresión en el aseguramiento
de la calidad del software.
