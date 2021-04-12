<template>
  <button
    class="btn"
    :type="type"
    :style="btnSize"
    :class="[variant === 'primary' ? 'btn--primary' : 'btn--secondary']"
  >
    <slot></slot>
  </button>
</template>

<script>
import { computed } from "vue";

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
      default: "secondary",
      validator: (value) => {
        return value && ["primary", "secondary"].includes(value);
      },
    },
    size: {
      type: String,
      default: "md",
      validator: (value) => {
        return ["xs", "sm", "md", "lg", "xl"].includes(value);
      },
    },
  },

  setup(props) {
    function getSize(size) {
      switch (size) {
        case "xs":
          return "xs";
        case "sm":
          return "sm";
        case "md":
          return "h6";
        case "lg":
          return "h5";
        case "xl":
          return "h4";
        case "2xl":
          return "h3";
        default:
          return "md";
      }
    }
    let btnSize = computed(() => `font-size: var(--text-${getSize(props.size)})`);

    return {
      btnSize,
    };
  },
};
</script>

<style scoped>
.btn {
  width: 100%;
  padding: 0.35rem 0.75rem;
  text-align: center;
  font-size: var(--text-h5);
  font-weight: 600;
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
