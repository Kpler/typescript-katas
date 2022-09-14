<template>
  <div class="minesweeper-program">

    <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="row">
      <div v-for="(cell, cellIndex) in row" :key="cellIndex" class="cell">
        {{ cell }}
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
    const minesweeper = new Minesweeper(10, 10, [[0, 0]]);

    const grid = ref(minesweeper.getPlayerGrid());

    return {
      minesweeper,
      grid,
    };
  },
});
</script>

<style lang="scss" scoped>

.row {
  display: flex;
}

.cell {
  border: 1px solid red;
  width: 25px;
  height: 25px;
}

</style>
