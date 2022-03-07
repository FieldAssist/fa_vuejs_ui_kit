import Vue, {VNode} from 'vue';
import Dev from './serve.vue';
import faUiKit from '@/entry.esm';
import "../src/assets/css/main.css"

Vue.use(faUiKit);

Vue.config.productionTip = false;

new Vue({
    render: (h): VNode => h(Dev),
}).$mount('#app');
