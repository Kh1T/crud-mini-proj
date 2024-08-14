export async function createUser(data) {
  const response = await fetch("http://localhost:3000/todos", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to Update user data.");
  }

  return resData.message;
}
