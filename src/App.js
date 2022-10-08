import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header/Header";
import TodoParent from "./Components/TodoParent/TodoParent";
import Footer from "./Components/Footer/Footer";
import AddTodo from "./Components/AddTodo/AddTodo";
import About from "./Components/About/About";

function App() {
    let initTodo;
    if (localStorage.getItem("todos") === null) {
        initTodo = [];
    } else {
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }
    const [todos, setTodo] = useState(initTodo);

    const deleteHandler = (todo) => {
        setTodo(todos.filter((t) => todo !== t));
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    const addTodo = (title, disc) => {
        let sno = todos.length === 0 ? 0 : todos[todos.length - 1].sno + 1;

        const userTodo = {
            sno: sno,
            title: title,
            discription: disc,
        };
        setTodo([...todos, userTodo]);
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="App">
            <Router>
                <Header title="MyTodoList" />

                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <>
                                <AddTodo addTodo={addTodo} />
                                <TodoParent
                                    todos={todos}
                                    onDelete={deleteHandler}
                                />
                            </>
                        }
                    ></Route>
                    <Route exact path="/about" element={<About />}></Route>
                </Routes>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
