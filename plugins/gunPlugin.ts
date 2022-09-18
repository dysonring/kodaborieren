import { gun } from '~~/utils/gun'

export default defineNuxtPlugin(() => {
  console.log('REGISTER GUN', gun)
  return {
    provide: {
      gun
    }
  }
})