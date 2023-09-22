import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home.vue'
import Register from '@/views/Register.vue'
import Dashboard from '@/views/Dashboard.vue'
import Login from '@/views/Login.vue'
import Logout from '@/views/Logout.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/register",
            component: Register
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/logout",
            component: Logout
        },
        {
            path: "/dashboard",
            component: Dashboard
        }
    ]
})

export default router;