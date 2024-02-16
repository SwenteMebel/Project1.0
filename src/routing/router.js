import { createRouter, createWebHistory } from "vue-router"; 

const routes = [
    {
        path: '',
        name: 'home',
        component: () => import('../components/homepage.vue') //lazy loading
    },

    {
        path: '/weather',
        name: 'weather',
        component: () => import('../components/weather.vue')//lazy loading

    },

    {
        path: '/shoplist',
        name: 'shoplist',
        components: () => import('../components/shopList.vue')//lazy loading
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router