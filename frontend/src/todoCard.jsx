import "./App.css";
import { createUser } from "./createUser";
import { useState, useEffect } from "react";

export default function TodoCard({ addTodo, todo }) {
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

  const handleAddTodo = async () => {
    if (title.trim() && description.trim() && email.trim()) {
      const newTodo = { title, description, email };

      const response = await fetch('http://localhost:3000/todos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newTodo),
        });

      addTodo(newTodo);
      setTitle("");
      setDescription("");
      setEmail("");
    }
    createUser({ title, description, email });
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
      <button onClick={handleAddTodo}>{todo ? "Update" : "Add"}</button>
    </div>
  );
}
