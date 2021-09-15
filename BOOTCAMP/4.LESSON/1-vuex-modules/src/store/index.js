import {createStore} from "vuex";
import personnel from "./modules/personnel";
import students from "./modules/students";

const store = createStore({
    state:{
        mainName:"DCI"
    },
    modules:{
        personnel,
        students
    }
})

export default store;