<template>
  <div class="new-list">
    <li class="new-list__content">
      👉 {{ todo }}
      <button class="button-remove" @click="$emit('remove')">&#10006;</button>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    todo: String,
  },
};
</script>

<style lang="scss" scoped>
.new-list {
  will-change: transform;
  transition: transform 450ms;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-family: Avenir, sans-serif;
    font-weight: 500;
    cursor: pointer;
  }

  &:hover {
    transition: transform 150ms;
    transform: translateX(10px);
  }
}

.button-remove {
  font-size: 14px;
  font-family: Avenir, sans-serif;
  background-color: transparent;
  color: #c44444;
  padding: 6px 10px;
  border-style: none;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 50px;
  border: 1px solid #c44444;
  outline: none;
  align-items: flex-end;
  margin-left: 15px;

  &.button-remove:hover {
    background-color: #b94242;
    color: #fff;
    transition: 0.1s linear;
  }
}
</style>
