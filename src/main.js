import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueScrollTo from 'vue-scrollto';
import VModal from 'vue-js-modal';
import VueParticles from 'vue-particles';
import VueI18n from 'vue-i18n';
import VueCircleSlider from 'vue-circle-slider';
import VueResource from 'vue-resource';
import Moment from 'vue-moment';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(VueScrollTo, {
    offset: -70
});
Vue.use(VueParticles);
Vue.use(VueI18n);
Vue.use(VModal);
Vue.use(VueCircleSlider);
Vue.use(VueResource);
Vue.use(Moment);

import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

let systemLang = '';
if(localStorage.getItem('systemLang') !== 'eng' && localStorage.getItem('systemLang') !== 'rus') {
	localStorage.setItem('systemLang', 'eng');
	systemLang = 'eng';
} else if(localStorage.getItem('systemLang') === 'eng') {
	systemLang = 'eng';
} else if(localStorage.getItem('systemLang') === 'rus') {
	systemLang = 'rus';
}

import messages from './i18n.js';
const i18n = new VueI18n({
  locale: systemLang,
  messages,
});

import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
});
