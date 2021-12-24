import Vue, { VNode } from 'vue';
import Dev from './serve.vue';
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "Vue.use" call
import Fa_vuejs_ui_kit from '@/entry.esm';
Vue.use(Fa_vuejs_ui_kit);

Vue.config.productionTip = false;

import "@tailwindcss/postcss7-compat/tailwind.css"
import "../src/assets/css/main.css"

new Vue({
  render: (h): VNode => h(Dev),
}).$mount('#app');
