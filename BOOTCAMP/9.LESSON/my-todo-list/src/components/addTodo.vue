<template>
    <div class=" p-1 bg-gray-400 flex justify-between">
        <input @keydown.enter="addTodoItem" class="bg-gray-300 p-1 rounded-md outline-none" type="text" v-model="todoText">
        <button @click="addTodoItem" class=" bg-blue-800 text-white p-1 rounded-md active:bg-blue-600 hover:bg-blue-700">Add Todo</button>
    </div>
</template>
<script>
import {ref} from "vue"
export default {
    props:{
        addTodo:Function    
    },
    setup(props) {
        const todoText=ref("");
        const addTodoItem=()=>{
            props.addTodo(todoText.value);
            todoText.value=""
        }
        return {todoText,addTodoItem}
    }
}
</script>