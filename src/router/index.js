import Vue from 'vue';
import Router from 'vue-router';
import Main from '../components/Index'

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Main
        }
    ]
});

export default router;