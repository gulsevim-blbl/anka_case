// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodolistFirst from "./pages/TodoListFirst";
import TodolistSecond from "./pages/TodoListSecond";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodolistFirst />} />
        <Route path="/todolistsecond" element={<TodolistSecond />} />
      </Routes>
    </Router>
  );
}

export default App;
