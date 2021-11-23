export const SET_USER = 'SET_USER'

export const state = () => ({
  userInfo: {}
})

export const mutations = {
  [SET_USER](state, data) {
    state.userInfo = data
  }
}

