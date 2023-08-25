import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';
import {router} from "@/router/index"
import store from "@/store/index";
import Pager from "@/components/common/pager.vue";
import VueCryptojs from "vue-cryptojs";


const app = createApp(App)


app.config.globalProperties.$axios = axios;
app.config.globalProperties.foo = 'bar';

//app.component('EasyDataTable', Vue3EasyDataTable);
app.use(store)
app.use(router)
app.use(VueCryptojs)

app.component("pager_table", Pager)

app.mount('#app')

import "@/assets/css/reset.css"
import "@/assets/css/fonts.css"
