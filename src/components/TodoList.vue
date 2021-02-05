<template>
  <div class="container">
    <div class="list">
      <ul class="list__ul">
        <li
          class="list__li"
          is="todo-item"
          v-for="(todo, index) in todos"
          :key="index.id"
          :message="todo.message"
          v-on:remove="removeElement(index)"
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
      newTodoText: '',
      min: 3,
      max: 30,
      todos: [
        {
          id: 1,
          message: 'Погулять с собакой',
        },
        {
          id: 2,
          message: 'Прочитать документацию Vue',
        },
        {
          id: 3,
          message: 'Написать ToDo список',
        },
      ],
      nextTodoId: 4,
    };
  },
  methods: {
    addNewTodo() {
      this.todos.push({
        id: this.nextTodoId++,
        message: this.newTodoText,
      });
      this.newTodoText = '';
    },

    removeElement(index) {
      this.todos.splice(index, 1);
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
  margin-right: 100px;

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
    padding: 10px;
    border: 1px solid rgb(211, 211, 211);
    outline: none;
    appearance: none;
    border-radius: 50px;
    margin-bottom: 10px;

    &::placeholder {
      color: rgb(184, 184, 184);
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
    padding: 10px 0;
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
