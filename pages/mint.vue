<template>
  <div>
    <n-h2>Mint your NFT</n-h2>
    <nuxt-img v-if="mintStore.previewUrl" :src="mintStore.previewUrl" />
    <n-form
    ref="formRef"
    :model="formValue"
  >
    <n-form-item label="Name" path="name">
      <n-input v-model:value="formValue.name" placeholder="NFT Name" />
    </n-form-item>
    <n-form-item label="Description" path="description">
      <n-input v-model:value="formValue.description" type="textarea" :rows="7" placeholder="Fancy description" />
    </n-form-item>
    <n-form-item>
      <n-button secondary  @click="handleMint">
        Create NFT
      </n-button>
    </n-form-item>
  </n-form>
  </div>
</template>

<script lang="ts" setup>
  import { NH2, NButton, NFormItem, NInput, FormInst, NForm } from 'naive-ui';
  import { useMintStore } from '~~/stores/mint'
  
  const mintStore = useMintStore()

  const formRef = ref<FormInst | null>(null)

  const formValue = reactive({
    name: '',
    description: `Based on a prompt from ${mintStore.prompt}`,
  })

  async function handleMint() {
    try {
      // BUILD METADATA
      
    } catch (e) {
      console.error(e)
    }
    
    
  }
</script>