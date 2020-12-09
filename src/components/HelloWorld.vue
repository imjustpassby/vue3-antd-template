<template>
  <div class="hello">
    <a-button @click="emitEvent">click me to send a msg!</a-button>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Bus from '@/utils/eventBus'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const emitEvent = () => {
      Bus.emit('hello', {
        msg: 'hello! this is a message from HelloWorld component'
      })
    }

    return {
      emitEvent
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
