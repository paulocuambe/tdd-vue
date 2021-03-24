import { mount } from "@vue/test-utils";
import TodoListItem from "@/components/todo/TodoListItem.vue";

describe("TodoList.vue", () => {
  it("renders a list of todos", () => {
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

  it("renders notice message when todoList is empty", () => {
    const wrapper = mount(TodoListItem, {
      props: {
        todoList: [],
      },
    });

    expect(wrapper.find(".todo-list__empty-message").text()).toContain("Congrats. You've completed all your tasks.");
  });

  it("adds a new todo and cleans input", async () => {
    const wrapper = mount(TodoListItem, {
      props: {
        todoList: [],
      },
    });

    await wrapper.get('[name="new_todo"]').setValue("Write a blog post");
    await wrapper.get("#submitTodo").trigger("click");

    expect(wrapper.get('[name="new_todo"]').element.value).toBe("");
    expect(wrapper.findAll(".todo")).toHaveLength(1);
  });

  it("shows error message when adding empty to do", async () => {
    const wrapper = mount(TodoListItem, {
      props: {
        todoList: [],
      },
    });

    await wrapper.get('[name="new_todo"]').setValue("");
    await wrapper.get("#submitTodo").trigger("click");

    expect(wrapper.find("#todoErrors").text()).toContain("The field must not be empty");
    expect(wrapper.findAll(".todo")).toHaveLength(0);
  });

  it("shows error message when adding repeated to do", async () => {
    const wrapper = mount(TodoListItem, {
      props: {
        todoList: [],
      },
    });

    await wrapper.get('[name="new_todo"]').setValue("Learn Vue");
    await wrapper.get("#submitTodo").trigger("click");

    await wrapper.get('[name="new_todo"]').setValue("Learn Vue");
    await wrapper.get("#submitTodo").trigger("click");

    expect(wrapper.find("#todoErrors").text()).toContain("That item is already on the list");
    expect(wrapper.findAll(".todo")).toHaveLength(1);
  });

  it("deletes todo", async () => {
    const wrapper = mount(TodoListItem, {
      props: {
        todoList: [],
      },
    });

    await wrapper.get('[name="new_todo"]').setValue("Learn Vue");
    await wrapper.get("#submitTodo").trigger("click");
    expect(wrapper.findAll(".todo")).toHaveLength(1);

    await wrapper.find(".btn--delete__todo").trigger("click");
    expect(wrapper.findAll(".todo")).toHaveLength(0);
  });

  it("deletes todo", async () => {
    const wrapper = mount(TodoListItem, {
      props: {
        todoList: [],
      },
    });

    await wrapper.get('[name="new_todo"]').setValue("Learn Vue");
    await wrapper.get("#submitTodo").trigger("click");
    expect(wrapper.findAll(".todo")).toHaveLength(1);

    await wrapper.find(".btn--delete__todo").trigger("click");
    expect(wrapper.findAll(".todo")).toHaveLength(0);
  });
});
