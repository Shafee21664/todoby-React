import { useState } from "react";

export default function Todo({ todo }) {
  const [isEditing, setisEditing] = useState();

  const todoContent = isEditing ? (
    <>
      <input type="text" />
      <button>Save</button>
    </>
  ) : (
    <>
      {todo.title}
      <button onClick={() => setisEditing(true)}>Edit</button>
    </>
  );

  return (
    <>
      <input type="checkbox" checked={todo.done} />
      {todoContent}
      <button>Delete</button>
    </>
  );
}
