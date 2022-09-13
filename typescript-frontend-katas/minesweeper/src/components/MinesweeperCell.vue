<template>
  <div
    class="cell"
    :class="{ revealed: value !== '*' && value !== '.' }"
    :style="{ color }"
    @click="$emit('click')"
  >
    <template v-if="value === '*'">*</template>
    <template v-else-if="value !== '.' && value !== '0'">{{ value }}</template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "MinesweeperCell",
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const color = computed(() => {
      if (props.value === "1") {
        return "blue";
      } else if (props.value === "2") {
        return "green";
      } else if (props.value === "3") {
        return "red";
      }
      return "black";
    });

    return { color };
  },
});
</script>

<style lang="scss" scoped>
.cell {
  font-size: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  background-color: var(--windows-grey-dark);
  &:not(.revealed) {
    box-shadow: inset 3px 3px 0px 0px rgba(255, 255, 255, 0.3),
      inset -3px -3px 0px 0px rgba(0, 0, 0, 0.3);
    background-color: var(--windows-grey);
  }
}
</style>
