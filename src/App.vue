<template>
    <Layout />
</template>

<script lang="ts">
import { ref } from 'vue'
import Layout from '@/components/Layouts/Layout.vue'

export default {
    name: 'App',
    components: { Layout },
    setup() {
        let isDark = ref<boolean>(true)
        return {
            isDark,
            Layout
        }
    }
}
</script>
