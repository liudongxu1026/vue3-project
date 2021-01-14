import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './route.js'

let app = createApp(App);
app.use(router);
app.mount('#app');