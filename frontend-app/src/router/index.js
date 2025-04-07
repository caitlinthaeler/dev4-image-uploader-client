import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import HomeLayout from '@/layouts/HomeLayout.vue';
import UploadView from '@/views/UploadView.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: { layout: HomeLayout}
        },
        {
            path: '/recent/{id}',
            name: 'recent',
            component: HomeView,
            meta: { layout: DefaultLayout}
        },
        {
            path: '/upload',
            name: 'upload',
            component: UploadView,
            meta: { layout: DefaultLayout}
        },
        {
            path: '/browse',
            name: 'browse',
            component: HomeView,
            meta: { layout: DefaultLayout}
        },
    ]
})

export default router;