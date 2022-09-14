<template>
  <div class="minesweeper-program">
    <!-- Add the minefield here -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { Minesweeper } from "src/game/Minesweeper";

export default defineComponent({
  name: "MinesweeperProgram",
  setup() {
    game = new Minesweeper(5,5, [])
  },
});
</script>

<style lang="scss" scoped>
</style>
