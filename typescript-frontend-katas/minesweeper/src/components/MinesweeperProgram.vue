<template>
  <div class="minesweeper-program">
    {{ game }}
    <div v-for="col in "></div>
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

<style lang="scss" scoped></style>
