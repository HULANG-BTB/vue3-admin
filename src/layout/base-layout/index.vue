<template>
  <div class="base-layout" :class="{ showSideBar: !isCollapse }">
    <div class="app-container">
      <div class="sidebar-container">
        <side-bar />
      </div>
      <div class="main-container">
        <div class="navbar-container">
          <nav-bar />
        </div>
        <div class="content-container">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from 'vue'
import SideBar from './components/side-bar/index.vue'
import NavBar from './components/nav-bar/index.vue'

export default defineComponent({
  name: 'BaseLayout',
  components: { SideBar, NavBar },
  setup() {
    const isCollapse = ref<boolean>(false)

    const toggleSideBar = () => {
      isCollapse.value = !isCollapse.value
    }

    provide('sideBar', { isCollapse, toggleSideBar })

    return {
      isCollapse
    }
  }
})
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';

.base-layout {
  &.showSideBar {
    .app-container {
      .sidebar-container {
        transition: width 0.28s;
        width: $--sidebar-width !important;
        background-color: $--sidebar-menu-bg-color;
        height: 100vh;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 1000;
        overflow: hidden;
      }

      .main-container {
        min-height: 100%;
        transition: margin-left 0.28s;
        margin-left: $--sidebar-width;
        position: relative;

        .navbar-container {
          height: $--navbar-height;
          overflow: hidden;
          position: relative;
          background: $--navbar-bg-color;
          box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
        }

        .content-container {
          min-height: calc(100vh - $--navbar-height);
          width: 100%;
          position: relative;
          overflow: hidden;
        }
      }
    }
  }

  .app-container {
    .sidebar-container {
      transition: width 0.28s;
      width: $--sidebar-collapse-width !important;
      background-color: $--sidebar-menu-bg-color;
      height: 100vh;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 1000;
      overflow: hidden;
    }

    .main-container {
      min-height: 100%;
      transition: margin-left 0.28s;
      margin-left: $--sidebar-collapse-width;
      position: relative;

      .navbar-container {
        height: $--navbar-height;
        overflow: hidden;
        position: relative;
        background: $--navbar-bg-color;
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
      }

      .content-container {
        min-height: calc(100vh - $--navbar-height);
        width: 100%;
        position: relative;
        overflow: hidden;
      }
    }
  }
}
</style>
