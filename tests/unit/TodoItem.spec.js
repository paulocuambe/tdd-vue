import { mount } from "@vue/test-utils";
import TodoItem from "@/components/todo/TodoItem.vue";

describe("TodoItem.vue", () => {
  it("It renders props.todo when passed", async () => {
    const wrapper = mount(TodoItem, {
      props: {
        todo: {
          id: "asa",
          text: "Learn testing with vue",
          completed: false,
        },
      },
    });

    expect(wrapper.text()).toContain("Learn testing with vue");
  });
});
