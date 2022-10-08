import React, { useState } from "react";

export default function AddTodo(props) {
    const [title, setTitle] = useState("");
    const [disc, setDisc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !disc) {
            alert("Title or Discription cannot be blank");
        } else {
            props.addTodo(title, disc);
            setTitle("");
            setDisc("");
        }
    };
    return (
        <>
            <button
                type="button"
                className="btn btn-primary my-5"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            >
                Add Todo
            </button>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={submit}>
                                <div className="mb-3">
                                    <label
                                        htmlFor="title"
                                        className="form-label"
                                    >
                                        Todo Item
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        aria-describedby="emailHelp"
                                        value={title}
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="discription"
                                        className="form-label"
                                    >
                                        Discription
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="discription"
                                        value={disc}
                                        onChange={(e) =>
                                            setDisc(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-success"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

/*
 */
