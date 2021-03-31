<template>
  <div data-testid="todoItem">
    <input type="checkbox" data-testid="todoCheckBox" v-model="todoItem.completed" @click="$emit('toggle')" />
    <p data-testid="todoText" :class="{ 'through': todoItem.completed }">{{ todoItem.text }}</p>
    <button data-testid="todoDeleteBtn" @click="$emit('delete')">Delete</button>
  </div>
</template>

<script>
import { toRefs } from "vue";

export default {
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