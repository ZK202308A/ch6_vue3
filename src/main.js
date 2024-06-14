import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routers'
import {createPinia} from "pinia";
import { globalCookiesConfig } from "vue3-cookies";


const pinia = createPinia()


globalCookiesConfig({
    expireTimes: "30d",
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None",
});


createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')

