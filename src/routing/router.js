import { createRouter, createWebHistory } from "vue-router"; 

const routes = [
    {
        path: '',
        name: 'home',
        component: () => import('../components/homepage.vue')
    },

    {
        path: '/weather',
        name: 'weather',
        component: () => import('../components/weather.vue')

    },

]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router