<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <br />
    <p>{{ receiveMsg.msg }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import Bus from '@/util/eventBus'
export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  setup() {
    const receiveMsg = ref({
      msg: 'this is default msg, im waiting an msg from HelloWorld component!'
    })

    Bus.on('hello', receive => {
      receiveMsg.value = receive
    })

    return { receiveMsg }
  }
})
</script>
