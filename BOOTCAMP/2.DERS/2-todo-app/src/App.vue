<template>
  <div class="container">
    <h3 class="text-center">Todo App</h3>
    <hr class="my-2" />
    <AddSection @add-todo="addTodo"/>
    <TodoList :todoList="todoList" @delete-todo="deleteTodo"/>
    <ResultBar :todoListLength="todoList.length"/>
  </div>
</template>

<script>
import AddSection from '@/components/AddSection'
import TodoList from '@/components/TodoList'
import ResultBar from '@/components/ResultBar'
export default {
  components:{
    AddSection,
    TodoList,
    ResultBar
  },
  created() {
    this.todoList= []
  },
  data() {
    return {
      todoList:[]
    };
  },
  methods: {
    addTodo(todoText) {
      this.todoList.push({
        id:new Date().getTime(),
        text:todoText
      });
    },
    deleteTodo(todo){
      this.todoList = this.todoList.filter(t=> t!=todo)
      // let index = this.todoList.indexOf(todo);
      // let removed = this.todoList.splice(index,1);
      // console.log(removed)
    }
  },
};
</script>
