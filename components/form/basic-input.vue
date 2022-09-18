<template>
  <n-input v-model:value="value" :type="type" placeholder="Work on the prompt together" :rows="5" />
</template>

<script lang="ts" setup>
  import { NInput } from 'naive-ui'

  const props = defineProps<{
    isTextArea?: boolean
  }>()

  const type = computed(() => props.isTextArea ? 'textarea' : 'text')
  const value = ref('')
  const emit = defineEmits(['update:modelValue'])

  watch(value, (newValue) => {
    emit('update:modelValue', newValue)
  })
</script>