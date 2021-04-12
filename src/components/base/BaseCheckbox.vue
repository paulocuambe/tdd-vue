<template>
  <label class="checkbox" :for="id">
    <input
      type="checkbox"
      class="checkbox__input"
      :id="id"
      :data-testid="dataTestid"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />

    <svg v-if="modelValue" class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
      />
    </svg>

    <svg v-else class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
    </svg>
  </label>
</template>
<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    id: {
      type: [String, Number],
      default: () => Math.ceil(Math.random() * 10000),
    },
    dataTestid: {
      type: String,
      required: false,
    },
  },
  emits: ["update:modelValue"],
  setup() {},
};
</script>

<style scoped>
.checkbox,
.checkbox__input,
.checkbox__icon {
  width: var(--svg-size-md);
  height: var(--svg-size-md);
}

.checkbox__input {
  position: absolute;
  opacity: 0;
}

.checkbox__icon {
  fill: var(--color-black);
}
</style>
