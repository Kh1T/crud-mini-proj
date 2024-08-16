export async function addTodo(newTodo) {
  console.log("Adding todo:", newTodo); // Debug log

  try {
    const response = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    const result = await response.json();
    console.log("Result from server:", result); // Debug log
  } catch (err) {
    console.error("Error adding todo:", err);
  }
}
