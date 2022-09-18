import { ApiFactory, Extrinsic } from '@kodadot1/sub-api'

const BASILISK_URL = 'wss://rococo-basilisk-rpc.hydration.dev'
const DOLPHIN_URL = 'wss://ws.rococo.dolphin.engineering'

async function createNonFungibleToken(collectionId: string, tokenId: string, metadata: string): Promise<Extrinsic> {
  const api = await ApiFactory.useApiInstance(BASILISK_URL)
  const create = api.tx.nft.mint(collectionId, tokenId, metadata)
  return create
}