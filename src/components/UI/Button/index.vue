<script  lang="ts">
import { defineComponent, computed } from 'vue'
import type { PropType } from 'vue'
type FDButtonType = PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'secondary' | 'default'>
type FDButtonTagType =PropType<'a'|'button'>
export default defineComponent({
    name:'FDButton',
    props:{
        tag:{
            type:String as FDButtonTagType,
            default:'button',
        },
        type:{
        type: String as FDButtonType,
        default:'default'
        }
    },

})
</script>

<template>
<div :class="[]">
    
    <component :is="tag" class="btn">button</component>

</div>
</template>

<style >
.btn{
     @apply border border-solid cursor-pointer transition px-4 py-2 mx-2 rounded font-medium text-sm
  focus:outline-none bg-org text-white;
}
</style>