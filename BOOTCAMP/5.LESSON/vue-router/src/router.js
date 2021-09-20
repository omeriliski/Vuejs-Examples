import {createRouter,createWebHashHistory} from "vue-router"
import HomeComponent from "@/views/Home"
import AboutComponent from "@/views/About"
import detayComponent from "@/views/Details"

const routes=[
    {
        name:"homePage",
        path:"/",
        component:HomeComponent
    },
    {   
        name:"aboutPage",
        path:"/hakkimda",
        component:AboutComponent
    },
    {   
        name:"detailsPage",
        path:"/detay/:userId",
        component:detayComponent
    }

]
const router = createRouter({
    routes,
    history:createWebHashHistory()
}); 

export default router;