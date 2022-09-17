const { $fetch } = require('ohmyfetch')
const BASE_URL = 'https://api.replicate.com/v1/predictions'

exports.handler = async (event) => {
  console.log(event.body)
  const { prompt } = JSON.parse(event.body || {})
  console.log('[prompt] ', prompt)

  if (!prompt) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Mississing or incorrect prompt' }),
    }
  }

  const headers = {
    Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
    "Content-Type": "application/json",
  }

  try {
    const body = {
      version: 'a9758cbfbd5f3c2094457d996681af52552901775aa2d6dd0b17fd15df959bef',
      input: { text: prompt },
    }
    const { urls } = await $fetch(BASE_URL, {
      method: 'POST',
      body,
      headers,
    })
    return {
      statusCode: 200,
      body: JSON.stringify({ urls }),
      // body: JSON.stringify({ tx: tx.hash.toString() })
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message }),
    }
  }
}
