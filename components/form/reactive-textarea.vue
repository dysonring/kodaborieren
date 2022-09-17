<template>
  <n-input v-model:value="value" type="textarea" placeholder="Work on the prompt together" :rows="10" />
</template>

<script lang="ts" setup>
  import { NInput } from 'naive-ui'
  const value = ref('')
  const { $gun } = useNuxtApp()
  const copy = $gun.get('test').get('paste');
  copy.on((data) => { value.value = data });


  watch(value, (newValue) => {
    console.log(`x is ${newValue}`)
    copy.put(newValue)
  })
  
  console.log('$gun',$gun)
</script>
