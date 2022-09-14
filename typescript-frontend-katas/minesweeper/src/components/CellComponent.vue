<template>
  <span>cell</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Cell } from "src/game/Minesweeper";

export default defineComponent({
  name: "CellComponent",
  props: {
    cell: {
      type: Cell,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.minesweeper-program {
  padding: 2px;
  text-align: left;
}
</style>
