<template>
  <div class="container">
    <div class="list">
      <h1 class="list__title" v-if="todos.length === 0">
        Список задач пуст...
      </h1>
      <ul class="list__ul" v-else>
        <li
          class="list__li"
          is="todo-item"
          v-for="(todo, index) in todos"
          :key="index"
          :todo="todo"
          v-on:remove="removeTodo(index)"
        ></li>
      </ul>
    </div>
    <form class="form" v-on:submit.prevent="addNewTodo">
      <label class="form__label" for="new-todo">Добавить задачу</label>
      <div class="form__input-content">
        <input
          class="form__input"
          v-model="newTodoText"
          :minlength="min"
          :maxlength="max"
          id="new-todo"
          type="text"
          placeholder="Например выучить JS"
          required
        />
        <button class="form__button">Добавить</button>
      </div>
    </form>
  </div>
</template>

<script>
import TodoItem from './TodoItem';

export default {
  components: {
    TodoItem,
  },
  data() {
    return {
      newTodoText: null,
      min: 3,
      max: 30,
      todos: [],
    };
  },
  mounted() {
    if (localStorage.getItem('todos')) {
      try {
        this.todos = JSON.parse(localStorage.getItem('todos'));
      } catch (error) {
        localStorage.removeItem(this.todos);
      }
    }
  },
  methods: {
    removeTodo(index) {
      this.todos.splice(index, 1);
      this.saveTodo();
    },
    addNewTodo() {
      if (!this.newTodoText) return;

      this.todos.push(this.newTodoText);
      this.newTodoText = '';
      this.saveTodo();
    },
    saveTodo() {
      let parsed = JSON.stringify(this.todos);
      localStorage.setItem('todos', parsed);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 120px;
  display: flex;
}

.list {
  margin-top: 50px;
  margin-right: 50px;

  &__title {
    font-size: 24px;
    font-weight: 200;
  }

  &__ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  &__li {
    display: block;
    font-size: 18px;
    margin-bottom: 8px;
  }
}

.form {
  border-left: 1px solid #d3d3d3;
  padding-left: 50px;

  &__label {
    display: block;
    font-size: 24px;
    color: #42b983;
    margin-bottom: 20px;
  }

  &__input {
    color: #2c3e50;
    font-size: 18px;
    display: block;
    width: 100%;
    padding: 10px 20px;
    border: 1px solid #d3d3d3;
    outline: none;
    appearance: none;
    border-radius: 50px;
    margin-bottom: 10px;

    &::placeholder {
      color: #b8b8b8;
    }

    &:focus {
      border: 1px solid #42b983;
    }
  }

  &__button {
    font-weight: 500;
    font-size: 18px;
    background-color: #42b983;
    color: #233241;
    padding: 11px 0;
    border-style: none;
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 50px;
    outline: none;
    width: 100%;
  }

  &__button:hover {
    background-color: #55eca8;
    transition: 0.1s linear;
  }

  &__button:active {
    background-color: #40b17e;
    transition: 0.1s linear;
  }
}
</style>
