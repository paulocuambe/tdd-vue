<template>
  <div class="todo-app">
    <form @submit.prevent="handleSubmit()">
      <base-text-area data-testid="inputNewTodo" v-model:text="newTodo" rows="3" />

      <div v-if="errors.length > 0" data-testid="inputNewTodoErrors">
        <p class="error__message" v-for="(error, index) in errors" :key="index">{{ error }}</p>
      </div>

      <base-button class="todo-form__submit-btn" variant="primary" type="submit" data-testid="submitNewTodo">
        Add a new todo
      </base-button>
    </form>

    <div v-if="todos.length > 0">
      <todo-list-item
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @toggle="handleToggleTodo(todo.id)"
        @delete="handleDeleteTodo(todo.id)"
      />
    </div>

    <completed-todo-state v-else data-testid="todoListEmptyMessage" class="state" />
  </div>
</template>

<script>
import { reactive, toRefs, watchEffect } from "vue";
import { useStore } from "vuex";

import * as mutationTypes from "../../store/mutation-types";

import CompletedTodoState from "@/components/state/CompletedTodoState.vue";
import BaseTextArea from "@/components/base/BaseTextArea.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import TodoListItem from "./TodoListItem.vue";

export default {
  components: { TodoListItem, BaseTextArea, BaseButton, CompletedTodoState },
  props: {
    todoList: {
      type: Array,
      default: () => [],
      require: false,
    },
  },

  setup(props) {
    const state = reactive({
      newTodo: "",
      todos: props.todoList,
      errors: [],
    });

    const store = useStore();
    if (state.todos.length > 0) {
      store.commit(mutationTypes.EMPTY_TODO_LIST);
      store.commit(mutationTypes.ADD_MULTIPLE_TODOS, state.todos);
    }

    watchEffect(() => {
      state.todos = store.state.todo.todoList;
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
        store.commit(mutationTypes.ADD_TODO, {
          id: new Date().getTime(),
          text: state.newTodo.trim(),
          completed: false,
        });

        state.newTodo = "";
      }
    };

    const handleDeleteTodo = (id) => {
      store.commit(mutationTypes.DELETE_TODO, id);
    };

    const handleToggleTodo = (id) => {
      store.commit(mutationTypes.TOGGLE_TODO, id);
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
.todo-app {
  width: 100%;
}

.todo-form__submit-btn {
  margin-top: 0.5rem;
  width: 100%;
}

.error__message {
  color: var(--color-red);
}

.state {
  margin-top: 4rem;
}

@media screen and (min-width: 600px) {
  .todo-form__submit-btn {
    width: 13rem;
  }
}
</style>
