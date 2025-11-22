import HomePageView from '@/components/HomePageView.vue'
import SignUpView from '@/components/SignUpView.vue'
import { createRouter, createWebHistory } from 'vue-router'

// Routes
const routes = [
    { path: '/', component: HomePageView },
    { path: '/signup', component: SignUpView }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router