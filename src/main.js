import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app'
import './assets/main.scss'

const firebaseConfig = {
  apiKey: "AIzaSyA0W9EYKr6p2nHpQ69jGy1zPSCcy4BRE3k",
  authDomain: "thedamoclessword-d00e7.firebaseapp.com",
  projectId: "thedamoclessword-d00e7",
  storageBucket: "thedamoclessword-d00e7.appspot.com",
  messagingSenderId: "470494904828",
  appId: "1:470494904828:web:acca274e6a17c3ebe67279"
};

initializeApp(firebaseConfig)

const app = createApp(App)
app.use(router)
app.mount("#app")