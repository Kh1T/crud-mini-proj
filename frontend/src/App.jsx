// import { useState } from "react";
import "./App.css";
import TodoCard from "../components/todoCard";
import ListDisplay from "../components/ListDisplay";
import { useEffect, useState } from "react";
import { addTodo } from "../components/front-controllers/addTodo";
import { editTodo as editTodoUtil } from "../components/front-controllers/editTodo"; // Adjust the path as needed
import { removeTodoApi } from "../components/front-controllers/removeTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((response) => response.json())
      .then((data) => {
        if (data.todoAll && Array.isArray(data.todoAll)) {
          setTodos(data.todoAll);
        } else {
          console.error("Expected todoAll to be an array, but received:", data);
          setTodos([]);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

const removeTodo = async (id) => {
  try {
    await removeTodoApi(id); // Call the API to remove the todo
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id)); // Update the state without reloading the page
  } catch (error) {
    console.error(error);
  }
};

  const editTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setEditId(id);
      editTodoUtil();
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo List</h1>
      <TodoCard
        addTodo={addTodo}
        todo={todos.find((todo) => todo.id === editId)}
      />
      <br></br>
      <ListDisplay todos={todos} removeTodo={removeTodo} editTodo={editTodo} />
    </div>
  );
}
//
export default App;
