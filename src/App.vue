<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    TodoList,
  },
};
</script>

<style>

#app {
  font-family: Avenir, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1440px;
  box-sizing: border-box;
  color: #2c3e50;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
