<template>
  <template v-if="item.children">
    <el-submenu :index="resolvePath(item.path)" popper-append-to-body>
      <template v-if="item.meta" #title>{{ item.meta.title }}</template>
      <menu-item v-for="child in item.children" :key="child.path" :item="child" :base-path="resolvePath(child.path)" />
    </el-submenu>
  </template>
  <template v-else>
    <el-menu-item :index="resolvePath(item.path)">
      <template v-if="item.meta" #title>{{ item.meta.title }}</template>
    </el-menu-item>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import path from 'path'

export default defineComponent({
  name: 'MenuItem',
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const resolvePath = (routePath: string) => {
      return path.resolve(props.basePath, routePath)
    }

    return {
      resolvePath
    }
  }
})
</script>
