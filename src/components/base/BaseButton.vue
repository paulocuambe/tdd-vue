<template>
  <button class="btn" :class="[variant === 'primary' ? 'btn--primary' : 'btn--secondary']" :type="type">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "button",
      validator: (value) => {
        return value && ["submit", "button"].includes(value);
      },
    },
    variant: {
      type: String,
      default: "primary",
      validator: (value) => {
        return value && ["primary", "secondary"].includes(value);
      },
    },
  },
  setup() {},
};
</script>

<style scoped>
.btn {
  width: 100%;
  padding: 0.35rem 0.75rem;
  border: 2px solid var(--color-black);
}

.btn--primary,
.btn--secondary:hover {
  color: var(--color-white);
  background-color: var(--color-black);
}

.btn--secondary,
.btn--primary:hover {
  color: var(--color-black);
  background-color: var(--color-white);
}
</style>
