import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './index.css'
import router from './routing/router' // regelt de routing van de applicatie.
import store from './data/index'

createApp(App)
.use(store)
.use(router)
.mount('#app')
