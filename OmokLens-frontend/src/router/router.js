import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        // path: '/',
        // alias: ['/main', '/index'],
        // component: () => import("../views/GuestMainView.vue")
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
