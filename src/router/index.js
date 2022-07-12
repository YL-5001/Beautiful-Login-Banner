// history模式
import {
    createRouter,
    createWebHashHistory,
} from 'vue-router'

import Banner from '../views/Banner.vue'
import SignIn from '../views/SignIn.vue'

const routes = [
// 路由的默认路径
{
    path: '/',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/Banner',
    name: 'Banner',
    component: () => import('../views/Banner.vue')
  }
]

// 创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;