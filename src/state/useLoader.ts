import { defineStore } from 'pinia'

export const useLoader = defineStore({
  id: 'useLoader',
  state: () => ({
    type: '',
    show: true,
  }),
  getters: {
    getShowLoader: (state) => state.show,
  },
  actions: {
    setType(type = 'fullpage') {
      this.type = type
    },
    setShow(flag = false) {
      console.log(flag, 'setshow')
      this.show = flag
    },
  },
})
