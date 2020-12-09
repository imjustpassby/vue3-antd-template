import { createStore } from 'vuex'
import getters from '@/store/getters'
import modules from '@/store/modules'

export default createStore({
  modules,
  getters
})
