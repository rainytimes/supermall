import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'


Vue.config.productionTip = false


//事件总线模型
Vue.prototype.$EventBus = new Vue();

new Vue({
    render: h => h(App),
    router: router
}).$mount('#app')