<template>
  <button style="height: 40px; width: 40px" @click="onCellClick">
    {{ cell }}
  </button>
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
  setup: () => {
    const onCellClick = (event) => {
      $emit("click", event);
    };
    return { onCellClick };
  },
});
</script>

<style lang="scss" scoped>
.minesweeper-program {
  padding: 2px;
  text-align: left;
}
</style>
