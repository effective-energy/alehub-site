import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/components/Index';
import Blog from '@/components/Blog';
import BlogPost from '@/components/BlogPost';

Vue.use(Router);

const router = new Router({
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/blog/categories/:id',
            name: 'Blog',
            component: Blog
        },
        {
            path: '/blog/:id',
            name: 'BlogPost',
            component: BlogPost
        }
    ]
});

export default router;