<template>
  <todo-list :todo-list="todos" />
</template>

<script>
import TodoList from "@/components/todo/TodoList.vue";

export default {
  components: { TodoList },
  setup() {
    const todos = [
      {
        id: new Date().getTime() + Math.round(Math.random() * 100),
        text: "Learn Vue",
        completed: false,
      },
      {
        id: new Date().getTime() + Math.round(Math.random() * 100),
        text: "Procrastinate to learn React",
        completed: true,
      },
    ];

    return {
      todos,
    };
  },
};
</script>
