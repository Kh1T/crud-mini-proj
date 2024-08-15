// import { useState } from "react";
import "./App.css";
import TodoCard from "./todoCard";
import ListDisplay from "./ListDisplay";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

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

async function addTodo(newTodo) {
  console.log("Adding todo:", newTodo); // Debug log

  try {
    const response = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    const result = await response.json();
    console.log("Result from server:", result); // Debug log

    if (response.ok) {
      if (editIndex !== null) {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = result.data.user;
        setTodos(updatedTodos);
        setEditIndex(null);
      } else {
        setTodos([...todos, result.data.user]);
      }
    } else {
      console.error("Failed to add todo:", result.error);
    }
  } catch (err) {
    console.error("Error adding todo:", err);
  }

}

  const removeTodo = async (index) => {
    try {
      const todoId = todos[index].id;
      const response = await fetch(`http://localhost:3000/todos/${todoId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        console.log(`deleted${todoId}`)
      }
    } catch (err) {
      console.log(err);
    }
  };

const editTodo = async (index) => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  const todoToEdit = todos[index];
  setEditIndex(index);

  try {
    const response = await fetch(
      `http://localhost:3000/todos/${todoToEdit.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todoToEdit),
      }
    );
    const result = await response.json();

    if (response.ok) {
      const updatedTodos = [...todos];
      updatedTodos[index] = result.data.getUser; // Update with the response data
      setTodos(updatedTodos);
      console.log(`edited on ${todoToEdit.id} `);
    } else {
      console.error("Failed to update todo:", result.error);
    }
  } catch (error) {
    console.error("Error updating todo:", error);
  }
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
// 
export default App;
