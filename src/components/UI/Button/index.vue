<script lang="ts">
import { defineComponent, computed } from "vue";
import type { PropType } from "vue";
type FDButtonType = PropType<
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "secondary"
  | "default"
>;
type FDButtonTagType = PropType<"a" | "button">;
export default defineComponent({
  name: "FDButton",
  props: {
    tag: {
      type: String as FDButtonTagType,
      default: "button",
    },
    type: {
      type: String as FDButtonType,
      default: "default",
    },
  },
});
</script>

<template>
  <div>
    <component :is="tag" class="btn"><slot></slot></component>
  </div>
</template>

<style>
.btn {
  @apply border border-solid cursor-pointer transition px-4 py-2 mx-2 rounded font-medium text-sm
  focus:outline-none bg-orange text-white;
}
</style>
