<template>
    <div
      class="
        flex
        justify-between
        items-center
        bg-gray-600
        px-2
        p-1
        even:bg-gray-600
      "
    >
      <label :for="`todo_${todo.id}_completed`">
        <input type="checkbox" v-model="todo.completed" :id="`todo_${todo.id}_completed`" class="mr-2" />
        <span class="text-lg">{{todo.title}}</span>
      </label>
      <button @click="deleteItem" class="bg-indigo-500 px-2 py-1 rounded-md active:bg-indigo-800">
        Delete
      </button>
    </div>
</template>

<script>
export default {
    props:{
        todo:Object
    },
    setup(props,{emit}) {
      const deleteItem=()=>{
        emit("delete-event",props.todo)
      }
      return {deleteItem}
    }
}
</script>