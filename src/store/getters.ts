import { StateType } from './modules/user'
const getters = {
  token: (state: { user: StateType }) => state.user.token
}

export default getters
