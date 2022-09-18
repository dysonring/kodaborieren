import { defineStore } from 'pinia'
import { resolvePrompt } from '~~/services/lambda'
import { gun } from '~~/utils/gun'

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
      gun.get('token').get('initial').put({ prompt: promptState.prompt, previewUrl });
      gun.get('token').get('paste').put('');
      this.previewUrl = previewUrl
    },
  },
})