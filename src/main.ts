import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css/normalize.css'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import '@/styles/index.scss'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
