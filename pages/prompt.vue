<template>
  <div>
    <n-h2>Collaborative Prompts</n-h2>
    <n-space vertical>
      <ReactiveTextarea v-model="value" />
      <n-button type="primary" :disabled="!value" @click="handleMint">
        Render prompt & continue to mint
      </n-button>
    </n-space>
    <p>
      - It will take approximately less than 15 seconds to render picture in stablediffusion neural model. 
    </p>
    <p>
      - Then click on next tab to mint your prompt memory.
    </p>
  </div>
</template>

<script lang="ts" setup>
  import ReactiveTextarea from '~~/components/form/reactive-textarea.vue'
  import { NH2, NButton, NSpace } from 'naive-ui';
  import { useMintStore } from '~~/stores/mint'
  import { createPrompt } from '~~/services/lambda'

  const value = ref('')
  const { $gun } = useNuxtApp()

  const welcome = $gun.get('token').get('route')

  welcome.on((data) => {
    if (data === '/mint') {
      navigateTo(data)
    }
  });

  async function handleMint() {
    try {
      const mintStore = useMintStore()
      const promptUrl = await createPrompt(value.value)
      setTimeout(() => {
        mintStore.finalizePrompt({ promptUrl , prompt: value.value })
      }, 6000)
    } catch (e) {
      console.error(e)
    }
    
    
  }
</script>