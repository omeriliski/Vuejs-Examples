<template>
  <div>
    <ul>
      <TodoListItem v-for="todoItem in todoList" :key="todoItem.id" :todoItem="todoItem"/>
    </ul>
  </div>
</template>


<script>
import TodoListItem from '@/components/TodoListItem'
export default {
    props:["todoList"],
   components:{
       TodoListItem
   } 
}
</script>
