<template>
  <div class="minesweeper-program">
    <h2 v-if="gameStatus === Status.LOST" class="game-over">GAME OVER!</h2>
    <h2 v-if="gameStatus === Status.WIN" class="win">CONGRATS!</h2>

    <template>
      <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="row">
        <div v-for="(cell, cellIndex) in row" :key="cellIndex">
          <MinesweeperCell :value="cell" @click="play(rowIndex, cellIndex)" />
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { Minesweeper, GameOver, Win } from "src/game/Minesweeper";
import MinesweeperCell from "src/components/MinesweeperCell.vue";

enum Status {
  WIN,
  LOST,
  IN_PROGRESS,
}

export default defineComponent({
  name: "MinesweeperProgram",
  components: { MinesweeperCell },
  setup() {
    const game = new Minesweeper(10, 10, Minesweeper.generateMines(10, 10, 10));

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
