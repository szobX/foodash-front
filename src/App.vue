<template>
  <Layout></Layout>
</template>

<script lang="ts">
import { ref } from "vue";
import Layout from "@/Components/Layouts/Layout.vue";

export default {
  name: "App",
  components: { Layout },
  setup() {
    let isDark = ref<Boolean>(true);
    return {
      isDark,
      Layout,
    };
  },
};
</script>
