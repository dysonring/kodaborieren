<template>
  <div>
    <navbar/>
    <n-grid x-gap="12" :cols="1">
      <n-gi>
        <slot />
      </n-gi>
    </n-grid>
  </div>
</template>

<script setup lang="ts">
import { NGrid, NGi } from 'naive-ui'
</script>