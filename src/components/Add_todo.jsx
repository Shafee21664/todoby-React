import { useState } from "react";

export default function addTodo({ onAddTodo }) {
  const [title, settitle] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Add task"
        value={title}
        onChange={(e) => settitle(e.target.value)}
      />
      <button
        onClick={() => {
          onAddTodo(title);
          settitle("");
        }}
      >
        Add
      </button>
    </>
  );
}
