<template>
  <div>{{ todo.text }}</div>
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
