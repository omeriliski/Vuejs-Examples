import {createStore} from "vuex";

const store=createStore({
    state:{
        user:{
            name:"Ömer",
            lastName:"iliski",
            age:39,
            password:"1564sddöl8645sfkölf"
        },
        theme:"dark",
        permissions:[1,2,3,4,5],
        userList:["Ömer","Osman","Selman","Mehmet","Burak"],
        itemList:[
            {id:1, title:"masa", type:"mobilya"},
            {id:2, title:"sandalye", type:"mobilya"},
            {id:3, title:"TV", type:"elektronik"},
            {id:4, title:"monitör", type:"elektronik"},
            {id:5, title:"bardak", type:"plastik"},
        ]
    },
    getters:{
        woodItems:state=>state.itemList.filter(i=>i.type=="mobilya"),
        activeUser(state){
            const user={
                ...state.user
            }
            delete user.password
            return user
        }
    }
})

export default store;