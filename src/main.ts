import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'style/index.less'
import { Button, message } from 'ant-design-vue'
const app = createApp(App)
app.config.globalProperties.$message = message

app.use(Button)

app
  .use(store)
  .use(router)
  .mount('#app')
