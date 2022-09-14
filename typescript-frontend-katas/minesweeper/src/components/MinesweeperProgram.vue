<template>
  <div class="minesweeper-program">
    <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="row">
      <div
          v-for="(cell, cellIndex) in row"
          :key="cellIndex"
          class="cell"
          @click="onClick(rowIndex, cellIndex)"
      >
        {{ cell }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Minesweeper} from 'src/game/Minesweeper';
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'MinesweeperProgram',
  setup() {
    const minesweeper = new Minesweeper(10, 10, [
      [0, 1],
      [1, 0],
    ]);

    const grid = ref(minesweeper.getPlayerGrid());

    const onClick = (row: number, column: number) => {
      // console.log(row, column);
      grid.value = minesweeper.play(row, column);
    };

    return {
      minesweeper,
      grid,
      onClick,
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
