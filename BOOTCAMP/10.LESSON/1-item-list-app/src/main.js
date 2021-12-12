import { createApp } from 'vue'
import App from './App.vue'
import appHeading from "./components/ui/appHeading.vue";
import "./assets/index.css"

const app=createApp(App)
app.component("Heading",appHeading)
app.mount('#app')
