<template>
  <div>
    <h1>{{header}}</h1>
    <input type="text" v-model="text">
    <Text :text="text"/>
    <hr>
    <input type="text" v-model="state.person.firstName">
    <p>{{state.person.firstName}}</p>
    <input type="text" v-model="state.person.lastName">
    <p>{{state.person.lastName}}</p>
  </div>
</template>

<script setup>
import {ref,reactive, onMounted} from 'vue'
import Text from './components/text.vue'
  const header=ref("header")
  const text=ref("")

  const state = reactive({
    person:{
      firstName:"",
      lastName:""
    }
  })
  onMounted(()=>{            // setup came instead of data, before created and created
    console.log("mounted")   // we can use mounted like this
  })
  // we don't need to write return
</script>
