import { useState } from "react";
import Todo from "./Todo";
import initioalTodos from "../../data/initialTodos";
import getNextTodoId from "../Utils/getNextRidiid";

export default function todoList() {
  const [todos, setTodos] = useState(initioalTodos);

  const handleChangeTodo = (todo) => {
    const changeTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return {
          ...t,
          title: todo.title,
          done: todo.done,
        };
      }
      return t;
    });

    setTodos(changeTodos);
  };

  const hendleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handelAddTodo = (title) => {
    setTodos([
      ...todos,
      {
        id: getNextTodoId(todos),
        title,
        done: false,
      },
    ]);
  };

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo
              todo={todo}
              onChangeTodo={handleChangeTodo}
              onDeleteTodo={hendleDeleteTodo}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
