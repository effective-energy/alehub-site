import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/components/Index';
import BlogEntries from '@/components/BlogEntries';
import FullNews from '@/components/FullNews';

Vue.use(Router);

const router = new Router({
	mode: 'history',
    routes: [{
    	path: '/',
    	name: 'Index',
    	component: Index
    }, {
        path: '/blog',
        name: 'BlogEntries',
        component: BlogEntries
    }, {
        path: '/blog/:id',
        name: 'FullNews',
        component: FullNews
    }]
});

export default router;