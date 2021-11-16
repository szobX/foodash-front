<template>
  <Layout v-if="isAuth" />
  <router-view v-if="!isAuth" />
</template>

<script lang="ts">
  import Layout from '@/components/Layouts/Layout.vue'
  import { inject } from 'vue'

  export default {
    name: 'App',
    components: { Layout },
    setup() {
      const socket = inject('SignalRService')
      console.log(socket)
      return {
        isAuth: false,
      }
    },
  }
</script>
