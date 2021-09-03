<template>
  <div class="container">
    <h3 class="text-center">Todo App</h3>
    <hr class="my-2" />
    <AddSection/>
    <TodoList :todoList="todoList"/>
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
    this.todoList= [
      {text:"aaa", id:new Date().getTime()},
      {text:"bbb", id:new Date().getTime()},
      {text:"ccc", id:new Date().getTime()}]
  },
  data() {
    return {
      todoText: "",
      todoList:[]
    };
  },
  methods: {
    addTodo() {
      this.todoList.push({
        id:new Date().getTime(),
        text:this.todoText
      });
      this.todoText = "";
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
