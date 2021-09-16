export default{
    namespaced:true,
    state:{
        listHeader:["Logo","Company","Phone","Website"],
        companyList:[{
            id:1,
            logo:"",
            name:"Microsoft",
            phone:"0800 200 55 88",
            link:"go to Microsoft",
            href:""
        },
        {   
            id:2,
            logo:"",
            name:"Amazon",
            phone:"0800 100 38 44",
            link:"go to Amazon",
            href:""
        }]
    },
    getters:{
        _companyList:state=>state.companyList
    }
}