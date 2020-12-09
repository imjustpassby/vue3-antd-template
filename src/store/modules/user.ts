import { Module } from 'vuex'
import { createStorage } from '@/utils/storage'
// import { login, getUserInfo, logout } from '@/api/system/user'
const Storage = createStorage({ storage: localStorage })

enum StorageKey {
  ACCESS_TOKEN = 'Access-Token',
  CURRENT_USER = 'Current-User'
}

const state = {
  token: Storage.get(StorageKey.ACCESS_TOKEN, ''),
  name: 'default user',
  avatar: '',
  roles: [],
  info: Storage.get(StorageKey.CURRENT_USER, {})
}

export type StateType = typeof state

const user: Module<StateType, any> = {
  namespaced: true,
  state,
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_INFO: (state, info) => {
      state.info = info
    }
  },

  actions: {
    // 登录
    LOGIN({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        /* login(userInfo)
          .then(response => {
            const { result, code, message } = response
            if (code == 0) {
              console.log(result.token)
              Storage.set(StorageKey.ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000)
              Storage.set(StorageKey.CURRENT_USER, result, 7 * 24 * 60 * 60 * 1000)
              commit('SET_TOKEN', result.token)
              // todo
              commit('SET_INFO', result)
            }
            resolve(response)
          })
          .catch(error => {
            reject(error)
          }) */
      })
    },

    // 获取用户信息
    GET_USER_INFO({ commit }) {
      return new Promise((resolve, reject) => {
        /* getUserInfo()
          .then(response => {
            const result = response.result

            if (result.role && result.role.permissions.length > 0) {
              const role = result.role
              role.permissions = result.role.permissions
              role.permissions.map(per => {
                if (
                  per.actionEntitySet != null &&
                  per.actionEntitySet.length > 0
                ) {
                  const action = per.actionEntitySet.map(action => {
                    return action.action
                  })
                  per.actionList = action
                }
              })
              role.permissionList = role.permissions.map(permission => {
                return permission.permissionId
              })
              commit('SET_ROLES', result.role)
              commit('SET_INFO', result)
            } else {
              reject(new Error('getInfo: roles must be a non-null array !'))
            }

            // commit('SET_NAME', { name: result.name, welcome: welcome() })
            commit('SET_AVATAR', result.avatar)

            resolve(response)
          })
          .catch(error => {
            reject(error)
          }) */
      })
    },

    // 登出
    LOGOUT({ commit, state }) {
      return new Promise(resolve => {
        /* commit('SET_ROLES', '')
        commit('SET_INFO', '')
        Storage.remove(StorageKey.ACCESS_TOKEN)
        Storage.remove(StorageKey.CURRENT_USER)
        resolve('')
        logout(state.token).then(() => {
            commit('SET_TOKEN', '')
            commit('SET_ROLES', [])
            Storage.remove(StorageKey.ACCESS_TOKEN)
            resolve()
        }).catch(() => {
            resolve()
        }) */
      })
    }
  }
}

export default user
