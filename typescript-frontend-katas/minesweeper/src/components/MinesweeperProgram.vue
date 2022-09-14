<template>
  <div class="minesweeper-program">
    <div v-for="(row, rowIndex) in grid" class="" :key="rowIndex">
      <div
        v-for="(cell, cellIndex) in row"
        class="minesweeper-program__cell"
        :key="cellIndex"
      >
        <div class="cell" @click="cellClick(rowIndex, cellIndex)">
          {{ cell }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { Minesweeper } from "../game/Minesweeper";

export default defineComponent({
  name: "MinesweeperProgram",
  setup() {
    const game = new Minesweeper(5, 5, [[0, 0]]);
    console.log(game);

    const grid = ref(game.getPlayerGrid());

    const cellClick = (row, col) => {
      console.log(row, col);
      game.play(row, col);
      grid.value = game.getPlayerGrid();
    };

    return {
      grid,
      cellClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.minesweeper-program {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
.minesweeper-program__cell {
  width: 100%;
  height: auto;
  border: 1px solid black;
  text-align: center;
}
.minesweeper-program__cell:hover {
  background-color: #ccc;
  cursor: pointer;
}
</style>
