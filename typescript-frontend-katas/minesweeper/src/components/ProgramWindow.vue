<template>
  <div class="program-window">
    <div class="header">{{ title }}</div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProgramWindow",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.program-window {
  border: 2px solid var(--windows-blue);
  border-radius: 4px;
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-rows: auto 1fr;
  box-shadow: 2px 3px 5px 1px rgba(0, 0, 0, 0.4);
  .header {
    color: white;
    background: var(--windows-bar-gradient);
    font-weight: bold;
    padding: 2px 8px;
    text-align: left;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.4);
  }
  .content {
    background-color: var(--windows-grey);
  }
}
</style>
