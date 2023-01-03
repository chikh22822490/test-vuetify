import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import createVuetify from './vuetify'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()


app.use(createVuetify)
app.use(pinia)

app.mount('#app')
