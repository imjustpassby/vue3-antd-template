<template>
  <router-view v-slot="{ Component }">
    <transition name="fade-transform" appear>
      <component :is="Component" />
    </transition>
  </router-view>
  <MyFooter author="imjustpassby"></MyFooter>
</template>

<script lang="ts">
import MyFooter from 'components/Layout/components/myFooter.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'app',
  components: {
    MyFooter
  }
})
</script>
