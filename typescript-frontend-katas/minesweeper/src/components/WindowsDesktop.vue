<template>
  <div class="windows-desktop">
    <ProgramWindow title="Minesweeper" class="minesweeper-program-window">
      <MinesweeperProgram />
    </ProgramWindow>
    <TaskBar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskBar from "src/components/TaskBar.vue";
import ProgramWindow from "src/components/ProgramWindow.vue";
import MinesweeperProgram from "src/components/MinesweeperProgram.vue";

export default defineComponent({
  name: "WindowsDesktop",
  components: {
    TaskBar,
    ProgramWindow,
    MinesweeperProgram,
  },
});
</script>

<style lang="scss" scoped>
.windows-desktop {
  height: 100vh;
  width: 100%;
  background-image: url("~src/assets/windows-xp.jpeg");
  background-size: cover;
  background-position: center;
  position: relative;
  .minesweeper-program-window {
    width: 400px;
    height: 400px;
    position: absolute;
    top: 200px;
    left: 200px;
  }
}
</style>
