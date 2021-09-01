const app = Vue.createApp({
    data(){
        return{
            search:"",
            itemList:["elma","armut","kiraz","cilek"]
        };
    },
    methods: {
       
    },
    computed:{
        filteredList(){
            return this.itemList.filter(i=>i.includes(this.search));
        }
    },
    watch:{

    }
}).mount("#app");