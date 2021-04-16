import { createStore } from "vuex";
import todoStore from "./modules/todoStore.js";

export default createStore({
  modules: {
    todo: todoStore,
  },
});
