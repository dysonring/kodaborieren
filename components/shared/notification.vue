<template>
  <n-notification-provider>
    <slot @success="onSuccess" @fail="onFail" />
  </n-notification-provider>
</template>

<script lang="ts" setup>
  import { useNotification, NNotificationProvider } from 'naive-ui';

  const notification = useNotification()

  function notify(type: string, content: string, meta: string, duration = 2500) {
    notification[type]({
      content,
      meta,
      duration,
      keepAliveOnHover: true
    })
  }

  function onSuccess({ content, meta, duration }: { content: string, meta: string, duration: number }) {
    notify('success', content, meta, duration)
  }

  function onFail({ content, meta, duration }: { content: string, meta: string, duration: number }) {
    notify('success', content, meta, duration)
  }

</script>