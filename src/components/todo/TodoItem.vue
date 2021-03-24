<template>
  <div class="todo">
    <input type="checkbox" v-model="todoItem.completed" @click="$emit('toggle')" />
    <p :class="{ 'line-through': todoItem.completed }">{{ todoItem.text }}</p>
    <button @click="$emit('delete')">Delete</button>
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

<style scoped>
.line-through {
  text-decoration: line-through;
}
</style>
