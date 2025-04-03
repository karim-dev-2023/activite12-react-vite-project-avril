// Sélectionne toutes les tâches
export const selectTodos = (state) => state.todos;
// Sélectionne uniquement les tâches terminées
export const selectCompletedTodos = (state) =>
  state.todos.filter((todo) => todo.completed);
