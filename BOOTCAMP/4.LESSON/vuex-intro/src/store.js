import {createStore} from "vuex";

const store=createStore({
    state:{
        person:{
            name:"Ömer",
            lastName:"iliski",
            age:39
        },
        theme:"dark",
        permissions:[1,2,3,4,5]
    }
})

export default store;