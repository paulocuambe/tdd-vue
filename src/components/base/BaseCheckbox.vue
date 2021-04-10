<template>
  <input type="checkbox" :checked="modelValue" @change="$emit('update:modelValue', $event.target.checked)" />
</template>
<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  setup() {},
};
</script>
