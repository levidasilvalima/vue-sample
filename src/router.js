import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store.js';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/Home.vue'),
        },
        {
            path: '/menu1',
            name: 'menu1',
            component: () => import('./views/Welcome.vue')
        },
        {
            path: '/menu2',
            name: 'menu2',
            component: () => import('./views/Bitcoin.vue')
        },        
        {
            path: '/repos',
            name: 'Repositorios',
            component: () => import('./views/Repositories.vue')
        },        
        {
            path: '/sign-in',
            name: 'login',
            component: () => import('./views/Login.vue')
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        if (!store.state.isAuthenticated) {
            next({
                path: '/sign-in'
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;