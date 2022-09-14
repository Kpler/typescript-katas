<template>
  <div>
    <template v-for="(row, rowIdx) in game.getPlayerGrid()">
      <template v-for="(cell, colIdx) in row">
        <CellComponent :key="[rowIdx, colIdx].toString()" :cell="cell" @click="alert('im clicked')"/>
      </template>
      </br>
    </template>
  </div>
</template>

<script lang="ts">
import { Minesweeper } from "src/game/Minesweeper";
import { defineComponent } from "vue";
import CellComponent from "src/components/CellComponent";

export default defineComponent({
  name: "MinesweeperProgram",
  components: {
    CellComponent,
  },
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
