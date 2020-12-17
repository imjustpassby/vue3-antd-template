<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <br />
    <p>{{ receiveMsg }}</p>
    <p>{{ extractMsg }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import Bus from '@/utils/eventBus'
export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  setup() {
    const receiveMsg = ref(
      'this is default msg, im waiting an msg from HelloWorld component!'
    )

    const extractMsg = computed(() => `computed example: ${receiveMsg.value}`)

    watch(
      () => receiveMsg.value,
      (cur, prev) => {
        console.log(cur)
        console.log(prev)
      }
    )

    Bus.on('hello', receive => {
      receiveMsg.value = receive.msg
    })

    return { receiveMsg, extractMsg }
  }
})
</script>
