import Todo from "./Todo";

export default function todoList({ todos, onChangeTodo, onDeleteTodo }) {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo
              todo={todo}
              onChangeTodo={onChangeTodo}
              onDeleteTodo={onDeleteTodo}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
