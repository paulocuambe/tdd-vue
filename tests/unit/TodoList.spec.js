import { mount } from "@vue/test-utils";
import TodoList from "@/components/todo/TodoList.vue";

describe("TodoList.vue", () => {
  it("renders a list of todos", () => {
    const wrapper = mount(TodoList, {
      props: {
        todoList: [
          { id: new Date().getTime(), text: "Item 1", completed: false },
          { id: new Date().getTime() + 1, text: "Item 2", completed: false },
          { id: new Date().getTime() + 2, text: "Item 3", completed: true },
        ],
      },
    });

    expect(wrapper.findAll("[data-testid='todoItem']")).toHaveLength(3);
  });

  it("renders notice message when todoList is empty", () => {
    const wrapper = mount(TodoList, {
      props: {
        todoList: [],
      },
    });

    expect(wrapper.find("[data-testid='todoListEmptyMessage']").text()).toContain(
      "Congrats. You've completed all your tasks."
    );
  });

  it("adds a new todo and cleans input", async () => {
    const wrapper = mount(TodoList, {
      props: {
        todoList: [],
      },
    });

    await wrapper.get("[data-testid='inputNewTodo']").setValue("Write a blog post");
    await wrapper.get("[data-testid='submitNewTodo']").trigger("click");

    expect(wrapper.get("[data-testid='inputNewTodo']").element.value).toBe("");
    expect(wrapper.findAll("[data-testid='todoItem']")).toHaveLength(1);
  });

  it("shows error message when adding empty to do", async () => {
    const wrapper = mount(TodoList, {
      props: {
        todoList: [],
      },
    });

    await wrapper.get("[data-testid='inputNewTodo']").setValue("");
    await wrapper.get("[data-testid='submitNewTodo']").trigger("click");

    expect(wrapper.find("[data-testid='inputNewTodoErrors']").text()).toContain("The field must not be empty");
    expect(wrapper.findAll("[data-testid='todoItem']")).toHaveLength(0);
  });

  it("shows error message when adding repeated to do", async () => {
    const wrapper = mount(TodoList, {
      props: {
        todoList: [],
      },
    });

    await wrapper.get("[data-testid='inputNewTodo']").setValue("Learn Vue");
    await wrapper.get("[data-testid='submitNewTodo']").trigger("click");

    await wrapper.get("[data-testid='inputNewTodo']").setValue("Learn Vue");
    await wrapper.get("[data-testid='submitNewTodo']").trigger("click");

    expect(wrapper.find("[data-testid='inputNewTodoErrors']").text()).toContain("That item is already on the list");
    expect(wrapper.findAll("[data-testid='todoItem']")).toHaveLength(1);
  });

  it("deletes todo", async () => {
    const wrapper = mount(TodoList, {
      props: {
        todoList: [],
      },
    });

    await wrapper.get("[data-testid='inputNewTodo']").setValue("Learn Vue");
    await wrapper.get("[data-testid='submitNewTodo']").trigger("click");
    expect(wrapper.findAll("[data-testid='todoItem']")).toHaveLength(1);

    await wrapper.find("[data-testid='todoDeleteBtn']").trigger("click");
    expect(wrapper.findAll("[data-testid='todoItem']")).toHaveLength(0);
  });

  it("deletes todo", async () => {
    const wrapper = mount(TodoList, {
      props: {
        todoList: [],
      },
    });

    await wrapper.get("[data-testid='inputNewTodo']").setValue("Learn Vue");
    await wrapper.get("[data-testid='submitNewTodo']").trigger("click");
    expect(wrapper.findAll("[data-testid='todoItem']")).toHaveLength(1);

    await wrapper.find("[data-testid='todoDeleteBtn']").trigger("click");
    expect(wrapper.findAll("[data-testid='todoItem']")).toHaveLength(0);
  });
});
