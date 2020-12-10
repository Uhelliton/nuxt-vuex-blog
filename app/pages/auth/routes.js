const fs = require('fs')
const path = require('path')

export const router = [
  {
    name: 'auth.index',
    path: '/auth',
    component: path.resolve(__dirname, 'views/AuthIndex')
  }
]
