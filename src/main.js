import { createApp } from 'vue'
import App from './App.vue'
import { createAppRouter } from './router.js'   // sesuaikan path

const app = createApp(App)
const router = createAppRouter()

app.use(router)
app.mount('#app')