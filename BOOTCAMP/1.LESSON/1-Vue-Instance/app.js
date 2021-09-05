const app = Vue.createApp({
    data(){
        return{
            title:"Vue.js Bootcamp 1.gün",
            content:"lorem ipsum dolor...",
            google:{
                title:"google",
                target:"_blank",
                url:"https://www.google.de/",
                alt:"google page"
            },
            coords:{
                x:0,
                y:0,
                message:""
            }
        };
    },
    methods: {
        changeTitle(title){
            this.title=title
        },
        updateCoords(message,event){
            this.coords={
                x : event.x,
                y : event.y,
                message:message
            }
        }
    },
}).mount("#app");