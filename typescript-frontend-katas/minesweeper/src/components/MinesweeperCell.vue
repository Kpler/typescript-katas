<template>
  <div class="cell" @click="$emit('click')" :style="{color}">
    <template v-if="value !== '.' ">
      {{ value }}
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "MinesweeperCell",
  setup(props) {

    const color = computed(() => {
      if (props.value === "1") {
        return "blue";
      }
      if (props.value === "2") {
        return "green";
      } 
    });

    return {color};
  },
  props: {
    value: { type: String, required: true },
  },
});
</script>

<style lang="scss" scoped>
.cell {
  width: 30px;
  height: 30px;
  font-size: 20px;
  font-weight: 900;
  border-top: 1px solid grey;
  border-left: 1px solid grey;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
