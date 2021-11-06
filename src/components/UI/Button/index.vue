<script lang="ts">
  // import { defineComponent, computed } from 'vue';
  import { PropType } from 'vue'
  import { FDButtonType } from './FDButtonType'

  type FDButtonTagType = PropType<'a' | 'button'>
  export default {
    name: 'FDButton',
    props: {
      tag: {
        type: String as FDButtonTagType,
        default: 'button',
      },
      type: {
        type: String as FDButtonType,
        default: 'default',
      },
    },
  }
</script>

<template>
  <div>
    <component :is="tag" class="btn"><slot /> </component>
  </div>
</template>

<style>
  .btn {
    @apply border border-solid cursor-pointer transition px-4 py-2 mx-2 rounded font-medium text-sm
  focus:outline-none bg-orange text-white;
  }
</style>
