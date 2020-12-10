const CHANGE_USER = 'CHANGE_USER'
const CHANGE_TOKEN = 'CHANGE_TOKEN'
const CLEAR_USER_SESSION = 'CLEAR_USER_SESSION'

const userData = {
  user: {
    name: 'Uhelliton Andrade',
    email: 'uhlliton@uol.com.br'
  },
  token: 'eyJhbGciOiJIUzI1NiJ9'
}

export const state = () => ({
  auth: {},
  token: ''
})

export const getters = {
  isAuthenticate: state => { return Object.keys(state.token).length !== 0 },
  user: state => { return state.auth },
  token: state => { return state.token }
}

export const mutations = {
  [CHANGE_USER] (state, payload) {
    state.auth = payload
  },
  [CHANGE_TOKEN] (state, payload) {
    state.token = payload
  },
  [CLEAR_USER_SESSION] (state, payload) {
    state.auth = {}
    state.token = ''
  }
}

export  const actions = {
  attemptLogin ({ commit, dispatch }, payload) {
    commit(CHANGE_USER, userData.user)
    commit(CHANGE_TOKEN, userData.token)
  },
  logout ({ commit, dispatch }, payload) {
    commit(CLEAR_USER_SESSION, [])
    return true
  }
}
