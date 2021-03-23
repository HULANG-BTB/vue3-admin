<template>
  <div class="navbar">
    <hamburger :is-active="isCollapse" class="hamburger-container" @toggleClick="toggleSideBar" />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import Hamburger from './components/hamburger/index.vue'

export default defineComponent({
  name: 'NavBar',
  components: { Hamburger },
  setup() {
    const { isCollapse, toggleSideBar } = inject<any>('sideBar')
    return {
      isCollapse,
      toggleSideBar
    }
  }
})
</script>
