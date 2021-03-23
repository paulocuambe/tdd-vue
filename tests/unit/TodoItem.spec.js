import { mount } from "@vue/test-utils";
import TodoItem from "@/components/todo/TodoItem.vue";

describe("TodoItem.vue", () => {
  it("should render todo.text when passed", async () => {
    const wrapper = mount(TodoItem, {
      props: {
        todo: {
          id: new Date().getTime(),
          text: "Learn testing with vue",
          completed: false,
        },
      },
    });

    expect(wrapper.text()).toContain("Learn testing with vue");
  });

  it("should mark completed todo", async () => {
    const wrapper = mount(TodoItem, {
      props: {
        todo: {
          id: new Date().getTime(),
          text: "Procrastinate to learn React",
          completed: true,
        },
      },
    });

    expect(wrapper.classes()).toContain("line-through");
  });
});
