<script lang="ts">
import Preloader from "@/components/Layouts/Preloader.vue";
import { onMounted } from "vue";
import Sidebar from "@/components/Layouts/Sidebar.vue";
import Navbar from "@/components/Layouts/Navbar.vue";

export default {
  name: "Layout",
  components: { Preloader, Sidebar, Navbar },
  setup() {
    onMounted(() => {
      console.log("mounted");
    });
  },
};
</script>

<template>
  <div class="flex h-screen w-screen bg-gray-100 font-sans">
    <Preloader />
    <Sidebar />
    <Navbar />

    <div class="main flex flex-1 flex-col pt-32 mx-8">
      <router-view />
    </div>
  </div>
</template>
