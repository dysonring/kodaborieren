import { $fetch } from 'ohmyfetch'

export const createPrompt = async (prompt: string): Promise<string> => {
  const { urls } = await $fetch<{ urls: { get: string } }>('https://kodaborieren.netlify.app/api/create', {
    method: 'POST',
    body: JSON.stringify({ prompt }),
  })

  console.log(urls)
  return urls.get
}

export const resolvePrompt = async (promptUrl: string): Promise<string> => {
  const { output } = await $fetch<{ output: string[] }>(`https://kodaborieren.netlify.app/api/resolve`, {
    params: { value: promptUrl },
  })
  return output[0]
}