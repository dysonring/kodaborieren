import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      address: '',
    }
  },
  
  actions: {
    authorize(address: string) {
      this.address = address
    },
  },
})