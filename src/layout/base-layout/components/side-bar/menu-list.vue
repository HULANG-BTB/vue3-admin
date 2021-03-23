<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :collapse="isCollapse"
      :default-active="activeMenu"
      :background-color="variables.sideBarMenuBgColor"
      :text-color="variables.sideBarMenuTextColor"
      :active-text-color="variables.sideBarMenuTextActiveColor"
      :unique-opened="false"
      :collapse-transition="false"
    >
      <template v-for="route in routes">
        <menu-item v-if="!(route.meta && route.meta.hidden)" :key="route.path" :item="route" :base-path="route.path" />
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from 'vue'
import MenuItem from './menu-item.vue'
import variables from '@/styles/variables.scss'
import { routes } from '@/router/routes'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'MenuList',
  components: { MenuItem },
  setup() {
    const route = useRoute()

    // 当前激活菜单
    const activeMenu = computed(() => {
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    })
    const { isCollapse } = inject<any>('sideBar')

    return {
      routes,
      activeMenu,
      variables,
      isCollapse
    }
  }
})
</script>
