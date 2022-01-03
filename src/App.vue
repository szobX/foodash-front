<template>
  <router-view />
  <Loader />
</template>

<script lang="ts">
  import Loader from '@/components/UI/Loader.vue'

  export default {
    name: 'App',
    components: { Loader },
    setup() {
      return {}
    },
  }
</script>
