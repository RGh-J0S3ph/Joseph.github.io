# Pruebas de modelado y persistencia

## Entorno
- Rama: feature/modelo-tareas-mongodb
- Base: task_api
- Colección: tasks
- Resultado de pnpm check:
- Resultado de pnpm build:

## Documento comprobado
- id devuelto por la API:
- Campos observados en Atlas:
- Resultado después de reiniciar:

## Casos ejecutados
| Tipo | Método y ruta | Datos | Esperado | Obtenido | requestId | Resultado |
|---|---|---|---|---|---|---|
| Persistencia | POST /api/tasks | title válido | 201 | | | |
| Persistencia | GET /api/tasks | No aplica | 200 | | | |
| Negativa | GET /api/tasks/1 | No aplica | 400 INVALID_ID | | | |