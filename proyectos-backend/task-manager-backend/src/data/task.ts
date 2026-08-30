import type {  Task  } from '../models/task.js';

export const tasks: Task[] = [
    {
        id: 1,
        title: 'Configurar proyecto backend',
        status: 'completed',
        createdAt: new Date(),
    },
    {
        id: 2,
        title: 'Practicar TypeScript',
        status: 'pending',
        createdAt: new Date(),
    },
    {
        id: 3,
        title: 'Aprender Node.js',
        status: 'pending',
        createdAt: new Date(),
    }
];