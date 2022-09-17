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
import { RouterLink } from 'vue-router'

function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
{
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/',
          }
        },
        { default: () => 'Going Home' }
      ),
    key: 'go-back-home',
    icon: renderIcon(HomeIcon)
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'mint',
          }
        },
        { default: () => 'Mint' }
      ),
    key: 'mint',
    icon: renderIcon(PersonIcon)
  },
  {
    label: () =>
      h(
        'a',
        {
          href: 'https://github.com/vikiival/kodaborate',
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