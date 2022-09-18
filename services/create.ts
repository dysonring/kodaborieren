import { createMetadata } from '@kodadot1/minimark'
// import { ApiFactory, Extrinsic } from '@kodadot1/sub-api'
import { pinJson, pinFileToIPFS } from './nftStorage'

const BASILISK_URL = 'wss://rococo-basilisk-rpc.hydration.dev'
const DOLPHIN_URL = 'wss://ws.rococo.dolphin.engineering'

// export async function createNonFungibleToken(collectionId: string, tokenId: string, metadata: string): Promise<Extrinsic> {
//   const api = await ApiFactory.useApiInstance(BASILISK_URL)
//   const create = api.tx.nft.mint(collectionId, tokenId, metadata)
//   return create
// }

export async function constructMetadata(name: string, description: string, imageHash: string): Promise<string> {
  const meta = createMetadata(
    name,
    description,
    imageHash,
    '',
    [],
    'https://kodadot.xyz',
    'image/png'
  )

  return pinJson(meta, name)
}

export async function fetchImage(url: string): Promise<Blob> {
  return $fetch(url, { responseType: 'blob' })
}

export async function uploadImage(blob: Blob): Promise<string>;
export async function uploadImage(url: string): Promise<string>;
export async function uploadImage(url: string | Blob): Promise<string> {
  const file = typeof url === 'string' ? await fetchImage(url) : url
  return pinFileToIPFS(file, '')
}