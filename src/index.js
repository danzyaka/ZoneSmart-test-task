import Vue from 'vue'
import VueFeather from 'vue-feather'

import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.component('VueFeather', VueFeather)

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
