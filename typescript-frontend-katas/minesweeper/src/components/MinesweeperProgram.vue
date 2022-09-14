<template>
  <div class="minesweeper-program">
    <div v-for="row in grid" class="">
      <div v-for="cell in row" class="minesweeper-program__cell">
        <div class="cell">{{ cell }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { Minesweeper } from "../game/Minesweeper";

export default defineComponent({
  name: "MinesweeperProgram",
  setup() {
    const game = new Minesweeper(5, 5, [[0, 0]]);
    console.log(game);

    return {
      grid: game.getPlayerGrid(),
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
