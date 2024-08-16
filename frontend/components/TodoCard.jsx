/* eslint-disable react/prop-types */
// import "../src/assets/App.css";
import { createTodo } from "./front-controllers/createTodo";
import { useState, useEffect } from "react";
import { updateTodo } from "./front-controllers/updateTodo";



export default function TodoCard({ todo }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
      setEmail(todo.email);
    }
  }, [todo]);

  const handleTodo = () => {
    if (todo) {
      updateTodo(todo.id, { title, description, email });
    } else {
      createTodo({ title, description, email });
    }
    location.reload();
  };

  return (
    <div className="card">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button onClick={handleTodo}>{todo ? "Update" : "Add"}</button>
    </div>
  );
}
