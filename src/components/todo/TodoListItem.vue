<template>
  <div v-if="todoList.length > 0">
    <todo-item v-for="todo in todoList" :key="todo.id" :todo="todo" />
  </div>
  <h2 v-else class="todo-list__empty-message">Congrats. You've completed all your tasks.</h2>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  props: {
    todoList: {
      type: Array,
      require: true,
    },
  },
  components: { TodoItem },
  setup() {},
};
</script>
