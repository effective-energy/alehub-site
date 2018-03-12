import Vue from 'vue';
import App from './App';
import router from './router';
import VModal from 'vue-js-modal';
import VueQrcode from '@xkeshi/vue-qrcode'

import VueResource from 'vue-resource';

Vue.config.productionTip = false;
Vue.prototype.$host = 'http://54.205.245.204:3000';

Vue.use(VueResource);
Vue.use(VModal);
Vue.component('qrcode', VueQrcode);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});