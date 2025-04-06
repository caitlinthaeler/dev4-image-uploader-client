import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/recent/{id}',
            name: 'recent',
            component: HomeView,
        },
        {
            path: '/upload',
            name: 'upload',
            component: HomeView,
        },
        {
            path: '/browse',
            name: 'browse',
            component: HomeView,
        },
    ]
})

export default router;