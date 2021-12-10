<template>
    <div>
        <h1>aaa</h1>
        <h1>{{result}}</h1>
        <h1>{{counter}}</h1>
    </div>
</template>

<script setup>
import { computed, watch } from "vue";
    const props=defineProps({counter:Number});
    const emit=defineEmits(["odd-event"]);     //we don't need to write "odd-event
    const result=computed(()=>props.counter%2 ? "Odd" : "Even" )
    watch(result,(result)=>{
        if (result=="Odd") emit ("odd-event", true); 
    })
</script>