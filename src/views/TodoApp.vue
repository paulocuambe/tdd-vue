<template>
  <todo-list :todo-list="[]" />
</template>

<script>
import TodoList from "@/components/todo/TodoListItem.vue";

export default {
  components: { TodoList },
  setup() {},
};
</script>
