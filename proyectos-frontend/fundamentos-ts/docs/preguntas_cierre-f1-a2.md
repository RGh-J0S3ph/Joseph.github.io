# Preguntas de cierre - EC1 F1 A2

**Nombre: Jose Angel Cruz Manzo**
**Grupo: O1**

## 1. ¿Qué problema resuelve la interfaz Gif dentro del proyecto?
Resulve la problematica de una interfaz poco intuitiva.

## 2. ¿Qué diferencia existe entre una interfaz y un objeto literal?
La interfaz es un estructura de TypeScript con el objetivo de dar forma a un dato,
en cambio el objeto literal es una estructura de JavaScript que contine valores concretos
en memoria.

## 3. ¿Qué significa Gif[] y qué error evita en el arreglo local?
GIF[] es un arreglo y al declararlo como local se evitan errores criticos.

## 4. ¿Por qué username y description pueden declararse como propiedades opcionales?
Por que no siempre se puede obtener esta información en casos reales.

## 5. ¿En qué situación utilizarías let en lugar de const dentro de esta actividad?
Si quisera remplazar completamente el Array de GIFs.

## 6. ¿Qué reciben y qué devuelven normalizeText, searchGifs y createGifCard?
- normalizeText: Limpia el texto para que sea mas facil de compara.
- searchGifs: Con texto limpio de la función "normalizeText se hace una busqueda.
- createGifCard: Crea la tarjeta de presentación para los GIFs.

## 7. ¿Qué diferencia existe entre forEach, filter, map y find?
- forEach: Ejecuta una acción por cada elemento.
- filter: Filtra elementos que cumplan una condición.
- map: Trasnforma cada elemento del arreglo.
- find: Busca el primer elemento que cumpla una condición.

## 8. ¿Por qué find puede devolver undefined y cómo se controló ese resultado?
Puede llegar a enviar undefined si ningun elemento del array cumple con la condición, 
esto se controla con con condicionales para indicar el estado.

## 9. ¿Qué es un callback? Identifica dos callbacks presentes en tu solución.
Es una función que se pasa como argumento en otra con el objetivo de ser llamada mas tarde.
- Función searchGifs: El return hace un llamado a filter y retorna el nuevo array filtrado.
- Función renderGifs: Se pasa la función createGifCard al .map().


## 10. ¿Qué ventaja ofrecen las template strings al construir las tarjetas?
Ofrece una facilidad para integrar texto y logica.

## 11. ¿Para qué se utilizó la destructuración y el valor predeterminado de username?
Con la destructurización tags: ["cat", "programming", "funny"] se convierte en elementos sueltos
y se usa el valor predeterminado para evitar meter "undefined" al arreglo.

## 12. ¿Por qué querySelector puede devolver null y cómo se validaron los elementos?
Devuelve null cuando la busqueda en el arbol de DOM no devuelve nada.
En "if (!query) { return [...collection]; }" se hace una validación para que en caso de no 
encotrar los elementos, se devuelva la pantalla de collection.

## 13. ¿Qué función cumple preventDefault en el envío del formulario?
Evitar que la pagina de recargue constantemente al buscar GIFs.

## 14. ¿Cómo responde la aplicación cuando la búsqueda no obtiene coincidencias?
- Se muestra un mensaje para informar que no hay coincidencias.

## 15. ¿Qué cambiará cuando el arreglo local sea sustituido por datos de Giphy API?
- Ya no sera neceasrio depender de funciones para el filtrado.

## 16. ¿Qué error o dificultad encontraste y cómo comprobaste que quedó resuelto?
- No tuve problemas al resolver la actividad.
