<template>
  <Layout v-if="isAuth" />
  <router-view v-if="!isAuth" />
</template>

<script lang="ts">
  import Layout from '@/components/Layouts/Layout.vue'

  export default {
    name: 'App',
    components: { Layout },
    setup() {
      return {
        isAuth: false,
      }
    },
  }
</script>
