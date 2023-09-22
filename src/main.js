import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app'
import './assets/main.scss'
import firebaseConfig from './firebase/firebaseConfig'

initializeApp(firebaseConfig)

const app = createApp(App)
app.use(router)
app.mount("#app")