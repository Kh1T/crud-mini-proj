import "./App.css"
export default function ToDoCard() {
    return (
      <div className="card">
        <input placeholder="title" />
        <input placeholder="date" />
        <input placeholder="description" />
        <div>
        <button>Edit</button>
        <button>Delete</button>
        </div>
      </div>
    );
}