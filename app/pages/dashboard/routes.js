const path = require('path')

const routes = [
  {
    path: '/dashboards',
    component: path.resolve(__dirname, 'views/DashboardIndex'),
    name: 'dashboard.index',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboards/:id/:slug',
    component: path.resolve(__dirname, 'views/DashboardIndex'),
    name: 'dashboard.custom',
    meta: {
      requiresAuth: true
    }
  }
]

export default routes
