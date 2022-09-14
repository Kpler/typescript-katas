<template>
  <div>
    {{ value }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Cell",
  setup() {},
  props: {
    value: { type: String, required: true },
  },
});
</script>

<style lang="scss" scoped>
</style>
