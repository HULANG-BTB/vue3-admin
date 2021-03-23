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

<style lang="scss">
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
}
</style>
