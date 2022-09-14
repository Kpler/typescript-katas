<template>
  <div>
    <template v-for="row in game.getPlayerGrid()">
      <template v-for="cell in row">
        <span>I'm a cell</span>
      </template>
    </template>
  </div>
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
    const game = new Minesweeper(7, 8, mines);

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
