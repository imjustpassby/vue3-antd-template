<template>
  <router-view />
  <MyFooter></MyFooter>
</template>

<script lang="ts">
import MyFooter from 'components/Layout/myFooter.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'app',
  components: {
    MyFooter
  }
})
</script>
