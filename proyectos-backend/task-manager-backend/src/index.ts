import { createTask, completeTask, listTasks, listPendingTasks, deleteTask } from './services/task.service.js';
import { delay } from './utils/delay.js';
import { getAppName } from './utils/env.js';

const showTasks = (): void => {
    const rows = listTasks().map((task) => ({
        id: task.id,
        title: task.title,
        status: task.status,
        createdAt: task.createdAt.toLocaleString(),
    }));
    console.table(rows);
};

const main = async (): Promise<void> => {
    console.log(`\n${getAppName()}`);
    console.log('Iniciando Aplicación...');
    await delay(300);
    console.log('\nTareas iniciales:');
    showTasks();

    const newTask = createTask('Construir mi primer servicio');
    console.log(`\nTarea creada con id: ${newTask.id}`);
    
    console.log('\nEstado final:');

    try{
        completeTask(999);
    } catch (error: unknown) {
        const message = error instanceof Error 
            ? error.message 
            : 'Ocurrio un error desconocido.';
        console.error(`Error controlado: ${message}`);
    }

    const pendingTasks = listPendingTasks();
    console.log(`\nTareas pendientes: ${pendingTasks.length}`);

    try {
        const deletedTask = deleteTask(3);
        console.log(`\nTarea eliminada: ${deletedTask.title}`);
    } catch (error: unknown) {
        const message = error instanceof Error 
            ? error.message 
            : 'Ocurrio un error desconocido.';
        console.error(`Error controlado: ${message}`);
    }
};

main().catch((error: unknown) => {
    console.error('Error no controlado:', error);
    process.exitCode = 1;
});