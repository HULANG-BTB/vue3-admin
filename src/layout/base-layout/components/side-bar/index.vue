<template>
  <div class="side-bar">
    <menu-list />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import MenuList from './menu-list.vue'

export default defineComponent({
  name: 'SideBar',
  components: { MenuList }
})
</script>
