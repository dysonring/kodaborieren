import { defineStore } from 'pinia'
import { resolvePrompt } from '~~/services/lambda'
import { gun } from '~~/utils/gun'

export const useMintStore = defineStore('mint', {
  state: () => {
    return {
      prompt: 'green python snake head in hoodie, portrait, vaporwave, synthwave, neon, vector graphics, cinematic, volumetric lighting, f 8 aperture, cinematic eastman 5 3 8 4 film, photorealistic',
      previewUrl: 'https://replicate.com/api/models/stability-ai/stable-diffusion/files/a9cde7c9-f02f-4876-92f5-255a1c43a3e1/out-0.png',
    }
  },
  
  actions: {
    async finalizePrompt(promptState: { prompt: string, promptUrl: string }) {
      this.prompt = promptState.prompt
      const previewUrl = await resolvePrompt(promptState.promptUrl)
      gun.get('token').get('initial').put({ prompt: promptState.prompt, previewUrl })
      this.previewUrl = previewUrl
    },
  },
})