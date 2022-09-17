<template>
  <n-input v-model:value="value" type="textarea" placeholder="Basic Textarea" />
</template>

<script lang="ts" setup>
  import { NInput } from 'naive-ui'
  const value = ref('')
  const { $gun } = useNuxtApp()

  console.log('$gun',$gun)

  // $gun.get('test').put({ value: 'test' })
</script>
