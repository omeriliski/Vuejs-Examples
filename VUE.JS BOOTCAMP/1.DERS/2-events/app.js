const app = Vue.createApp({
    data(){
        return{
            inputValue:"default"
        };
    },
    methods: {
       updateValue(event){
        this.inputValue=event.target.value;
       }
    },
}).mount("#app");