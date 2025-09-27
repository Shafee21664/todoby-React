import { useState } from "react";
import Todo from "./Todo";
import initioalTodos from "../../data/initialTodos";

export default function todoList() {
  const [todos, setTodos] = useState(initioalTodos);

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo todo={todo} />
          </li>
        ))}
      </ul>
    </>
  );
}
