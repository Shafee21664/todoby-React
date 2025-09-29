export default function getNextTodoId(todos) {
  if (todos.length === 0) {
    return 1;
  }

  const maxId = todos.reduce((maxId, todos) => Math.max(maxId, todos.id), 0);

  return maxId + 1;
}
