import {createStore} from "vuex";

export default createStore({
    state:{
        user:null,
        saltkey:"booklike123!456?"
    },
    mutations:{
        setUser(state, user){
            state.user=user;
        }
    },
    getters:{
        _isAuthendicated:state =>state.user!=null,
        _getCurrentUser:(state)=>{
            const user=state.user;
            delete user?.password;
            return user;
        },
        _saltkey:state=>state.saltkey
    }
})