
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PageAuth.vue') },
      { path: '/Auth', component: () => import('pages/PageChat.vue') },
      { path: '/Chat', component: () => import('pages/UsersPage.vue') }
      
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
