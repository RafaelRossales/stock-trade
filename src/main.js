import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router'
import store from './components/store/store'

new Vue({
	router, // Registrando router diretamente na instancia o vue
	store,
	render: h => h(App),
}).$mount('#app')
