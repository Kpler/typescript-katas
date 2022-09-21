<template>
  <div class="cell" :class="{ 'unexplored': value === '.' }" @click="$emit('click')">
    <div v-if="value === '0'"></div>
    <div v-else-if="value === '*'" class="bomb">*</div>
    <div v-else-if="value === '.'" class="unexplored"></div>
    <div v-else :class="`cell-${value}`">{{ value }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MinesweeperCell",
  setup() {},
  props: {
    value: { type: String, required: true },
  },
});
</script>

<style lang="scss" scoped>
.cell {
  width: 30px;
  height: 30px;
  font-size: 24px;
  border-top: 1px solid grey;
  border-left: 1px solid grey;
  .bomb {
    color: red;
  }
  .cell-1 {
    color: blue;
  }
  .cell-2 {
    color: green;
  }
  .cell-3 {
    color: red;
  }
  .cell-4 {
    color: darkblue;
  }
  .cell-5 {
    color: rebeccapurple;
  }
  .cell-6 {
    color: teal;
  }
  .cell-7 {
    color: teal;
  }
  .cell-8 {
    color: black;
  }
}
.unexplored {
  background-color: rgb(200, 200, 200);
}

</style>
