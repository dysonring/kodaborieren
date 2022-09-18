import keyring from '@polkadot/ui-keyring'
import { cryptoWaitReady } from '@polkadot/util-crypto'
import { enableExtension } from '~~/utils/extension'

export default defineNuxtPlugin(() => {
  cryptoWaitReady().then(() => {
    keyring.loadAll({
      ss58Format: 42,
      type: 'sr25519',
      isDevelopment: true,
    })
  })

  // enableExtension().then(() => console.log('EXTENSION ENABLED'))
})