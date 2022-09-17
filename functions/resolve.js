const { $fetch } = require('ohmyfetch')

exports.handler = async (event) => {
  const url = event.queryStringParameters.value
  const { url: urlInBody } = JSON.parse(event.body || {})

  if (!url) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Mississing or incorrect url' }),
    }
  }

  const headers = {
    Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
    "Content-Type": "application/json",
  }

  try {
    const { output } = await $fetch(url || urlInBody, {
      headers,
    })
    return {
      statusCode: 200,
      body: JSON.stringify({ output }),
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message }),
    }
  }
}
