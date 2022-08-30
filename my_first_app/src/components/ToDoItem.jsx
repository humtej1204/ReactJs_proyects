import React from "react";

export function ToDoItem({ toDo_item, toggleToDo }) {
    const { id, task, completed } = toDo_item;

    const handleToDoClick = () => {
        toggleToDo(id)
    };

    return (
        <li>
            <input type="checkbox" checked={completed} onChange={handleToDoClick}/>{task}
        </li>
    );
}