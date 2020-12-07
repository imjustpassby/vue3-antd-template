<template>
  <div class="footer">
    footer
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyComponent',
  props: {
    msg: String
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
