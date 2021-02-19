export default {
  state: {
    todos: [],
  },
  actions: {},
  mutations: {
    addNewTodo(state, newTodo) {
      if (!newTodo) return;

      state.todos.unshift(newTodo);
      // this.saveTodo();
    },

    removeTodo(state, index) {
      state.todos.splice(index, 1);
    },

    // saveTodo(state) {
    //   let parsed = JSON.stringify(state.todos);
    //   localStorage.setItem('todos', parsed);
    // },
  },
  getters: {
    todos: (s) => s.todos
  }
}
