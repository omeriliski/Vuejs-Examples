import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import "@/assets/style.css"
import appHeader from "@/components/shared/appHeader"
import appBookmarkList from "@/components/shared/appBookmarkList"

const app=createApp(App);
app.component("AppHeader",appHeader);
app.component("AppBookmarkList",appBookmarkList);
app.use(router);
app.mount('#app');
