<template>
  <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
</template>

<script lang="ts">
import { defineComponent, h, ref, Component } from 'vue'
import { NIcon, NMenu } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
  HomeOutline as HomeIcon,
} from '@vicons/ionicons5'

function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
{
    label: () =>
      h(
        'a',
        {
          href: '/'
        },
        { default: () => 'Going Home' }
      ),
    key: 'go-back-home',
    icon: renderIcon(HomeIcon)
  },
  {
    label: () =>
      h(
        'a',
        {
          href: '/prompt'
        },
        { default: () => 'Make' }
      ),
    key: 'promp',
    icon: renderIcon(PersonIcon)
  },
  {
    label: () =>
      h(
        'a',
        {
          href: '/mint'
        },
        { default: () => 'Mint NFT' }
      ),
    key: 'mint',
    icon: renderIcon(WineIcon)
  },
  {
    label: () =>
      h(
        'a',
        {
          href: 'https://github.com/dysonring/kodaborieren',
          target: '_blank',
          rel: 'noopenner noreferrer'
        },
        'Github '
      ),
    key: 'hear-the-wind-sing',
    icon: renderIcon(BookIcon)
  },
]

export default defineComponent({
  components: {
    NMenu,
    NIcon
  },
  setup () {
    return {
      activeKey: ref<string | null>(null),
      menuOptions
    }
  }
})
</script>