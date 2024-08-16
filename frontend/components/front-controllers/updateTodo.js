export async function updateTodo(id, data) {
  const response = await fetch(`http://localhost:3000/todos/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to update todo.");
  }

  return resData.message;
}
