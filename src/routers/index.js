import { createWebHistory, createRouter } from 'vue-router'
import MainPage from "../pages/MainPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import MyPage from "../pages/MyPage.vue";
import {useTokenStore} from "../stores/tokenStore.jsx";
import SamplePage from "../pages/SamplePage.vue";

const routes = [
    { path: '/', component: MainPage },
    { path: '/login', component: LoginPage },
    {
        path: '/mypage',
        component: MyPage,
        beforeEnter: (to, from, next) => {
            console.log("check login with cookie")

            const {savedMid} = useTokenStore()

            if(savedMid()){
               return next()
            }else {
                return next('/login')
            }
        }
    },
    {
        path: '/sample',
        component: SamplePage,
        beforeEnter: (to, from, next) => {
            console.log("check login with cookie")

            const {savedMid} = useTokenStore()

            if(savedMid()){
                return next()
            }else {
                return next('/login')
            }
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router

