<template>
  <div class="layout">
    <div>Layout, &quot;{{ userName }}&quot; from vuex</div>
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
import { defineComponent, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'Layout',
  components: {},
  setup() {
    const store = useStore()

    onMounted(() => {
      console.log(store.state.user.name)
    })

    const setName = () => {
      store.commit('user/SET_NAME', 'imjustpassby')
    }

    return {
      userName: computed(() => store.state.user.name),
      setName
    }
  }
})
</script>
<style lang="less" scoped>
.layout {
  flex: 1;
}
</style>
