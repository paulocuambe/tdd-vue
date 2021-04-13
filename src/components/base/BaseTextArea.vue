<template>
  <textarea
    name=""
    cols="30"
    rows="4"
    :value="text"
    class="text-input"
    @input="$emit('update:text', $event.target.value)"
    placeholder="what you want to do next???"
  ></textarea>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  emits: ["update:text"],
  setup() {},
};
</script>

<style scoped>
.text-input {
  width: 100%;
  border: 2px solid var(--color-black);
  padding: 0.35rem 0.75rem;
}
</style>
