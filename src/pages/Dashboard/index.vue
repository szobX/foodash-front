<template>
  <h1 class="text-orange text-3xl font-bold">Dashboard</h1>

  <div
    class="mt-4 mb-6 w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4"
  >
    <FDCard :no-header="false">
      <template #body>
        <div class="flex items-center">
          <div
            class="square rounded-full bg-org-100 w-16 h-16 mr-2 flex items-center justify-center text-orange bg-orange-100"
          >
            <BasketIcon class="stroke-current text-orange w-12 h-12" />
          </div>
          <div class="flex-shrink-0">
            <span class="text-5xl leading-none font-bold text-orange-dark"
              >56</span
            >
            <h3 class="text-base font-medium text-gray-500">Total menus</h3>
          </div>
          <div
            class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold"
          >
            14.6%
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </template>
    </FDCard>
    <FDCard :no-header="false">
      <template #body>
        <div class="flex items-center">
          <div
            class="square rounded-full bg-org-100 w-16 h-16 mr-2 flex items-center justify-center text-orange bg-orange-100"
          >
            <BasketIcon class="stroke-current text-orange w-12 h-12" />
          </div>
          <div class="flex-shrink-0">
            <span class="text-5xl leading-none font-bold text-orange-dark"
              >56</span
            >
            <h3 class="text-base font-medium text-gray-500">Total menus</h3>
          </div>
          <div
            class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold"
          >
            14.6%
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </template>
    </FDCard>
    <FDCard :no-header="false">
      <template #body>
        <div class="flex items-center">
          <div
            class="square rounded-full bg-org-100 w-16 h-16 mr-2 flex items-center justify-center text-orange bg-orange-100"
          >
            <BasketIcon class="stroke-current text-orange w-12 h-12" />
          </div>
          <div class="flex-shrink-0">
            <span class="text-5xl leading-none font-bold text-orange-dark"
              >56</span
            >
            <h3 class="text-base font-medium text-gray-500">Total menus</h3>
          </div>
          <div
            class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold"
          >
            14.6%
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </template>
    </FDCard>
    <FDCard :no-header="false">
      <template #body>
        <div class="flex items-center">
          <div
            class="square rounded-full bg-org-100 w-16 h-16 mr-2 flex items-center justify-center text-orange bg-orange-100"
          >
            <BasketIcon class="stroke-current text-orange w-12 h-12" />
          </div>
          <div class="flex-shrink-0">
            <span class="text-5xl leading-none font-bold text-orange-dark"
              >56</span
            >
            <h3 class="text-base font-medium text-gray-500">Total menus</h3>
          </div>
          <div
            class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold"
          >
            14.6%
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </template>
    </FDCard>
  </div>
  <FDCard>
    <template #header>
      <h2 class="text-xl font-semibold text-gray-500">Demo components</h2>
    </template>
    <template #body>
      <h1><RiTruckLine class="text-5xl fill-current" /></h1>
    </template>
  </FDCard>
</template>
<route lang="yaml">
meta:
  layout: default
  requiresAuth: true
</route>
<script lang="ts">
  import BasketIcon from '@ICON/transport.svg?component'

  import FDCard from '@/components/UI/Card/Card.vue'
  import RiTruckLine from '~icons/ri/truck-line'
  export default {
    components: { FDCard, BasketIcon, RiTruckLine },
    setup() {
      return {}
    },
  }
</script>
