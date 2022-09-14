<template>
  <div class="minesweeper-program">
    <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="row">
      <div v-for="(cell, cellIndex) in row" :key="cellIndex" class="cell">
        <cell :value="cell" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { Minesweeper } from "src/game/Minesweeper";

export default defineComponent({
  name: "MinesweeperProgram",
  setup() {
    const game = new Minesweeper(10, 10, []);

    const grid = ref(game.getPlayerGrid());

    return { grid };
  },
});
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
.cell {
  width: 30px;
  height: 30px;
}
</style>
