import { useState } from "react";

export default function Todo({ todo, onChangeTodo, onDeleteTodo }) {
  const [isEditing, setisEditing] = useState(false);

  const todoContent = isEditing ? (
    <>
      <input
        type="text"
        value={todo.title}
        onChange={(e) =>
          onChangeTodo({
            id: todo.id,
            title: e.target.value,
            done: todo.done,
          })
        }
      />
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
