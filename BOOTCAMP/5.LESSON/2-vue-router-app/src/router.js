import {createRouter, createWebHashHistory} from "vue-router";
import HomePage from '@/views/HomePage';
import NewBookmark from '@/views/NewBookmark';

const routes=[
    {
        name:"HomePage",
        path:"/",
        component:HomePage,
        // component:()=>import ("@/views/NewPerson") böyle de olur
    },
    {
        name:"NewBookmark",
        path:"/new",
        component:NewBookmark
    }
]

const router=createRouter({
    routes,
    history:createWebHashHistory()
})

export default router;