import { mount } from "@vue/test-utils";
import TodoListItem from "@/components/todo/TodoListItem.vue";

describe("TodoList.vue", () => {
  it("should render a list of todos", () => {
    const wrapper = mount(TodoListItem, {
      props: {
        todoList: [
          { id: new Date().getTime(), text: "Item 1", completed: false },
          { id: new Date().getTime() + 1, text: "Item 2", completed: false },
          { id: new Date().getTime() + 2, text: "Item 3", completed: true },
        ],
      },
    });

    expect(wrapper.findAll(".todo")).toHaveLength(3);
  });

  it("should render notice message when todoList is empty", () => {
    const wrapper = mount(TodoListItem, {
      props: {
        todoList: [],
      },
    });

    expect(wrapper.find(".todo-list__empty-message").text()).toContain("Congrats. You've completed all your tasks.");
  });
});
