<template>
  <div class="minesweeper-program">
    <div v-if="gameStatus === Status.LOST" class="message message--game-over">
      <span>GAME OVER</span>
    </div>
    <div v-else-if="gameStatus === Status.WON" class="message message--won">
      <span>Congratulations, you win</span>
    </div>

    <template v-else>
      <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="row">
        <MinesweeperCell
          v-for="(cell, cellIndex) in row"
          :key="cellIndex"
          :value="cell"
          class="minesweeper-cell"
          @click="play(rowIndex, cellIndex)"
        />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MinesweeperCell from "src/components/MinesweeperCell.vue";

import { GameOver, Minesweeper, Win } from "src/game/Minesweeper";

enum Status {
  WON,
  LOST,
  IN_PROGRESS,
}

export default defineComponent({
  name: "MinesweeperProgram",
  components: {
    MinesweeperCell,
  },
  setup() {
    const game = new Minesweeper(10, 10, [
      [1, 1],
      [2, 2],
    ]);
    const gameStatus = ref(Status.IN_PROGRESS);

    const grid = ref(game.getPlayerGrid());

    const play = (rowIndex: number, cellIndex: number) => {
      try {
        grid.value = game.play(rowIndex, cellIndex);
      } catch (e: unknown) {
        if (e instanceof GameOver) {
          gameStatus.value = Status.LOST;
        } else if (e instanceof Win) {
          gameStatus.value = Status.WON;
        } else {
          throw e;
        }
      }
    };

    return {
      grid,
      play,
      gameStatus,

      Status,
    };
  },
});
</script>

<style lang="scss" scoped>
$border-style: 1px solid #bab8b1;

.minesweeper-program {
  text-align: left;
  height: 100%;
  border-bottom: $border-style;
  border-left: $border-style;
  .row {
    display: flex;
    flex-direction: row;
  }
  .message {
    font-size: 40px;
    font-weight: 900;
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
    text-align: center;
    &--game-over {
      color: rgb(175, 0, 0);
    }
    &--won {
      color: green;
    }
  }
  .minesweeper-cell {
    border-top: $border-style;
    border-right: $border-style;
  }
}
</style>
