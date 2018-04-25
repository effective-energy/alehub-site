import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/components/Index';
import BlogEntries from '@/components/BlogEntries';

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
    }]
});

export default router;