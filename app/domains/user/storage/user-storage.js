const sessionUserPrefix = 'megawhat_user'

const UserStorage = {
  store: (data) => {
    localStorage.setItem(sessionUserPrefix, JSON.stringify(data))
  },

  getUser: () => {
    const hasUser = (localStorage.hasOwnProperty(sessionUserPrefix))

    if (hasUser) {
      const data = JSON.parse(localStorage.getItem(sessionUserPrefix))
      return data.user
    }

    return {}
  },

  getToken: () => {
    const hasUser = (localStorage.hasOwnProperty(sessionUserPrefix))

    if (hasUser) {
      const data = JSON.parse(localStorage.getItem(sessionUserPrefix))
      return data.token
    }
    return ''
  },

  clearSession: () => {
    localStorage.removeItem(sessionUserPrefix)
  }
}

export default UserStorage
