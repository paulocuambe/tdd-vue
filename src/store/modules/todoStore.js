import * as mutationTypes from "../mutation-types";

const todoStore = {
  state: () => {
    return {
      todoList: [
        {
          id: new Date().getTime() + Math.round(Math.random() * 100),
          text: "Learn Vue",
          completed: false,
        },
      ],
    };
  },

  mutations: {
    [mutationTypes.ADD_TODO](state, todo) {
      state.todoList.push(todo);
    },

    [mutationTypes.ADD_MULTIPLE_TODOS](state, todos) {
      state.todoList.concat(todos);
    },

    [mutationTypes.TOGGLE_TODO](state, id) {
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },

    [mutationTypes.DELETE_TODO](state, id) {
      state.todoList = state.todoList.filter((todo) => todo.id !== id);
    },

    [mutationTypes.EMPTY_TODO_LIST](state) {
      state.todoList = [];
    },
  },

  actions: {},
};

export default todoStore;
