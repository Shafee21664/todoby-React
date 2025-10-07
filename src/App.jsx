import { useState } from "react";
import "./App.css";
import AddTodo from "./components/Add_todo";
import TodoList from "./components/Todo_list";
import initioalTodos from "../data/initialTodos";
import getNextTodoId from "./Utils/getNextRidiid";

function App() {
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
      <div>
        <h1>Simple Todo Application</h1>
        <AddTodo onAddTodo={handelAddTodo} />
        <TodoList
          todos={todos}
          onChangeTodo={handleChangeTodo}
          onDeleteTodo={hendleDeleteTodo}
        />
      </div>
    </>
  );
}

export default App;
