<template>
  <div class="cell" @click="$emit('click')">
    {{ value }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MinesweeperCell",
  setup() {},
  props: {
    value: { type: String, required: true },
  },
});
</script>

<style lang="scss" scoped>
.cell {
  width: 30px;
  height: 30px;
}
</style>
