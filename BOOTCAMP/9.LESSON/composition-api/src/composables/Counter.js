import {ref,watch,computed} from "vue";
export default function(){
    const counter=ref(0);
    const oddOrEven=computed(()=>counter.value % 2 == 0 ? "even" :"odd"  ); 
    watch([counter,oddOrEven],([newCounter,newOddOrEven],[oldCounter,oldOddOrEven])=>{
      console.log(newCounter,newOddOrEven,"=>",oldCounter,oldOddOrEven)
    })
    return {counter, oddOrEven}
}
