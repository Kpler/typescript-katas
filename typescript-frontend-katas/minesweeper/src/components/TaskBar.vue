<template>
  <div class="task-bar">
    <div class="start-button">
      <img src="~src/assets/windows-logo.png" />
      start
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TaskBar",
});
</script>

<style lang="scss" scoped>
.task-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: var(--windows-bar-gradient);
  .start-button {
    cursor: pointer;
    user-select: none;
    color: white;
    display: flex;
    width: 120px;
    height: 100%;
    font-style: italic;
    padding: 2px 15px 5px 15px;
    text-shadow: 1px 1px 1px #333;
    border-radius: 0px 10px 10px 0px;
    border: none;
    transform: skewX(-3deg);
    left: -5px;
    align-items: center;

    box-shadow: 0px 5px 10px #79ce71 inset;
    background: radial-gradient(circle, #5eac56 0%, #3c873c 100%) center/cover
      no-repeat;
    font-size: 24px;
    font-weight: bold;
    img {
      height: 22px;
      margin-right: 4px;
    }
  }
}
</style>
