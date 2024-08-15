import React from "react";

export default function ListDisplay({ todos, removeTodo, editTodo }) {
  const todoArray = Object.values(todos);
  return (
    <ol style={{ padding: 0 }}>
      {todoArray.map((todo, index) => (
        <li key={index} id={todo.id} style={{ listStyleType: "none", marginBottom: "10px" }}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <p>{todo.email}</p>
          <button onClick={() => editTodo(index)}>Edit</button>
          <button onClick={() => removeTodo(index)}>Remove</button>
        </li>
      ))}
    </ol>
  );
}
