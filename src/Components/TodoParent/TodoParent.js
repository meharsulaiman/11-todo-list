import React from "react";
import "./TodoParent.css";

import TodoItem from "../TodoItem/TodoItem";

export default function TodoParent(props) {
    return (
        <div className="container">
            <h1>Todo List</h1>
            <div className="flexbox">
                {props.todos.length === 0 ? (
                    <h3 className="text-todo">No Todo Yet Add</h3>
                ) : (
                    props.todos.map((todo) => (
                        <TodoItem
                            todo={todo}
                            key={todo.sno}
                            deleteHandler={props.onDelete}
                        />
                    ))
                )}
            </div>
        </div>
    );
}
