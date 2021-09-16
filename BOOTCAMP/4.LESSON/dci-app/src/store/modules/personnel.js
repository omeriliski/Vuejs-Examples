export default{
    namespaced:true,
    state:{
        personnelList:[{
            id:1,
            name:"Kristin",
            lastName:"Tatro",
            position:"Program Manager "
        },
        {   
            id:2,
            name:"Jay",
            lastName:"Radan",
            position:"Teacher"
        },
        {
            id:3,
            name:"Antonia",
            lastName:"Panagiota",
            position:"Teacher"
        }]
    },
    getters:{
        _personnelList:state=>state.personnelList
    }
}