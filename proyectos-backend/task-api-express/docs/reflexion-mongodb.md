
1. ¿Qué diferencia existe entre tu cuenta de Atlas y el usuario de base de datos?
La cuenta de atlas es el usuario ROOT o principal que administra y crea las bases de datos
y el usuario de BD solo tiene permisos para 1 base de datos.

2. ¿Por qué MONGODB_URI se considera un secreto aunque el repositorio sea privado?
Por que esta cadena contiene información sensible en su cadena

3. ¿Qué riesgo introduce permitir 0.0.0.0/0 en la lista de acceso?
Es lista de acceso permite el acceso a la base de datos a culquiera 

4. ¿Por qué la API espera connectDatabase antes de ejecutar app.listen?
Para confirmar la que conexión fue exitosa y sin errores

5. ¿Qué comprueba readyState y qué añade el comando ping?
Comprueba que el estado de conexión este listo y el comando ping es para confirmar la conectividad

6. ¿Por qué una falla de MongoDB corresponde a infraestructura y no a validación HTTP?
Por que esta falla es en la cadena de conexión de la base de datos.

7. ¿Cómo llega un AppError lanzado por getDatabaseHealth al manejador central en Express 5?
LLega como una "promesa rechazada" y toma el error en segundo plano sin "involucrarme" directamente.

8. ¿Qué pruebas demuestran que la incorporación de Atlas no rompió la API anterior?
Las pruebas positivas

9. ¿Por qué el arreglo en memoria se conserva todavía en esta actividad?
Por que las aplicaciones de Node.js se ejecutan como un proceso persistente en el servidor

10. ¿Qué información debe ocultarse al cliente cuando ocurre un error de conexión?
Nunca se debe exponer información técnica interna al cliente.