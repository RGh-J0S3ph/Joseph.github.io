\# Descripcion de los archivos del proyecto

## `package.json`

Es el archivo principal de configuracion del proyecto Node.js. Define el nombre,
la version, el punto de entrada y los comandos disponibles:

- `pnpm start`: ejecuta la aplicacion con Node.js.
- `pnpm dev`: ejecuta la aplicacion usando el modo de vigilancia de Node.js,
	que reinicia el proceso cuando detecta cambios.
- `pnpm format`: aplica Prettier a los archivos del proyecto.
- `pnpm format:check`: comprueba que los archivos cumplan el formato de
	Prettier.

Tambien indica que el proyecto usa modulos ES mediante `"type": "module"`,
requiere PNPM `11.22.0` y tiene Prettier como dependencia de desarrollo.

## `pnpm-lock.yaml`

Es el archivo de bloqueo generado por PNPM. Guarda las versiones exactas,
resoluciones e integridad de las dependencias para que las instalaciones sean
reproducibles en distintos entornos. No se edita manualmente normalmente.

## `src/index.js`

Es el archivo de entrada de la aplicacion. Crea el objeto `course` con los
datos del curso, define `createSummary` para generar un resumen textual y
finalmente muestra el resumen con `console.log` y los datos completos en forma
de tabla con `console.table`.

## `README.md`

Es la documentacion inicial del proyecto. Indica el objetivo general, los
requisitos necesarios y los comandos para ejecutar la aplicacion en modo
normal o en modo desarrollo.

## `.editorconfig`

Define reglas de formato compartidas por los editores: codificacion UTF-8,
saltos de linea LF, indentacion con dos espacios, linea final obligatoria y
eliminacion de espacios al final de las lineas. En archivos Markdown permite
conservar esos espacios.

## `.gitignore`

Indica que archivos y carpetas no deben incluirse en Git, como `node_modules`,
archivos de entorno, resultados de cobertura, compilaciones, logs y archivos
temporales del sistema. Tambien permite versionar `.env.example`.

## `.vscode/settings.json`

Contiene preferencias especificas de Visual Studio Code para este proyecto:
usa la extension de Prettier como formateador, formatea al guardar y mantiene
la indentacion, los saltos de linea y los espacios finales consistentes.

## `.vscode/launch.json`

Define la configuracion de depuracion de Visual Studio Code llamada
`Depurar backend`. Inicia `src/index.js` con Node.js, omite los archivos
internos de Node y muestra la salida en la terminal integrada.

## `.vscode/extensions.json`

Recomienda extensiones utiles para trabajar en el proyecto: Prettier para el
formato, ESLint para detectar problemas de codigo y Error Lens para mostrar
los errores directamente junto a las lineas afectadas.
