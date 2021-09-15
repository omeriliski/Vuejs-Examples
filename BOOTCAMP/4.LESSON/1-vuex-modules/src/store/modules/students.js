export default {
    namespaced:true,
    state:{
        studentList:[]
    },
    mutations:{
        setStudent(state,student){
            state.studentList.push(student);
        }
    },
    getters:{
        _studentList:state=>state._studentList
    }
}