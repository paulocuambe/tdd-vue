<template>
  <div class="todo" data-testid="todoItem">
    <base-checkbox
      class="todo__checkbox"
      data-testid="todoCheckBox"
      v-model="todoItem.completed"
      @click="$emit('toggle')"
    />
    <p data-testid="todoText" class="todo__text" :class="{ through: todoItem.completed }">{{ todoItem.text }}</p>
    <button data-testid="todoDeleteBtn" class="todo__btn" @click="$emit('delete')">Delete</button>
  </div>
</template>

<script>
import BaseCheckbox from "@/components/base/BaseCheckbox.vue";
import { toRefs } from "vue";

export default {
  components: { BaseCheckbox },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },

  emits: ["toggle", "delete"],
  setup(props) {
    const { todo: todoItem } = toRefs(props);
    return {
      todoItem,
    };
  },
};
</script>

<style scoped>
.todo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #161615;
}

/* flex: [flex-grow] [flex-shrink] [flex-basis]; */
.todo__checkbox {
  margin-right: 1em;
}

.todo__text {
  flex: 1 1 auto;
}

.todo__btn {
  margin-left: 1em;
}
</style>
