import GUN from 'gun/gun';

const localStun = 'http://localhost:8765/gun';
const gun = GUN([localStun, 'https://gun-manhattan.herokuapp.com/gun']);

export default defineNuxtPlugin(() => {
  console.log('REGISTER GUN', gun)
  return {
    provide: {
      gun
    }
  }
})