<template>
   
    <div>
        <!-- <ul v-if="isLoad"> -->
        <ul>
            <li v-for="todo in todoList" :key="todo.id">{{todo.title}}</li>
        </ul>
        <!-- <span v-else>Loading...</span> -->
    </div>
</template>
<script setup>
import {ref} from 'vue';
const todoList=ref([]);
// const isLoad=ref(false);
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json =>{
    todoList.value=json;
    // isLoad.value=true;
  })
  
</script>