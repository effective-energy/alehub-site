import Vue from 'vue';
import BootstrapVue from "bootstrap-vue";
import App from './App.vue';
import router from './router';
import VueScrollTo from 'vue-scrollto';
import VueParticles from 'vue-particles';
import VueI18n from 'vue-i18n';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(VueScrollTo, {
    offset: -70
});
Vue.use(VueParticles);
Vue.use(VueI18n);

Vue.config.productionTip = false;

import messages from './i18n.js';
const i18n = new VueI18n({
  locale: 'rus',
  messages,
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
