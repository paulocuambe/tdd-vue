<template>
  <form @submit.prevent="handleSubmit()">
    <base-text-area data-testid="inputNewTodo" v-model:text="newTodo" rows="3" />
    <base-button class="todo-form__submit-btn" variant="primary" type="submit" data-testid="submitNewTodo">
      Add a new todo
    </base-button>
  </form>

  <div v-if="errors.length > 0" data-testid="inputNewTodoErrors">
    <p class="error__message" v-for="(error, index) in errors" :key="index">{ { error }}</p>
  </div>

  <div v-if="todos.length > 0">
    <todo-list-item
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle="handleToggleTodo(todo.id)"
      @delete="handleDeleteTodo(todo.id)"
    />
  </div>

  <completed-todo-state v-else data-testid="todoListEmptyMessage" class="error__component" />
</template>

<script>
import { reactive, toRefs } from "vue";

import CompletedTodoState from "@/components/state/CompletedTodoState.vue";
import BaseTextArea from "@/components/base/BaseTextArea.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import TodoListItem from "./TodoListItem.vue";

export default {
  components: { TodoListItem, BaseTextArea, BaseButton, CompletedTodoState },
  props: {
    todoList: {
      type: Array,
      require: true,
    },
  },
  setup(props) {
    const state = reactive({
      newTodo: "",
      todos: props.todoList,
      errors: [],
    });

    const validateInput = () => {
      state.errors = [];
      if (state.todos.some((todo) => todo.text === state.newTodo.trim())) {
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
          id: new Date().getTime() + Math.ceil(Math.random() * 100),
          text: state.newTodo.trim(),
          completed: false,
        });
        state.newTodo = "";
      }
    };

    const handleDeleteTodo = (id) => {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    };

    const handleToggleTodo = (id) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    };

    return {
      ...toRefs(state),
      handleSubmit,
      handleDeleteTodo,
      handleToggleTodo,
    };
  },
};
</script>

<style scoped>
.todo-form__submit-btn {
  margin-top: 0.5rem;
  width: 13rem;
}

.error__message {
  color: var(--color-red);
}

.error__component {
  margin-top: 4rem;
}
</style>
