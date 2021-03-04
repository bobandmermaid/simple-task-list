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
          :index="index"
          :todo="todo"
        ></li>
      </ul>
    </div>
    <form class="form" @submit.prevent="submit">
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
        <button type="submit" class="form__button">Добавить</button>
      </div>
    </form>
  </div>
</template>

<script>
import TodoItem from './TodoItem';
import { mapMutations, mapGetters } from 'vuex';

export default {
  components: {
    TodoItem,
  },
  data() {
    return {
      newTodoText: null,
      min: 3,
      max: 30,
    };
  },
  computed: {
    ...mapGetters(['todos'])
  },
  methods: {
    ...mapMutations(['addNewTodo']),

    submit() {
      this.addNewTodo(
        this.newTodoText
      )
      this.newTodoText = '';
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
    margin-bottom: 10px;
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
    border: 1px solid #dfdfdf;
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
    font-family: Avenir, sans-serif;
    font-size: 18px;
    background-color: #42b983;
    color: #fff;
    padding: 11px 0;
    border-style: none;
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 50px;
    outline: none;
    width: 100%;

    &:hover {
      background-color: #55eca8;
      color: #233241;
      transition: 0.1s linear;
    }

    &:active {
      background-color: #40b17e;
      color: #233241;
      transition: 0.1s linear;
    }
  }
}
</style>
