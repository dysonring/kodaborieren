import GUN from 'gun/gun';

const localStun = '127.0.0.1:8765'
// const gun = GUN(localStun + '/gun');
const gun = GUN();

export default defineNuxtPlugin(() => {
  console.log('REGISTER GUN', gun)
  return {
    provide: {
      gun
    }
  }
})