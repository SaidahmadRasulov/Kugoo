import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import {router} from './router'
import { prime_options } from './assets/prime_vue_config.js';
import 'primeicons/primeicons.css'
import { OhVueIcon } from "./utils/iconsUtils.js"

createApp(App).use(router).use(PrimeVue, prime_options).component("v-icon", OhVueIcon).mount('#app')
