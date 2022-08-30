import React from "react";
import { ToDoItem } from './ToDoItem';

export function ToDoList({ toDo, toggleToDo }) {
    return (
    <ul>
        {toDo.map((toDo_item) => (
            <ToDoItem key={toDo_item.id} toDo_item={toDo_item} toggleToDo={toggleToDo} />
        ))}
    </ul>
    );
};