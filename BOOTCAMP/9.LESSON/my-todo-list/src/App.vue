<template>
  <div class="w-full bg-gray-400 p-5">
    <div class=" w-1/3 bg-gray-600 mx-auto p-2">
      <h1 class=" text-center">Todo List</h1>
      <AddTodo/>
      <AddTodo/>
    </div>
  </div>
</template>

<script>
import AddTodo from "./components/addTodo.vue";
export default {
  components:{
    AddTodo
  }
}
</script>
