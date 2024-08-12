import "./App.css"
export default function ToDoCard() {
    return (
      <div className="card">
        <input placeholder="title" />
        <input placeholder="description" />
        <input placeholder="email" />
        <div>
          <button>Add</button>
        </div>
      </div>
    );
}