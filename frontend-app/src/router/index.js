import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import HomeLayout from '@/layouts/HomeLayout.vue';
import UploadView from '@/views/UploadView.vue';
import RecentView from '@/views/RecentView.vue';
import BrowseView from '@/views/BrowseView.vue';


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
            path: '/recent',
            name: 'recent',
            component: RecentView,
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
            component: BrowseView,
            meta: { layout: DefaultLayout}
        },
    ]
})

export default router;