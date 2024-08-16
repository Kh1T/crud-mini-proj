// eslint-disable-next-line react/prop-types
export default function ListDisplay({ todos, removeTodo, editTodo }) {
  console.log(todos, "hi");
  // const todoArray = Object.values(todos).reverse();
  return (
    <ol>
      {todos.map(({ id, title, description, email }) => (
        <li
          key={id}
          id={id}
          style={{ listStyleType: "none", marginBottom: "10px" }}
        >
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{email}</p>
          <button onClick={() => editTodo(id)}>Edit</button>
          <button onClick={() => removeTodo(id)}>Remove</button>
        </li>
      ))}
    </ol>
  );
}
