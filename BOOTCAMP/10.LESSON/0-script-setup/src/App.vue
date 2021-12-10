<template>
  <div>
    <h3>{{title}}</h3>
    <input type="text" v-model="title">
    <button @click="inc">{{counter}}</button>
    <hr>
    <OddOrEven :counter="counter" @odd-event="alertMe"/>
    <hr>
    <h1>User App</h1>
    <input type="text" v-model="state.personal.firstName">
    <input type="text" v-model="state.personal.lastName">
    {{state.personal.firstName}} {{state.personal.lastName}}
  </div>
</template>

<script setup>
import {ref,reactive, watch} from 'vue'
// !setup beforeCreate( ), created(), data()
import OddOrEven from "./components/OddOrEven.vue"; 
import Utils from "./composables/Utils"
const { title,counter,inc,alertMe}=Utils()

//! User App
// const firstName=ref("");
// const lastName=ref("");
const state=reactive({
  personal:{
    firstName:"Ömer",
    lastName:null
  }
})
watch(()=>JSON.parse(JSON.stringify(state.personal)),
  (newPersonal, oldPersonal)=>{
  console.log(oldPersonal)
  console.log(newPersonal)
})
console.log(state.personal.firstName)
</script>