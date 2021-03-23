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

    expect(wrapper.find(".line-through").exists()).toBe(true);
  });

  it("should emit toggle event when checkbox is clicked", async () => {
    const wrapper = mount(TodoItem, {
      props: {
        todo: {
          id: new Date().getTime(),
          text: "Procrastinate to learn React",
          completed: true,
        },
      },
    });

    wrapper.get('[type="checkbox"]').trigger("click");
    expect(wrapper.emitted("toggle")).toHaveLength(1);
  });

  it("should emit delete event when checkbox is clicked", async () => {
    const wrapper = mount(TodoItem, {
      props: {
        todo: {
          id: new Date().getTime(),
          text: "Procrastinate to learn React",
          completed: true,
        },
      },
    });

    wrapper.get("button").trigger("click");
    expect(wrapper.emitted("delete")).toHaveLength(1);
  });
});
