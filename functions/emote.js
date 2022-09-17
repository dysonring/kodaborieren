// const { $fetch } = require('ohmyfetch')
const { createInteraction, Interaction, asSystemRemark } = require('@kodadot1/minimark')
const { useApi } = require('@kodadot1/sub-api')
const { Keyring } = require('@polkadot/keyring')
const { createClient } = require('@supabase/supabase-js')
const supabase = createClient('https://leaxatgxibzzjwsjqnst.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYXhhdGd4aWJ6emp3c2pxbnN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjMxNzY1NTgsImV4cCI6MTk3ODc1MjU1OH0.rVZll22l2Mt73w-LX7Krlx6Iyh4LSPjWB1UBAx3nVUk')

const keyring = new Keyring({ ss58Format: 2 })

const nftId = '14463286-8CC1B91E899D9BE40E-HYPER-HYPER_REACTIVE_SPIRALS-0000000000000001'

const magicApi = () => {
  const url = 'https://kusama-rpc.polkadot.io'
  return useApi(url)
}

const buildEmote = (api, subject) => {
  const rmrk = createInteraction(Interaction.EMOTE, '1.0.0', nftId, subject)
  return asSystemRemark(api, rmrk)
}

// .eq(emote.toLowerCase(), false)
const buildAccount = async (emote = '1f300') => {
  const { data, error } = await supabase
  .from('keys')
  .select('address, mnemonic')
  .eq(emote.toLowerCase(), false) // FALSE
  .limit(1)
  .single()

  if (error) {
    throw new Error(error.message)
  }

  const { mnemonic } = data
  // const mnemonic = 'disease meadow arch harbor loyal adjust jar market shuffle goddess immune verify'
  const pair = keyring.addFromUri(mnemonic)
  return pair
}

const updateSupabase = (address, emote) => {
  const key = emote.toLowerCase()
  supabase
  .from('keys')
  .update({ [key]: true })
  .eq('address', address)
  .then(() => console.log(`[SUPABASE] Updated ${address} @ ${key}` ))
  .catch(e => console.log(`[SUPABASE] Error ${e}`))
} 

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
    const api = await magicApi()
    const emote = buildEmote(api, subject)
    const acc = await buildAccount()
    const tx = await emote.signAndSend(acc)
    // const tx = acc.address
    updateSupabase(acc.address, subject)
    return {
      statusCode: 200,
      // body: JSON.stringify({ tx })
      body: JSON.stringify({ value: tx.hash.toString() })
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message }),
    }
  }
  
}