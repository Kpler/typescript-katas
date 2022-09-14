<template>
  <div class="minesweeper-program">
    <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="row">
      <div v-for="(cell, cellIndex) in row" :key="cellIndex">
        <MinesweeperCell :value="cell" @click="play(rowIndex, cellIndex)"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { Minesweeper } from "src/game/Minesweeper";
import MinesweeperCell from "src/components/MinesweeperCell.vue";

export default defineComponent({
  name: "MinesweeperProgram",
  components: { MinesweeperCell },
  setup() {
    const game = new Minesweeper(10, 10, [[0, 1], [2, 1], [5, 5]]);

    const grid = ref(game.getPlayerGrid());

    const play = (rowIndex: number, cellIndex: number) => {
      try {
        grid.value = game.play(rowIndex, cellIndex)
      }
      catch (e) {

      }
    }

    return { grid, play };
  },
});
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
</style>
