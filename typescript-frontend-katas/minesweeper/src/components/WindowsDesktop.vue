<template>
  <div class="windows-desktop">
    <div class="start-bar">
      <div class="start-button">
        <img src="~src/assets/windows-logo.png" />
        start
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WindowsDesktop",
  components: {},
  // setup() {},
});
</script>

<style lang="scss" scoped>
$medium-blue: #245edb;

.windows-desktop {
  height: 100vh;
  width: 100%;
  background-image: url("~src/assets/windows-xp.jpeg");
  background-size: cover;
  background-position: center;
  position: relative;
  .start-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    background: linear-gradient(
        to bottom,
        #{$medium-blue} 0%,
        #3f8cf3 9%,
        #{$medium-blue} 18%,
        #{$medium-blue} 92%,
        #333 100%
      )
      center/cover no-repeat;
    .start-button {
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
}
</style>
