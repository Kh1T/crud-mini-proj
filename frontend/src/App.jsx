// import { useState } from "react";
import "./App.css";
import ToDoCard from "./todoCard";

function App() {
  return (
    <div>
      <h1>Todo list:</h1>
      <button>Add</button>
      <ToDoCard />
      <ToDoCard />
      
    </div>
  );
}

export default App;
