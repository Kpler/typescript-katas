<template>
  <div class="minesweeper-program">
    <h2 v-if="gameStatus === Status.LOST" class="game-over">GAME OVER!</h2>
    <h2 v-else-if="gameStatus === Status.WIN" class="win">CONGRATS!</h2>

    <template v-else>
      <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="row">
        <div v-for="(cell, cellIndex) in row" :key="cellIndex">
          <MinesweeperCell :value="cell" @click="play(rowIndex, cellIndex)" />
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import MinesweeperCell from 'src/components/MinesweeperCell.vue';
import { GameOver, Minesweeper, Win } from 'src/game/Minesweeper';

enum Status {
  WIN,
  LOST,
  IN_PROGRESS,
}

export default defineComponent({
  name: 'MinesweeperProgram',
  components: { MinesweeperCell },
  setup() {
    const rows = 10;
    const columns = 10;
    const minesNumber = 5;

    const generateMine = (rows: number, columns: number): [number, number] => {
      return [4, 4];
    };

    const generateMines = (
      rows: number,
      columns: number,
      minesNumber: number
    ): [number, number][] => {
      return [];
    };

    const game = new Minesweeper(rows, columns, [
      [0, 1],
      [2, 1],
      [5, 5],
    ]);

    const grid = ref(game.getPlayerGrid());
    const gameStatus = ref(Status.IN_PROGRESS);

    const play = (rowIndex: number, cellIndex: number) => {
      try {
        grid.value = game.play(rowIndex, cellIndex);
      } catch (e: unknown) {
        if (e instanceof GameOver) {
          gameStatus.value = Status.LOST;
        } else if (e instanceof Win) {
          gameStatus.value = Status.WIN;
        } else {
          throw e;
        }
      }
    };

    return { grid, gameStatus, play, Status };
  },
});
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
.game-over {
  color: red;
}
.win {
  color: green;
}
</style>
