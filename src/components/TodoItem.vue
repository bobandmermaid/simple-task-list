<template>
  <div>
    <li class="new-list">
      👉 {{ message }}
      <button class="button-remove" @click="$emit('remove')">Удалить</button>
    </li>
  </div>
</template>

<script>
export default {
  props: ['message'],
};
</script>

<style lang="scss" scoped>
.new-list {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.button-remove {
  font-size: 14px;
  font-weight: 500;
  background-color: #b94242;
  color: #fff;
  padding: 5px 10px;
  border-style: none;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 50px;
  outline: none;
  align-items: flex-end;
  margin-left: 10px;

  &.button-remove:hover {
    background-color: #ec5555;
    transition: 0.1s linear;
  }

  &.button-remove:active {
    background-color: #b14040;
    transition: 0.1s linear;
  }
}
</style>
