import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import TodoList from "@/components/todo/TodoList.vue";
import { mutations } from "../../src/store/modules/todoStore";

function mockStore(state) {
  return createStore({
    modules: {
      todo: {
        state: () => state,
        mutations,
      },
    },
  });
}

function globalPlugins({ state }) {
  return {
    plugins: [mockStore(state)],
  };
}

describe("TodoList.vue", () => {
  it("renders a list of todos", () => {
    const wrapper = mount(TodoList, {
      global: globalPlugins({
        state: {
          todoList: [
            { id: new Date().getTime(), text: "Item 1", completed: false },
            { id: new Date().getTime() + 1, text: "Item 2", completed: false },
            { id: new Date().getTime() + 2, text: "Item 3", completed: true },
          ],
        },
      }),
    });

    expect(wrapper.findAll("[data-testid='todoItem']")).toHaveLength(3);
  });

  it("renders notice message when todoList is empty", () => {
    const wrapper = mount(TodoList, {
      global: globalPlugins({
        state: {
          todoList: [],
        },
      }),
    });

    expect(wrapper.find("[data-testid='todoListEmptyMessage']").text()).toContain(
      "Congrats. You've completed all your tasks."
    );
  });

  it("adds a new todo and cleans input", async () => {
    const wrapper = mount(TodoList, {
      global: globalPlugins({
        state: {
          todoList: [],
        },
      }),
    });

    const newTodo = wrapper.get("[data-testid='inputNewTodo']");

    await newTodo.setValue("Write a blog post");
    await wrapper.get("[data-testid='submitNewTodo']").trigger("submit");

    expect(newTodo.element.value).toBe("");
    expect(wrapper.findAll("[data-testid='todoItem']")).toHaveLength(1);
  });

  it("shows error message when adding empty to do", async () => {
    const wrapper = mount(TodoList, {
      global: globalPlugins({
        state: {
          todoList: [],
        },
      }),
    });

    await wrapper.get("[data-testid='inputNewTodo']").setValue("");
    await wrapper.get("[data-testid='submitNewTodo']").trigger("submit");

    expect(wrapper.find("[data-testid='inputNewTodoErrors']").text()).toContain("The field must not be empty");
    expect(wrapper.findAll("[data-testid='todoItem']")).toHaveLength(0);
  });

  it("shows error message when adding repeated to do", async () => {
    const wrapper = mount(TodoList, {
      global: globalPlugins({
        state: {
          todoList: [],
        },
      }),
    });

    const inputNewTodo = wrapper.get("[data-testid='inputNewTodo']");
    const btnSubmitNewTodo = wrapper.get("[data-testid='submitNewTodo']");

    await inputNewTodo.setValue("Learn Vue");
    await btnSubmitNewTodo.trigger("submit");

    await inputNewTodo.setValue("Learn Vue");
    await btnSubmitNewTodo.trigger("submit");

    expect(wrapper.find("[data-testid='inputNewTodoErrors']").text()).toContain("That item is already on the list");
    expect(wrapper.findAll("[data-testid='todoItem']")).toHaveLength(1);
  });

  it("deletes todo", async () => {
    const wrapper = mount(TodoList, {
      global: globalPlugins({
        state: {
          todoList: [],
        },
      }),
    });

    await wrapper.get("[data-testid='inputNewTodo']").setValue("Learn Vue");
    await wrapper.get("[data-testid='submitNewTodo']").trigger("submit");
    expect(wrapper.findAll("[data-testid='todoItem']")).toHaveLength(1);

    await wrapper.find("[data-testid='todoDeleteBtn']").trigger("click");
    expect(wrapper.findAll("[data-testid='todoItem']")).toHaveLength(0);
  });

  it("deletes todo", async () => {
    const wrapper = mount(TodoList, {
      global: globalPlugins({
        state: {
          todoList: [],
        },
      }),
    });

    await wrapper.get("[data-testid='inputNewTodo']").setValue("Learn Vue");
    await wrapper.get("[data-testid='submitNewTodo']").trigger("submit");
    expect(wrapper.findAll("[data-testid='todoItem']")).toHaveLength(1);

    await wrapper.find("[data-testid='todoDeleteBtn']").trigger("click");
    expect(wrapper.findAll("[data-testid='todoItem']")).toHaveLength(0);
  });
});
