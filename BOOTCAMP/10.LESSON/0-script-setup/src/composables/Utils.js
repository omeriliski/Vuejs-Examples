import {ref, onMounted} from "vue";
export default function (){
    const title = ref("title");
    const counter = ref(0);
    const inc = () => {
      counter.value++;
    }
    const alertMe=(info)=>{
      console.log(info)
    }
    onMounted(()=>{
       console.log("this works when it mounted") 
    })
    return {title,counter,inc,alertMe}
}