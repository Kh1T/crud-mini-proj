// import { useState } from "react";
import "./App.css";
import TodoCard from "./todoCard";
import ListDisplay from "./ListDisplay";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const addTodo = (newTodo) => {
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = newTodo;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, newTodo]);
    }
  };

  console.log(todos)

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setEditIndex(index);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo List</h1>
      <TodoCard addTodo={addTodo} todo={todos[editIndex]} />
      <br></br>
      <ListDisplay todos={todos} removeTodo={removeTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;
