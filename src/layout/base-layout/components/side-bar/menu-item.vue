<template>
  <template v-if="item.children">
    <el-submenu :index="item.path" popper-append-to-body>
      <template v-if="item.meta" #title>
        <template v-if="item.meta.icon">
          <i :class="[item.meta.icon, 'sub-el-icon']" />
        </template>
        <span>{{ item.meta.title }}</span>
      </template>
      <menu-item v-for="child in item.children" :key="child.path" :item="child" :base-path="resolvePath(child.path)" />
    </el-submenu>
  </template>
  <template v-else>
    <app-link :to="basePath">
      <el-menu-item :index="item.path">
        <template v-if="item.meta" #title>{{ item.meta.title }}</template>
      </el-menu-item>
    </app-link>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppLink from './app-link.vue'
import path from 'path'

export default defineComponent({
  name: 'MenuItem',
  components: { AppLink },
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
