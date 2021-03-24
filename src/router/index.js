import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import TodoApp from "@/views/TodoApp.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/todo-app",
    name: "TodoApp",
    component: TodoApp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
