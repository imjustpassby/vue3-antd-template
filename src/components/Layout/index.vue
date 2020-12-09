<template>
  <div class="layout">
    <div>Layout, &quot;{{ welcome }}&quot; from vuex</div>
    <a-button @click="setName">change username</a-button>
    <br />
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>

    <router-view v-slot="{ Component }">
      <transition name="fade-transform" appear>
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'Layout',
  components: {},
  setup() {
    const store = useStore()

    return {
      welcome: computed(() => store.state.user.name),
      setName: store.commit('user/SET_NAME', 'imjustpassby')
    }
  }
})
</script>
<style lang="less" scoped>
.layout {
  flex: 1;
}
</style>
