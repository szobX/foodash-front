<template>
  <Layout v-if="isAuth" />
  <router-view v-if="!isAuth" />
</template>

<script lang="ts">
  import Layout from '@/components/Layouts/Layout.vue'
  import { ref, onMounted, watch } from 'vue'
  import { useRoute } from 'vue-router'

  export default {
    name: 'App',
    components: { Layout },
    setup() {
      const route = useRoute()
      const isAuth = ref(true)
      watch(
        () => route.path,
        (newParam, prevCount) => {
          console.log(route.path)
          console.log(newParam.indexOf('auth'))
          isAuth.value = Boolean(newParam.indexOf('auth'))
        }
      )
      onMounted(() => {
        console.log('mounted')
        isAuth.value = Boolean(route.path.indexOf('auth'))
      })

      return {
        isAuth,
      }
    },
  }
</script>
