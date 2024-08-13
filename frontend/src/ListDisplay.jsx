export default function ListDisplay({ todos, removeTodo, editTodo }) {
  return (
    <ol style={{ padding: 0, }}>
      {todos.map((todo, index) => (
        <li key={index}>
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
