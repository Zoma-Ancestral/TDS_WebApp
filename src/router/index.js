import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/register",
            component: () => {import("../views/Register.vue")}
        }
    ]
})

export default router;