import Vue from 'vue';
import Router from 'vue-router';

Vue.use(VueParticles);
Vue.use(Router);

import VueParticles from 'vue-particles';

import Index from '@/components/Index';
import Login from '@/components/Login';
import Restore from '@/components/Restore';
import EditIndex from '@/components/EditIndex';
import AccountSettings from '@/components/AccountSettings';
import Newsletter from '@/components/Newsletter';
import Reg from '@/components/Reg';
import RestoreQR from '@/components/RestoreQR'

const router = new Router({
	mode: 'history',
	routes: [{
		path: '/',
		name: 'Index',
		component: Index
	}, {
		path: '/admin/login',
		name: 'Login',
		component: Login
	}, {
		path: '/admin/restore',
		name: 'Restore',
		component: Restore
	}, {
		path: '/admin/changeIndex',
		name: 'EditIndex',
		component: EditIndex
	}, {
		path: '/admin/settings',
		name: 'AccountSettings',
		component: AccountSettings
	}, {
		path: '/admin/newsletter',
		name: 'Newsletter',
		component: Newsletter
	}, {
		path: '/admin/reg',
		name: 'Reg',
		component: Reg
	}, {
		path: '/admin/restore/qr',
		name: 'RestoreQR',
		component: RestoreQR
	}]
});

router.beforeEach((to, from, next) => {
	if(to.name === 'Admin') {
		if(localStorage.getItem('token') === null) {
			router.push('/admin/login');
		}
	}
	let notAviablePages = ['Login', 'Restore', 'Reg', 'RestoreQR', 'Admin']
	for(let i=0;i<notAviablePages.length;i++) {
		if(to.name == notAviablePages[i]) {
			if(localStorage.getItem('token') !== null) {
				router.push('/admin/changeIndex');
			}
		}
	}
    next();
});

export default router;