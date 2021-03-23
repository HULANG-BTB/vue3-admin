<template>
  <div class="base-layout" :class="{ collapse: isCollapse }">
    <div class="app-container">
      <div class="sidebar-container">
        <side-bar />
      </div>
      <div class="main-container">
        <div class="navbar-container">
          <nav-bar />
        </div>
        <div class="content-container">
          <div class="app-main">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from 'vue'
import SideBar from './components/side-bar/index.vue'
import NavBar from './components/nav-bar/index.vue'

import { addClass, removeClass } from '@/utils/document'

export default defineComponent({
  name: 'BaseLayout',
  components: { SideBar, NavBar },
  setup() {
    const isCollapse = ref<boolean>(false)

    const toggleSideBar = () => {
      isCollapse.value = !isCollapse.value
      if (isCollapse.value) {
        addClass(document.body, 'collapse')
      } else {
        removeClass(document.body, 'collapse')
      }
    }

    provide('sideBar', { isCollapse, toggleSideBar })

    return {
      isCollapse
    }
  }
})
</script>
