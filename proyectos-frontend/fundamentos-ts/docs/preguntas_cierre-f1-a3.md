# Preguntas de cierre - EC1 F2 A3

**Nombre: Jose Angel Cruz Manzo**
**Grupo: O1**

## 1. ¿Qué significa refactorizar una aplicación?
Significa hacer una restructuración de los modulos y componentes de la actividad.

## 2. ¿Por qué el proyecto se dividió en módulos?
Para mejorar la estructura general de proyecto y preparar el camino para el uso de frameworks

## 3. ¿Cuál es la responsabilidad de main.ts?
Ejecutar la aplicación

## 4. ¿Qué diferencias existen entre una interfaz, un tipo unión y una enumeración?
La interfaz define la estrucutra y propiedades de un objeto, un tipo unión define que un valor puede ser de uno o varios tipos posibles y una enumeración es una lista de valores constantes con nombre propio.

## 5. ¿Para qué se utiliza import type?
Se usa para importar solo las declaraciones de tipos desde otros archivos en el proyecto.

## 6. ¿Dónde se aplicaron la desestructuración, spread y rest?
La desestructuración se aplica en la colección de gif que recibe renderGifDetail, spread  rest se usan en "const [mainTag = "Sin etiqueta", ...secondaryTags] = tags;" para dividir los elementos tomar los "sobrantes" y los agrupa en un nuevo conjunto.

## 7. ¿Por qué searchGifs recibe la colección como parámetro?
Por que la collección es un Array completo y no es recomendable usar una variable global en la aplicación.

## 8. ¿Por qué findGifById puede devolver undefined?
Principalmete para evitar errores con Id's inexistentes en el sistema

## 9. ¿Qué función cumple data-gif-id?
Ser un identificador para cada uno de los Elementos en la colleción.

## 10. ¿Qué es la delegación de eventos?
Tecnica en el desarrollo web para "escuchar" los eventos, en lugar de hacer una alerta para todos los elementos hijos, se crea una alerta para el elemento padre.

## 11. ¿Por qué el estado Loading podría no observarse?
Actualmente la aplicación no hace uso de elementos externos para cargar la colección, por lo que esta alerta no suele verse.

## 12. ¿Qué dificultad se presentó durante la refactorización y cómo se resolvió?
En la construcción de la interfaz, ver detalle no funcionaba correctamente, se resolvio al identificar un error de escritura del Html, en vez de recibir Id recibia ID.