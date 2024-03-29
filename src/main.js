import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import Welcome from "@/components/Welcome.vue";
import Home from "@/components/Home.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {path: '/', component: Welcome},
    {path: '/home', component: Home, name: 'Home'},
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
