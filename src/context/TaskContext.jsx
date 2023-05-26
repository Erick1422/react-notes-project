// Este componente permite que otros componentes accedan al mismo contexto, sin tener que pasarlo del padre a los hijos
import { createContext, useState, useEffect } from 'react'

import { tasks as data } from "../data/tasksdb";

// Nombre del contexto
export const TaskContext = createContext();

// Componente que engloba a todos los demás
export function TaskContextProvider({ children }) {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(data); // Al cargar el componente asigna las tareas existentes
    }, []);

    const createTask = ({ title, description }) => {
        setTasks([...tasks, {
            id: tasks.length + 1,
            title,
            description
        }]);
    }

    const deleteTask = (id) => {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
    }

    // Con value se "exportan" todas las funciones/valores
    return (
        <TaskContext.Provider value={{
            tasks, createTask, deleteTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}