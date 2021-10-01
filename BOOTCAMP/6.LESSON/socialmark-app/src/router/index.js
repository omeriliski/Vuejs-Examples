import {createRouter, createWebHashHistory} from "vue-router";

const routes=[
    {
        name:"HomePage",
        path:"/",
        component:()=>import("@/views/Home")
    },
    {
        name:"LoginPage",
        path:"/Login",
        component:()=>import("@/views/Login")
    },
    {
        name:"RegisterPage",
        path:"/Register",
        component:()=>import("@/views/Register")
    },

]

export default createRouter({
    routes,
    history:createWebHashHistory()
})