## 1. ¿Qué función cumple Node.js en el entorno de desarrollo de una aplicación frontend?
- La funcion de node en el entorno del frontend es controlar los recursos de la interfaz de usuario.

## 2. ¿Qué es PNPM y qué responsabilidad tiene dentro del proyecto?
- PNPM es un gestor de paquetes para Node.js, sirve para instalar y actualizar paquetes de Node.js.

## 3. ¿Qué problema resuelve Vite durante el desarrollo?
- Vite resuelve la lentitud y la pesadez en el entorno de desarrollo.

## 4. ¿Por qué se seleccionó la plantilla Vanilla con TypeScript?
- Por que permite crear aplicaciones usando Js puro, sin frameworks.

## 5. ¿Cuál es la diferencia entre pnpm install, pnpm dev y pnpm build?
- pnpm install descargas la bibliotecas y depdencias de Node.js.
- pnpm dev enciende un servidor local en tiempo real para ver los cambios en el sistema.
- pnpm build toma todo el codigo fuente y lo optimiza

## 6. ¿Qué información contiene package.json?
- Contiene informacion basica del proyecto como: nombre, descripcióm, version etc.

## 7. ¿Por qué debe conservarse pnpm-lock.yaml en el repositorio?
- Por que gracias a este archivo se puede asegurar que el proyecto de se instale y ejecute de forma correcta en cualquier equipo.

## 8. ¿Por qué node_modules no debe subirse a GitHub?
- Por que este archivo que pesa mucho dentro y contiene codigo, libreias y dependecias que ya se respaldan.

## 9. ¿Cuál es la función de main.ts?
- Inicar y ejecutar el programa.

## 10. ¿Qué ventaja ofrece separar el código en components, models, services, styles y utils?
- Ofrece un arquitectura limpia y ayuda a evitar el codigo spaguetti

## 11. ¿Qué diferencia existe entre el código fuente almacenado en src y los archivos generados en dist?
- El src es el codigo diseñado para que se pueda editar por nosotros, en cambio el dist es el codigo para las computadoras.

## 12. ¿Qué error o dificultad encontraste durante la configuración y cómo lo resolviste?
- Cambie el proyecto de unicación y tuve problemas con las bibliotecas que seguina apuntando al anterior directorio, lo resolvi al borrar la carpeta de node_modules (Remove-Item -Recurse -Force node_modules) y volviendo a instalar las bibliotecas (pnpm install y pnpm add -D @types/node vite).

## 13. ¿Cómo comprobaste que el repositorio puede ejecutarse en otro equipo?
- lo subi y le pedi a un compañero que lo clonara.

## 14. ¿Qué aprendizaje de esta actividad será necesario para continuar desarrollando GIFinder?
- Fundamentalmente aprendi que la plantilla vanilla de Ts es un buen punto de partida para crear aplicaciones y sistemas, antes de empezar con la implementacion de frameworks.

Fecha:04/09/2026