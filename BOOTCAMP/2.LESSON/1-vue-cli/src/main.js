import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/style.css"
import AppHeader from '@/components/AppHeader'; 

const app = createApp(App)
app.component("app-header",AppHeader);  //Bu sekilde import ettigimiz componenti bir daha import etmeden her sayfada kullanabiliriz
app.mount('#app');