import React, { Fragment, useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'
import { ToDoList } from './components/ToDoList';

export function App() {
    const [toDos, setToDos] = useState([
        {id: 1, task: "Tarea 1", completed: false},
        {id: 2, task: "Tarea 2", completed: false},
        {id: 3, task: "Tarea 3", completed: false},
    ]);

    const toDoTaskRef = useRef();

    /* Para que persistan los datos en el local storage del navegador
    (sin usar base de datos), para testear, se utiliza el Hook "useEffect" */
    /* Obtener la informacion en el LocalStorage del Navegador */
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('key'));
        if (storedTodos) {
            setToDos(storedTodos);
        }
    }, []);
    /* Guardar la informacion en el LocalStorage del Navegador */
    useEffect(() => {
        localStorage.setItem('key', JSON.stringify(toDos))
    }, [toDos]);

    const toggleToDo = (id) => {
        const newToDos = [...toDos];
        const toDo = newToDos.find((toDo) => toDo.id === id);
        toDo.completed = !toDo.completed;
        setToDos(newToDos);
    };

    const handleToDoAdd = () => {
        const task = toDoTaskRef.current.value;
        if (task === '') {return;};

        setToDos((prevToDos) => {
            return [...prevToDos, {id: uuidv4(), task}]
        });

        toDoTaskRef.current.value = null;
    };

    const handleClearAll = () => {
        const newToDos = toDos.filter((toDo) => !toDo.completed);
        setToDos(newToDos);
    };

    /* Usamos Fragment para pasar mas de un elemento
    HTML o componente Creado a la App */
    return (
        <Fragment>
            <ToDoList toDo={toDos} toggleToDo={toggleToDo} />
            <input ref={toDoTaskRef} type="text" placeholder="Nueva Tarea" />
            <button onClick={handleToDoAdd}>Añadir</button>
            <button onClick={handleClearAll}>Eliminar</button>
            <div>Te Quedan {toDos.filter((toDo) => !toDo.completed).length} tareas por terminar</div>
        </Fragment>
    );
};
