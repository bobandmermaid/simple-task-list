export default {
  state: {
    todos: [],
  },
  actions: {},
  mutations: {
    addNewTodo(state, newTodo) {
      if (!newTodo) return;

      state.todos.push(newTodo);
    },

    removeTodo(state, index) {
      state.todos.splice(index, 1);
    },
  },
  getters: {
    todos: s => s.todos
  },
}
