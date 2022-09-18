import { defineStore } from 'pinia'
import { resolvePrompt } from '~~/services/lambda'

export const useMintStore = defineStore('mint', {
  state: () => {
    return {
      prompt: '',
      previewUrl: '',
    }
  },
  
  actions: {
    async finalizePrompt(promptState: { prompt: string, promptUrl: string }) {
      this.prompt = promptState.prompt
      const previewUrl = await resolvePrompt(promptState.promptUrl)
      this.previewUrl = previewUrl
    },
  },
})