# Pruebas de consultas de tareas

## Entorno

- Rama: feature/consultas-paginadas
- Base: task_api
- Colección: tasks
- Resultado de pnpm check:
- Resultado de pnpm build:

Página 25

## Datos preparados

- Total de tareas:
- Tareas pending:
- Tareas completed:

## Casos ejecutados

| Tipo      | Método y ruta                   | Esperado | Obtenido | requestId | Resultado |
| --------- | ------------------------------- | -------: | -------: | --------- | --------- |
| Positiva  | GET /api/tasks?page=1&limit=2   |      200 |          |           |           |
| Positiva  | GET /api/tasks?status=completed |      200 |          |           |           |
| Positiva  | GET /api/tasks?search=api       |      200 |          |           |           |
| Negativa  | GET /api/tasks?page=0           |      422 |          |           |           |
| Negativa  | GET /api/tasks?sortBy=priority  |      422 |          |           |           |
| Negativa  | GET /api/tasks?owner=ana        |      422 |          |           |           |
| Regresión | PATCH /api/tasks/:id/complete   |      200 |          |           |           |

## Evidencias

1. Compilación correcta.
2. Dos páginas sin documentos repetidos.
3. Filtro y búsqueda combinados.
4. Orden ascendente y descendente.
5. Error 422 con details y requestId.
6. CRUD heredado completo.
7. Persistencia después de reiniciar.
