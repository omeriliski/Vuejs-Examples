import {createStore} from "vuex";
import personnel from './modules/personnel';
import student from "./modules/student";

const store = createStore({
    state:{
        companyName:"DCI"
    },
    modules: {
        personnel,
        student
    }
})

export default store;