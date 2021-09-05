<template>
  <div class="container">
    <h3 class="text-center">Todo App</h3>
    <hr class="my-2" />
    <!-- <AddSection @add-todo="addNewTodo"/> -->
    <AddSection/>
    <TodoList/>
    <ResultBar/>
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
    // this.provideData.todoList= [{
    //   text:"aaa",
    //   id:11122
    // }]
  },
  data() {
    return {
      provideData:{
        todoList:[]
      }
    };
  },
  provide(){
    return{
      provideData:this.provideData,
      addNewTodo:this.addNewTodo,
      deleteTodo:this.deleteTodo
    }
  },
  methods: {
    addNewTodo(todoText) {
      this.provideData.todoList.push({
        id:new Date().getTime(),
        text:todoText
      });
    },
    deleteTodo(todoItem){
      this.provideData.todoList = this.provideData.todoList.filter(t=> t!=todoItem);
      // let index = this.todoList.indexOf(todo);
      // let removed = this.todoList.splice(index,1);
      // console.log(removed);
    }
  },
};
</script>
