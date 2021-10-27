<script setup lang="ts">
import FDButton from "@/components/UI/Button/index.vue";
</script>

<template>
  <div class="bg-gray-50 w-full card">
    <div class="max-w-screen-xl">
      <h2
        class="
          text-3xl
          font-extrabold
          leading-9
          tracking-tight
          text-gray-900
          sm:text-4xl sm:leading-10
        "
      >
        Hello FoodDash ! xD
        <br />
        <span class="text-indigo-600">Vite + Vue 3 + Tailwind CSS</span>
      </h2>
      <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">
        <div class="inline-flex rounded-md shadow">
          <router-link
            to="/about"
            class="
              inline-flex
              items-center
              justify-center
              px-5
              py-3
              text-base
              font-medium
              leading-6
              text-white
              transition
              duration-150
              ease-in-out
              bg-indigo-600
              border border-transparent
              rounded-md
              hover:bg-indigo-500
              focus:outline-none
            "
            >Next Page</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
