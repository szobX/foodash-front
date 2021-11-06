<template>
  <div class="flex h-screen">
    <div class="w-1/3 h-screen bg-orange p-8 flex flex-col">
      <div class="">
        <span class="text-white font-bold text-5xl">FooDash</span>
      </div>
      <div class="mt-auto">
        <h4>Check the status</h4>
        <p class="text-white text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, nemo
          assumenda debitis deserunt totam placeat veritatis ab atque eveniet
          obcaecati fuga aperiam inventore eaque blanditiis ut reiciendis quae
          dolore omnis.
        </p>
        <h5>Privacy policy @2021 Foodash Team</h5>
      </div>
    </div>
    <div class="w-2/3 h-screen bg-gray-100 flex">
      <div class="flex flex-col m-auto">
        <h3 class="text-orange text-2xl">Welcome!</h3>
        <p class="text-black">Sign in by entering information below</p>
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import * as signalR from '@microsoft/signalr'
  import LoginForm from '@/components/Auth/LoginForm.vue'
  import axios from 'axios'
  export default {
    name: 'AuthView',
    components: { LoginForm },
    setup() {
      const connection = new signalR.HubConnectionBuilder()
        .withUrl('https://webapi-trpt76vlgq-ey.a.run.app/ws/notifications')
        .configureLogging(signalR.LogLevel.Information)
        .build()
      async function test() {
        try {
          const res = await axios.post(
            'https://webapi-trpt76vlgq-ey.a.run.app/api/Notification/TestNotification',
            {
              message: 'smacznej kawusi',
            }
          )
          console.log(res)
        } catch (e) {
          console.log(e)
        }
      }
      async function start() {
        try {
          await connection.start()
          console.log('SignalR Connected.')
        } catch (err) {
          console.log(err)
          setTimeout(start, 5000)
        }
      }

      connection.onclose(async () => {
        await start()
      })

      // Start the connection.
      test()

      start()
    },
  }
</script>

<style></style>
