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
}

.btn--primary,
.btn--secondary:hover {
  color: white;
  background-color: #212529;
}

.btn--secondary,
.btn--primary:hover {
  color: #212529;
  background-color: #ced4da;
}
</style>
