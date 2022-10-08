import React from "react";
import "./todoItem.css";

export default function TodoItem(props) {
    return (
        <>
            <div className="card box">
                <div className="card-body">
                    <h2 className="card-title">{props.todo.title}</h2>
                    <p className="card-text">{props.todo.discription}</p>
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => {
                            props.deleteHandler(props.todo);
                        }}
                    >
                        delete
                    </button>
                </div>
            </div>
        </>
    );
}
