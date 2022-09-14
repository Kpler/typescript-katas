<template>
  <p>{{ game.toString() }}</p>
</template>

<script lang="ts">
import { Minesweeper } from "src/game/Minesweeper";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MinesweeperProgram",
  setup() {
    const mines: [number, number][] = [
      [1, 1],
      [3, 2],
      [5, 6],
    ];
    const game = new Minesweeper(8, 8, mines);

    return { game };
  },
});
</script>

<style lang="scss" scoped>
.minesweeper-program {
  padding: 2px;
  text-align: left;
}
</style>
