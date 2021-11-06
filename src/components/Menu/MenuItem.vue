<template>
  <li class="transition group sidebar-item">
    <a class="transition sidebar-link flex items-center pr-6 py-2 pl-4">
      <div class="transition sidebar-icon">
        <component
          :is="LocationIcon"
          fill="currentColor"
          class="transition svg"
        />
      </div>
      <div
        class="
          sidebar-item-text
          flex-1
          text-gray-500
          group-hover:text-org
          transition
          font-medium
        "
      >
        {{ item.title }}
      </div>
    </a>
  </li>
</template>

<script lang="ts">
  // import { SideBarMenuItemType } from "@/types/Layouts.ts";
  import LocationIcon from '@ICON/transport.svg?component'
  import FDIcon from 'FD/Icon/Index.vue'
  export default {
    name: 'MenuItem',
    components: { FDIcon, LocationIcon },
    props: {
      item: {
        type: Object,
        required: true,
      },
    },
    setup() {
      return {
        LocationIcon,
      }
    },
  }
</script>

<style>
  .svg {
    stroke: gray;
    width: 25px;
    height: 25px;
  }

  .sidebar-item {
    @apply px-5  w-full;
    cursor: pointer;
  }
  .sidebar-item:hover .sidebar-icon svg {
    stroke: theme('colors.white');
  }
  .sidebar-item:hover {
  }
  .sidebar-link {
    border-radius: theme('borderRadius.3xl');
  }
  .sidebar-item:hover .sidebar-link {
    background: theme('colors.orange.lighten');
  }
  .sidebar-item:hover .sidebar-icon {
    background: theme('colors.orange.DEFAULT');
    @apply shadow-lg;
  }
  .sidebar-item:hover .sidebar-item-text {
    transform: translateX(8px);
  }
  .sidebar-icon {
    @apply w-10 h-10 flex items-center justify-center  rounded-full mr-2;
  }
</style>
