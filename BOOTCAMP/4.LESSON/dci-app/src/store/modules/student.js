export default{
    namespaced:true,
    state:{
        studentList:[{
            name:"Ömer",
            lastName:"Iliski"
        },
        {
            name:"Darren",
            lastName:"Snell"
        },
        {
            name:"Ashley",
            lastName:"Jiang"
        },
        {
            name:"Henrik",
            lastName:"Kuerschner"
        }
        ]
    },
    getters:{
        _studentList:state=>state.studentList
    }
}