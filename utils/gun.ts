import GUN from 'gun/gun';

const localStun = 'http://localhost:8765/gun';
export const gun = GUN([localStun, 'https://gun-manhattan.herokuapp.com/gun']);