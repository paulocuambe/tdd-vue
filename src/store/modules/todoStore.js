import * as mutationTypes from "../mutation-types";

export const state = {
  todoList: [],
};

export const actions = {};

export const mutations = {
  [mutationTypes.ADD_TODO](state, todo) {
    state.todoList.push(todo);
  },

  [mutationTypes.ADD_MULTIPLE_TODOS](state, todos) {
    state.todoList.concat(todos);
    console.log("Add many" + state.todoList);
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
    console.table("EMPTY", state.todoList.length);
  },
};

const todoStore = {
  state: () => state,
  mutations,
  actions,
};

export default todoStore;
