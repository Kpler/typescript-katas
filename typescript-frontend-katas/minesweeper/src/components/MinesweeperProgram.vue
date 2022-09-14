<template>
  <div class="minesweeper-program">
    <div v-for="(row, rowIndex) in grid" class="" :key="rowIndex">
      <div
        v-for="(cell, cellIndex) in row"
        class="minesweeper-program__cell"
        :key="`${rowIndex}-${cellIndex}`"
      >
        <div class="cell" @click="() => cellClick(rowIndex, cellIndex)">
          {{ cell }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { GameOver, Minesweeper, Win } from "../game/Minesweeper";

export default defineComponent({
  name: "MinesweeperProgram",
  setup() {
    const game = new Minesweeper(5, 5, [[0, 0]]);

    const grid = ref(game.getPlayerGrid());

    const cellClick = (row, col) => {
      try {
        game.play(row, col);
      } catch (err) {
        if (err instanceof Win) {
          console.error("You win!");
        } else if (err instanceof GameOver) {
          console.error("You loose!");
        } else {
          throw err;
        }
      } finally {
        grid.value = [...game.getPlayerGrid()];
      }
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
  border: 1px solid black;
  text-align: center;
}
.minesweeper-program__cell:hover {
  background-color: #ccc;
  cursor: pointer;
}
</style>
