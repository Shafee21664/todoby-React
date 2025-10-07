import { useReducer } from "react";
import "./App.css";
import AddTodo from "./components/Add_todo";
import TodoList from "./components/Todo_list";
import initioalTodos from "../data/initialTodos";
// import getNextTodoId from "./Utils/getNextRidiid";
import todoreReduce from "../reducers/todisReducers";

function App() {
  const [todos, dispatch] = useReducer(todoreReduce, initioalTodos);

  const handleChangeTodo = (todo) => {
    dispatch({
      type: "change",
      todo,
    });
    // chitkar
    // const changeTodos =
    // setTodos(changeTodos);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "delete",
      id,
    });
  };

  const handelAddTodo = (title) => {
    dispatch({
      type: "add",
      title,
    });
  };

  return (
    <>
      <div>
        <h1>Simple Todo Application</h1>
        <AddTodo onAddTodo={handelAddTodo} />
        <TodoList
          todos={todos}
          onChangeTodo={handleChangeTodo}
          onDeleteTodo={handleDeleteTodo}
        />
      </div>
    </>
  );
}

export default App;
