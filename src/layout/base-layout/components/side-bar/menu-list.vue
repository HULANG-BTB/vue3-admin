<template>
  <el-menu
    class="menu-list"
    :default-active="activeMenu"
    :background-color="variables.sideBarBgColor"
    :text-color="variables.sideBarTextColor"
    :active-text-color="variables.sideBarTextActiveColor"
    mode="vertical"
  >
    <template v-for="route in routes">
      <menu-item v-if="!(route.meta && route.meta.hidden)" :key="route.path" :item="route" :base-path="route.path" />
    </template>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import MenuItem from './menu-item.vue'
import variables from '@/styles/variables.scss'
import { routes } from '@/router'

export default defineComponent({
  name: 'MenuList',
  components: { MenuItem },
  setup() {
    console.log(routes)

    const activeMenu = ref<string>('')

    return {
      routes,
      activeMenu,
      variables
    }
  }
})
</script>

<style lang="scss" scoped>
.menu-list {
  border-right: none;
}
</style>
