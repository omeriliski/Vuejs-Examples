<template>
  <div class="w-full h-screen bg-gray-200 p-5">
    <div class=" w-1/3 bg-gray-600 mx-auto p-2 rounded">
      <h1 class=" text-center">Todo List</h1>
      <AddTodo :addTodo="addTodo"/> 
      <TodoList :todoList="todoList" :deleteTodo="deleteTodo" :done="done"/>
      <Statistic :todoList="todoList"/>
    </div>
  </div>
</template>

<script>
import AddTodo from "./components/addTodo.vue";
import TodoList from "./components/todoList.vue";
import Statistic from './components/statistics.vue';
import {ref} from "vue";
export default {
  components:{
    AddTodo, TodoList,Statistic
  },
  setup(){
    const todoList=ref([])
    const addTodo=(todoText)=>{
      const todoObject={
        id:new Date().valueOf(),
        title:todoText,
        isDone:false
      }
      if(todoText.length>0) todoList.value.push(todoObject);
    }

    const deleteTodo=(todo)=>{
      todoList.value=todoList.value.filter(e=>e.id!=todo.id)
    }

    const done=(todo)=>{
      todo.isDone=!todo.isDone;
    }
    return{todoList,addTodo,deleteTodo,done}
  }
}
</script>
