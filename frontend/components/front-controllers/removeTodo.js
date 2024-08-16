// front-controllers/removeTodo.js
export async function removeTodoApi(id) {
  try {
    const response = await fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to remove todo.");
    }

    const result = await response.json();
    return result.message;
  } catch (error) {
    console.error("Error removing todo:", error);
    throw error;
  }
}
