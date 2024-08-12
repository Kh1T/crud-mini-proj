// import { useState } from "react";
import "./App.css";
import ToDoCard from "./todoCard";
import ListDisplay from "./ListDisplay";

const data = {
  title : 'Drink cafe',
  email : "kwqw@hotmail.com",
  desc : 'With Friends!'
}



function App() {
  return (
    <div>
      <h1>Todo list:</h1>
    <form />
      <ToDoCard />
      <ListDisplay
        title={data.title}
        desc={data.desc}
        email={data.email}
      />
    </div>
  );
}

export default App;
