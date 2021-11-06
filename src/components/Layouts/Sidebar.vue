<template>
  <div
    class="static w-64 bg-white shadow-lg h-screen z-20 overflow-y-auto inset-0"
  >
    <div class="px-4 py-2 text-center">
      <span class="text-4xl font-bold text-orange">FooDASH</span>
    </div>
    <ul>
      <MenuItem :key="item.id" v-for="item in mockMenuItems" :item="item" />
    </ul>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { SideBarMenuItemType } from "../../types/Layouts";
import MenuItem from "@/components/Menu/MenuItem.vue";
export default {
  name: "Sidebar",
  components: { MenuItem },
  setup() {
    const mockMenuItems = ref<SideBarMenuItemType[]>([
      {
        id: 1,
        title: "Dashboard",
        icon: "dolar",
      },
      {
        id: 2,
        title: "Orders",
        icon: "tool",
      },
      {
        id: 3,
        title: "Employee",
        icon: "stack",
      },
    ]);

    return { mockMenuItems };
  },
};
</script>

<style></style>
