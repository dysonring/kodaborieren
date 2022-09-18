<template>
  <n-notification-provider>
    <n-h2>Collaborative Prompts</n-h2>
    <n-space vertical>
      <ReactiveTextarea v-model="value" />
      <n-button type="primary" :disabled="!value" @click="handleMint">
        Continue to mint
      </n-button>
    </n-space>
  </n-notification-provider>
</template>

<script lang="ts" setup>
  import ReactiveTextarea from '~~/components/form/reactive-textarea.vue'
  import { NH2, NButton, NSpace, useNotification, NNotificationProvider } from 'naive-ui';
  import { useMintStore } from '~~/stores/mint'
  import { createPrompt } from '~~/services/lambda'

  const value = ref('')
  const notification = useNotification()

  async function handleMint() {
    try {
      const mintStore = useMintStore()
      const promptUrl = await createPrompt(value.value)
      notification.info({
        content: 'Generating your prompt...',
        meta: ' After 10 seconds you will be redirected to the mint',
        duration: 10000,
        keepAliveOnHover: true
      })
      setTimeout(() => {
        mintStore.finalizePrompt({ promptUrl , prompt: value.value })
      }, 8000)
    } catch (e) {
      console.error(e)
      notification.error({
        content: 'Error while communitating with the server',
        meta: `${e.message}`,
        duration: 2500,
        keepAliveOnHover: true
      })
    }
    
    
  }
</script>