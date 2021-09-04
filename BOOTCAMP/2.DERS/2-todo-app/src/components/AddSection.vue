<template>
  <div>
    <label for="todoText"></label>
    <input
      type="text"
      id="todoText"
      placeholder="Add todo..."
      v-model="todoText"
      @keydown.enter="addNewTodo(todoText)"
    />
  </div>
</template>
<script>
export default {
  props:{
    addNewTodo:{
      type:Function,
      required:true
    }
  },
  data() {
    return {
      todoText:""
    }
  },
  methods: { //
    // addTodo(){
    //   this.$emit("add-todo",this.todoText)
    //   this.todoText = "";
    // }
  },
}
</script>
// v-model="todoText"
// @keydown.enter="addTodo"
