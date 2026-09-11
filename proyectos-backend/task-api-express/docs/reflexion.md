# Reflexión - EC1 F1 A2

** Jose Angel Cruz Manzo **
** Grupo: 01             **

##1. ¿Cuál es la función de Node.js en este proyecto?

Node.js actúa como el runtime de JavaScript que permite ejecutar código JavaScript en el servidor. En este proyecto, Node.js es el entorno que ejecuta la aplicación backend, permitiendo que TypeScript se compile a JavaScript y se ejecute. Utiliza módulos como `tsx` y `node` para ejecutar archivos JavaScript compilados desde TypeScript.

##2. ¿Qué errores ayuda a detectar TypeScript antes de ejecutar la aplicación?

TypeScript detecta errores de tipo antes de la ejecución, como:
- Asignación de valores incorrectos (ej: pasar un string cuando se espera un number)
- Acceso a propiedades inexistentes en objetos
- Argumentos incorrectos en funciones (cantidad o tipo)
- Operaciones incompatibles entre tipos
- Uso de variables sin declarar
En este proyecto ayuda a validar que los parámetros de funciones como `findTaskById()` sean números, y que las propiedades de Task (id, title, status, createdAt) se usen correctamente.

##3. ¿Por qué se separaron models, data, services y utils?

Esta separación sigue el patrón de arquitectura en capas:
- **models/**: Define la estructura de datos (tipos e interfaces) como `Task`
- **data/**: Almacena y gestiona los datos (array `tasks`)
- **services/**: Contiene la lógica de negocio (crear, eliminar, completar tareas)
- **utils/**: Funciones auxiliares reutilizables (delay, env)
Esta separación mejora la mantenibilidad, permite reutilizar código, facilita testing y hace que el código sea más escalable y organizado.

##4. ¿Qué diferencia existe entre una función síncrona y una función async?

- **Síncrona**: Ejecuta el código línea por línea bloqueando la ejecución. Devuelve el resultado inmediatamente.
- **Async**: Permite que otras operaciones se ejecuten mientras espera. Devuelve una `Promise` que se resuelve posteriormente.
En este proyecto, `main()` es async porque usa `await delay(300)` para simular operaciones que toman tiempo sin bloquear. Las funciones síncronas como `createTask()` no necesitan esperar.

##5. ¿Por qué findTaskById devuelve Task | undefined?

Devuelve `Task | undefined` porque la tarea podría no existir. Si se busca una tarea con un id que no existe en el array, `find()` devuelve `undefined`. Esto es más seguro que devolver null o lanzar un error automáticamente, permitiendo al código que llama decidir cómo manejar el resultado. Por ejemplo, en `completeTask()` se verifica si es undefined antes de continuar.

##6. ¿Qué ventaja aporta leer APP_NAME desde process.env?

Permite configurar el nombre de la aplicación sin hardcodear valores. Ventajas:
- **Flexibilidad**: Cambiar el nombre sin modificar el código
- **Ambiente**: Usar diferentes nombres según el ambiente (desarrollo, producción)
- **Seguridad**: Mantener configuraciones sensibles fuera del código
- **Reusabilidad**: El mismo código funciona con diferentes configuraciones
En este proyecto, APP_NAME se puede establecer como variable de entorno y si no existe, usa un valor por defecto 'Task Manager Backend'.

##7. ¿Qué diferencia observó entre pnpm start y la secuencia pnpm build + pnpm serve?

- **pnpm start**: Usa `tsx src/index.ts` que ejecuta TypeScript directamente sin compilar a JavaScript. Es más rápido para desarrollo.
- **pnpm build + pnpm serve**: `build` compila TypeScript a JavaScript en la carpeta `dist/`, luego `serve` ejecuta `node dist/index.js`. Simula el entorno de producción donde se sirve código compilado.
`pnpm start` es para desarrollo (más rápido), mientras que `pnpm build + serve` es para producción (código precompilado y optimizado).

##8. ¿Qué parte de este proyecto podrá reutilizarse cuando se construya la API con Express?

- **models/task.ts**: La interfaz Task y sus tipos se pueden reutilizar como respuestas HTTP
- **services/task.service.ts**: Toda la lógica de negocio (crear, eliminar, completar tareas) puede ser llamada desde los controladores de Express
- **utils/env.ts**: La configuración de variables de entorno
- **data/task.ts**: Los datos (aunque en producción se reemplazaría con una base de datos)
- **La estructura general**: La separación en capas es perfecta para una API REST con Express, donde los servicios manejan la lógica y Express maneja las rutas HTTP