<template>
  <p :class="{ 'line-through': todo.completed }">{{ todo.text }}</p>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  setup() {},
};
</script>

<style scoped>
.line-through {
  text-decoration: line-through;
}
</style>
