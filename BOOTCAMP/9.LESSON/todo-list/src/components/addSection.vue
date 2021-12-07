<template>
  <section class="w-full">
    <input
        @keydown.enter="newItem"
      type="text"
      placeholder="write your todo"
      class="
        w-full
        px-2
        py-1
        bg-gray-700
        border-[1px] border-gray-400
        rounded-md
        outline-none
      "
    />
  </section>
</template>

<script>
export default {
    props:{
        addTodo:Function
    },
    setup(props) {
      const newItem=(event)=>{
          props.addTodo(event.target.value)
          event.target.value=""
      }  
      return {newItem }
    }
}
</script>
