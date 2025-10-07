import getNextTodoId from "../src/Utils/getNextRidiid";

export default function todoreReduce(todos, action) {
  switch (action.type) {
    case "change":
      return todos.map((t) => {
        if (t.id === action.todo.id) {
          return {
            ...t,
            title: action.todo.title,
            done: action.todo.done,
          };
        }
        return t;
      });

    case "add":
      return [
        ...todos,
        {
          id: getNextTodoId(todos),
          title: action.title,
          done: false,
        },
      ];

    case "delete":
      return todos.filter((todo) => todo.id !== action.id);

    default:
      throw new Error("No matching action");
  }
}
