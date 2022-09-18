<template>
  <div>
    <n-h2>Mint your NFT</n-h2>
    <nuxt-img v-if="mintStore.previewUrl" :src="mintStore.previewUrl" />
    <n-form
    ref="formRef"
    :model="formValue"
  >
    <n-form-item :span="12" label="Collection" path="collectionId">
        <n-input-number v-model:value="formValue.collectionId" :min="9999999" />
    </n-form-item>
    <n-form-item label="Token" path="tokenId">
        <n-input-number v-model:value="formValue.tokenId" :min="0" />
    </n-form-item>
    <n-form-item label="Name" path="name">
      <n-input v-model:value="formValue.name" placeholder="NFT Name" />
    </n-form-item>
    <n-form-item label="Description" path="description">
      <n-input v-model:value="formValue.description" type="textarea" :rows="7" placeholder="Fancy description" />
    </n-form-item>
    <n-form-item>
      <n-button secondary :disabled="mintStore.previewUrl === ''"  @click="handleMint">
        Create NFT
      </n-button>
    </n-form-item>
  </n-form>
  </div>
</template>

<script lang="ts" setup>
  import { NH2, NButton, NFormItem, NInput, FormInst, NForm, NInputNumber } from 'naive-ui';
  import { useMintStore } from '~~/stores/mint'
  import { constructMetadata, uploadImage } from '~~/services/create'
  
  const mintStore = useMintStore()
  const { $gun } = useNuxtApp()
  const formRef = ref<FormInst | null>(null)

  const formValue = reactive({
    name: '',
    description: `Based on a prompt from ${mintStore.prompt}`,
    collectionId: 9999999,
    tokenId: 0,
  })

  const copy = $gun.get('token').get('data')

  watch(formValue, (s) => {
    console.log(`formValue is ${s}`)
    copy.put({ name: s.name, description: s.description })
  })

  copy.on(({ name, description }) => {
    formValue.name = name
    formValue.description = description
  });

  async function handleMint() {
    try {
      const imageHash = await uploadImage(mintStore.previewUrl)
      const { name, description, collectionId, tokenId } = formValue
      const metadata = await constructMetadata(name, description, imageHash)
      console.log('metadata', metadata)
      // bafkreibomg47lgd75k2keotr4ycnwbo3jqwmx2j2kebyb76otcuusfjukq
      // const cb = await createNonFungibleToken(String(collectionId), String(tokenId), metadata)
      
    } catch (e) {
      console.error(e)
    }
  }
</script>