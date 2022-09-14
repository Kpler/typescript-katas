<template>
  <div class="minesweeper-program">
    <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="row">
      <div v-for="(cell, cellIndex) in row" :key="cellIndex">
        <MinesweeperCell :value="cell" @click="play"/>
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
    const play = (rowIndex: number, cellIndex: number) => {

    }
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
</style>
