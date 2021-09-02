<template>
  <div class="container">
    <h3 class="text-center">Todo App</h3>
    <hr class="my-2" />
    <label for="todoText"></label>
    <input
      type="text"
      id="todoText"
      placeholder="Add todo..."
      v-model="todoText"
      @keydown.enter="addTodo"
    />
    <ul>
      <li
        v-for="todo in todoList"
        :key="todo.id"
        class="d-flex justify-content-between align-items-center"
      >
        <span>{{ todo }}</span>
        <button class="sm red" @click="deleteTodo(todo)">Sil</button>
      </li>
    </ul>
    <small class="d-flex justify-content-end green mt-2">todo sayisi: {{todoList.length}}</small>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoText: "",
      todoList: [],
    };
  },
  methods: {
    addTodo() {
      this.todoList.push(this.todoText);
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
