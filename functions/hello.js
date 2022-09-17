const emotePartySet = ['1F300', '1F4A2', '1F5FB', '1F5FF', '1FAB1']

exports.handler = async event => {
  const subject = event.queryStringParameters.value

  if (!subject || !emotePartySet.includes(subject)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Mississing or incorrect value' })
    }
  }

  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ value: subject })
      // body: JSON.stringify({ tx: tx.hash.toString() })
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message }),
    }
  }
  
}