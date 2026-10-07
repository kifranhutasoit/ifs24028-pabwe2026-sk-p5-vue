import { createRouter, createWebHistory } from 'vue-router'
import { getAccessToken } from './helpers/apiHelper.js'

// Layout boleh tetap static (lebih ringan)
import AuthLayout from './features/auth/layouts/AuthLayout.vue'
import AucationLayout from './features/aucations/layouts/AucationLayout.vue'

// Halaman diubah ke Dynamic Import
const LoginPage = () => import('./features/auth/pages/LoginPage.vue')
const RegisterPage = () => import('./features/auth/pages/RegisterPage.vue')
const HomePage = () => import('./features/aucations/pages/HomePage.vue')
const DetailPage = () => import('./features/aucations/pages/DetailPage.vue')
const UsersPage = () => import('./features/users/pages/UsersPage.vue')
const ProfilePage = () => import('./features/users/pages/ProfilePage.vue')
const NotFoundPage = () => import('./features/common/pages/NotFoundPage.vue')

export const routes = [
  {
    path: '/auth',
    component: AuthLayout,
    meta: { guest: true },
    children: [
      { path: 'login', component: LoginPage },
      { path: 'register', component: RegisterPage },
    ],
  },
  {
    path: '/',
    component: AucationLayout,
    meta: { requiresAuth: true },
    children: [
      { path: '', component: HomePage },
      { path: 'aucations/:aucationId', component: DetailPage },
      { path: 'users', component: UsersPage },
      { path: 'profile', component: ProfilePage },
    ],
  },
  { path: '/:pathMatch(.*)*', component: NotFoundPage },
]

function redirectFor(meta) {
  const loggedIn = Boolean(getAccessToken())
  if (meta.requiresAuth && !loggedIn) return '/auth/login'
  if (meta.guest && loggedIn) return '/'
  return ''
}

export function createAppRouter(history = createWebHistory()) {
  const router = createRouter({ history, routes })
  router.beforeEach((to) => redirectFor(to.meta) || true)
  return router
}