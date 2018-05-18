import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import MainModule from './modules/Main';
import BlogModule from './modules/Blog';



export const store = new Vuex.Store({
    modules: {
        Main: MainModule,
        Blog: BlogModule,
    },
    strict: false
});
