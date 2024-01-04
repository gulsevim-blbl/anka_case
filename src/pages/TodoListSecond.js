import React, { useState, useEffect } from "react";
import Header from "../components/Layout/Header";
import "./TodolistSecond.css";

const TodoListSecond = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleInputChangeForIndex = (e, index) => {
    const newTodos = [...todos];
    newTodos[index] = e.target.value;
    setTodos(newTodos);
  };

  return (
    <div className="welcome-a">
      <Header />
      <div className="welcome-container">
        <div className="mb-3" style={{ display: "flex" }}>
          <input
            type="text"
            placeholder="Add ToDo..."
            className="wide-input"
            value={newTodo}
            onChange={handleInputChange}
          />
          <button onClick={handleAddTodo} className="wide-button">
            +
          </button>
        </div>

        {[1, 2, 3, 4].map((number, index) => (
          <div className="mb-3" key={number} style={{ display: "flex" }}>
            <input
              type="text"
              placeholder={`Todo - ${number}`}
              className="wide-input"
              value={todos[index] || ""}
              onChange={(e) => handleInputChangeForIndex(e, index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoListSecond;
