<template>
  <div class="footer">
    <p>{{ footerMsg }}</p>
    <p>@{{ author }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MyComponent',
  props: {
    author: {
      type: String
    }
  },
  setup() {
    const footerMsg = ref('this is my footer')

    return { footerMsg }
  }
})
</script>
<style lang="less" scoped>
.footer {
  position: sticky;
  top: 100vh;
  background: grey;
}
</style>
