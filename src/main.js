import Vue from 'vue';
import App from './App.vue';
import {store} from './store'
import router from './router';
import VueScrollTo from 'vue-scrollto';
import VModal from 'vue-js-modal';
import VueParticles from 'vue-particles';
import VueI18n from 'vue-i18n';
import VueCircleSlider from 'vue-circle-slider';
import VueResource from 'vue-resource';
import Moment from 'vue-moment';
import VueYandexMetrika from 'vue-yandex-metrika';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

import Vuetify from 'vuetify';
Vue.use(Vuetify);
import 'material-design-icons-iconfont/dist/material-design-icons.css';

library.add(faCoffee);
library.add(fab);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;



// Vue.use(VueYandexMetrika,
//     {
//         id: 48805535,
//         env: process.env.NODE_ENV
//     }
// );

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

var SocialSharing = require('vue-social-sharing');
Vue.use(SocialSharing);

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

import VueAwesomeSwiper from 'vue-awesome-swiper';

import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

let systemLang = '';

switch (localStorage.getItem('systemLang')) {
    case 'en': {
        systemLang = 'en';
        break;
    }
    case 'ru': {
        systemLang = 'ru';
        break;
    }
    case 'zh': {
        systemLang = 'zh';
        break;
    }
    case 'ja': {
        systemLang = 'ja';
        break;
    }
    case 'ko': {
        systemLang = 'ko';
        break;
    }
    case 'ar': {
        systemLang = 'ar';
        break;
    }
    case 'es': {
        systemLang = 'es';
        break;
    }
    case 'de': {
        systemLang = 'de';
        break;
    }
    case 'fr': {
        systemLang = 'fr';
        break;
    }
    default: {
        localStorage.setItem('systemLang', 'en');
        systemLang = 'en';
        break;
    }
}


import messages from './i18n.js';

const i18n = new VueI18n(
    {
        locale: systemLang,
        messages,
    }
);

import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;


setTimeout(() => {
    store.dispatch('cryptoPriceRequest')
        .then(() => {
            // //console.log('success crypto price');
        })
        .catch(() => {
            //console.log('error crypto price');
        });

    store.dispatch('downloadAppRequest')
        .then(() => {
            // //console.log('success download app');

        })
        .catch(() => {
            //console.log('error download app');
        });

    store.dispatch('blogRequest')
        .then(() => {
            // //console.log('success blog');
        })
        .catch(() => {
            //console.log('error blog');
        });
}, 2000);


new Vue(
    {
        el: '#app',
        store,
        i18n,
        router,
        components: {App},
        template: '<App/>'
    }
);
