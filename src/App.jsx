import "./App.css";
import AddTodo from "./components/Add_todo";
import TodoList from "./components/Todo_list";

function App() {
  return (
    <>
      <div>
        <h1>Simple Todo Application</h1>
        <AddTodo />
        <TodoList />
      </div>
    </>
  );
}

export default App;
