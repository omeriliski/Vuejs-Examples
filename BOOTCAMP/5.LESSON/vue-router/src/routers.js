import {createRouter,createWebHistory} from "vue-router"
import HomeComponent from "@/views/Home"
import AboutComponent from "@/views/About"

const routes=[
    {
        path:"/",
        component:HomeComponent
    },
    {
        path:"/hakkimda",
        component:AboutComponent
    }
]
const router = createRouter({
    routes,
    history:createWebHistory()
}); 

export default router;