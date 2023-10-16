import { createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        path : '/',
        name : 'home',
        component : () => import('../pages/Home.vue')
    },
    {
        path : '/fav',
        name : 'fav',
        component : () => import('../pages/Fav.vue')
    },
    {
        path : '/order',
        name : 'order',
        component : () => import('../pages/Order.vue')
    },
    {
        path : '/detail/:id/:cat',
        name : 'detail',
        component : () => import('../pages/Detail.vue')
    },
    {
        path : '/search',
        name : 'search',
        component : () => import('../pages/Search.vue')
    },
    {
        path : '/profile',
        name : 'profile',
        component : () => import('../pages/Profile.vue')
    },
    {
        path : '/:pathMatch(.*)*',
        name : 'notFound',
        component : () => import('../pages/NotFound.vue') 
    }

]

const router = createRouter({
    history : createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { top: 0 }
        }
    },
})

export default router