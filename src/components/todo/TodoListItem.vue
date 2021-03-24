<template>
  <form @submit.prevent="handleSubmit()">
    <input type="text" name="new_todo" v-model="newTodo" />
    <button type="submit" @click.prevent="handleSubmit()" id="submitTodo">Add</button>
  </form>

  <div v-if="errors.length > 0" id="todoErrors">
    <p v-for="(error, index) in errors" :key="index">{{ error }}</p>
  </div>

  <div v-if="todos.length > 0">
    <todo-item v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>

  <h2 v-else class="todo-list__empty-message">Congrats. You've completed all your tasks.</h2>
</template>

<script>
import { reactive, toRefs } from "vue";

import TodoItem from "./TodoItem.vue";

export default {
  props: {
    todoList: {
      type: Array,
      require: true,
    },
  },
  components: { TodoItem },
  setup(props) {
    const state = reactive({
      newTodo: "",
      todos: props.todoList,
      errors: [],
    });

    const validateInput = () => {
      state.errors = [];
      if (state.todos.some((todo) => todo.text === state.newTodo)) {
        state.errors.push("That item is already on the list");
      }
      if (!state.newTodo) {
        state.errors.push("The field must not be empty");
      }
    };

    const handleSubmit = () => {
      validateInput();
      if (state.errors.length === 0) {
        state.todos.push({
          id: new Date().getTime(),
          text: state.newTodo,
          completed: false,
        });
        state.newTodo = "";
      }
    };

    return {
      ...toRefs(state),
      handleSubmit,
    };
  },
};
</script>
