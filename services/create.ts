import { createMetadata } from '@kodadot1/minimark'
import { ApiFactory, Extrinsic } from '@kodadot1/sub-api'
import { pinJson } from './nftStorage'

const BASILISK_URL = 'wss://rococo-basilisk-rpc.hydration.dev'
const DOLPHIN_URL = 'wss://ws.rococo.dolphin.engineering'

async function createNonFungibleToken(collectionId: string, tokenId: string, metadata: string): Promise<Extrinsic> {
  const api = await ApiFactory.useApiInstance(BASILISK_URL)
  const create = api.tx.nft.mint(collectionId, tokenId, metadata)
  return create
}

async function constructMetadata(name: string, description: string, imageHash: string, file: Blob): Promise<string> {
  const meta = createMetadata(
    name,
    description,
    imageHash,
    '',
    [],
    'https://kodadot.xyz',
    file.type
  )

  return pinJson(meta, name)
}