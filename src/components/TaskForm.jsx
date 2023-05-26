import { useContext, useState } from "react";

import { TaskContext } from '../context/TaskContext'

export default function TaskForm() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const { createTask } = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title) {
            // Aquí este componente modifica el estado tasks del componente padre
            createTask({ title, description });
            setTitle('');
            setDescription('');
        }
    }

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
                <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
                <input placeholder="Titulo de la tarea" type="text"
                    value={title} autoFocus
                    className="bg-slate-300 p-3 w-full mb-2"
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />
                <textarea placeholder="Descripción de la tarea"
                    value={description}
                    className="bg-slate-300 p-3 w-full mb-2"
                    onChange={(e) => setDescription(e.target.value)}></textarea>
                <button type="submit" className="bg-indigo-500 px-3 py-1 text-white mx-auto">
                    Guardar
                </button>
            </form>
        </div>
    )
}