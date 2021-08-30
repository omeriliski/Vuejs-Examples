const app = Vue.createApp({
    data(){
        return{
            counter:0,
            counter2:0
        };
    },
    methods: {},
    computed:{
        getCounterResult(){
            console.log("c1 calisti")
            return this.counter > 5 ? "5'den büyük" : "5'den kücük"
       },
       getCounterResult2(){
            console.log("c2 calisti")
            return this.counter2 > 5 ? "5'den büyük" : "5'den kücük"
        }
    },
    watch:{
        counter(newValue,oldValue){
            console.log(oldValue,"=>" ,newValue);
        }

    }
}).mount("#app");