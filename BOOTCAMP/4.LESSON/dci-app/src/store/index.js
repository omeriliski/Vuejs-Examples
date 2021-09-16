import {createStore} from "vuex";
import personnel from './modules/personnel';
import student from "./modules/student";
import company from './modules/company'

const store = createStore({
    state:{
        companyName:"DCI"
    },
    modules: {
        personnel,
        student,
        company
    }
})

export default store;