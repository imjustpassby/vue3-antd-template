<template>
  <div class="layout">
    <div>Layout</div>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    <router-view v-slot="{ Component }">
      <transition name="fade-transform">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Layout',
  components: {}
})
</script>
<style lang="less" scoped>
.layout {
  flex: 1;
}
</style>
