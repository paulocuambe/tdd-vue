import { mount } from "@vue/test-utils";
import TodoListItem from "@/components/todo/TodoListItem.vue";

describe("TodoItem.vue", () => {
  it("should render todo.text when passed", async () => {
    const wrapper = mount(TodoListItem, {
      props: {
        todo: {
          id: new Date().getTime(),
          text: "Learn testing with vue",
          completed: false,
        },
      },
    });

    expect(wrapper.find("[data-testid='todoText']").text()).toContain("Learn testing with vue");
  });

  it("should mark completed todo", async () => {
    const wrapper = mount(TodoListItem, {
      props: {
        todo: {
          id: new Date().getTime(),
          text: "Procrastinate to learn React",
          completed: true,
        },
      },
    });

    expect(wrapper.find("[data-testid='todoText']").classes()).toContain("through");
  });

  it("should emit toggle event when checkbox is clicked", async () => {
    const wrapper = mount(TodoListItem, {
      props: {
        todo: {
          id: new Date().getTime(),
          text: "Procrastinate to learn React",
          completed: true,
        },
      },
    });

    wrapper.get('[data-testid="todoCheckBox"]').trigger("click");
    expect(wrapper.emitted("toggle")).toHaveLength(1);
  });

  it("should emit delete event when checkbox is clicked", async () => {
    const wrapper = mount(TodoListItem, {
      props: {
        todo: {
          id: new Date().getTime(),
          text: "Procrastinate to learn React",
          completed: true,
        },
      },
    });

    wrapper.get("[data-testid='todoDeleteBtn']").trigger("click");
    expect(wrapper.emitted("delete")).toHaveLength(1);
  });
});
