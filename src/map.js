import Vue from 'vue'
import vuetify from './plugins/vuetify'
import yntmap from "@/pages/yntmap";

Vue.config.productionTip = false

new Vue({
    vuetify,
    render: h => h(yntmap)
}).$mount('#app')
