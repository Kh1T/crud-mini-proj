export default function ListDisplay({ title, desc, email }) {
  return (
    <div className="card">
      <p>{title}</p>
      <p>{desc}</p>
      <p>{email}</p>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}
