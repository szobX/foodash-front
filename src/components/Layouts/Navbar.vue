<template>
  <nav class="main-navbar my-8 mr-8">
    <div class="flex items-center card p-4">
      <div></div>
      <div class="w-64" />

      <div class="ml-auto flex items-center">
        <div
          class="square rounded-3xl bg-orange-lighten w-12 h-12 mr-2 flex items-center justify-center text-org"
        >
          <BellIcon class="stroke-current text-orange w-8 h-8" />
        </div>
        <div
          class="square rounded-3xl bg-org-100 w-12 h-12 mr-2 flex items-center justify-center text-orange"
        >
          <BasketIcon class="stroke-current text-orange w-8 h-8" />
        </div>

        <div
          class="bg-orange-500 rounded-l-2xl pl-3 rounded-r-full flex items-center text-white"
        >
          <span> Hello </span>
          <img
            class="w-10 h-10 ml-3 border-white border-2 rounded-full"
            src="https://cdn4.iconfinder.com/data/icons/profession-avatar-5/64/11-cook-512.png"
            alt=""
          />
        </div>
        <div @click="logout">logout</div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
  import { useAuth } from '@/state/useAuth'
  import BellIcon from '@ICON/bell.svg?component'
  import BasketIcon from '@ICON/transport.svg?component'
  import { useRouter } from 'vue-router'

  export default {
    components: { BellIcon, BasketIcon },
    setup() {
      const { user, logoutUser } = useAuth()
      const router = useRouter()

      const logout = () => {
        logoutUser()
        router.push({ name: 'Auth', params: { action: 'login' } })
      }
      return {
        user,
        logout,
      }
    },
  }
</script>

<style>
  .main-navbar {
    position: fixed;
    top: 0;
    right: 0;
    width: calc(100vw - theme('width.64') - 4rem);
  }
</style>
