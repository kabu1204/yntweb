import Vue from 'vue'
import vuetify from './plugins/vuetify'
import pics from "@/pages/pics";

Vue.config.productionTip = false

new Vue({
    vuetify,
    render: h => h(pics)
}).$mount('#app')
