import Vue from 'vue';
import BootstrapVue from "bootstrap-vue";
import App from './App.vue';
import router from './router';
import VueScrollTo from 'vue-scrollto';
import VueParticles from 'vue-particles';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(VueScrollTo, {
    offset: -70
});
Vue.use(VueParticles);

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
