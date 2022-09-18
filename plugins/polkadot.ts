// import keyring from '@polkadot/ui-keyring'
// import { cryptoWaitReady } from '@polkadot/util-crypto'

// export default ({ isDev }): void => {
//   cryptoWaitReady().then(() => {
//     keyring.loadAll({
//       ss58Format: 42,
//       // type: 'sr25519',
//       isDevelopment: isDev,
//     })
//   })
// }

export default defineNuxtPlugin(() => {
  console.log('REGISTER KEYRING')
})