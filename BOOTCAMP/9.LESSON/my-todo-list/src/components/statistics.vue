<template>
    <div class=" bg-gray-300 p-1 rounded-md mt-1">
        <p class="text-xs">Total {{todoList.length}} todo</p>
        <p class="text-sm">{{doneCount}} todo done</p>
    </div>
</template>

<script>
import {computed} from 'vue'
export default {
    props:{
        todoList:Array
    },
    setup(props) {
        const doneCount=computed(()=>{
            return props.todoList.filter(e=>e.isDone).length
            // return (props.todoList.value.filters(e=>e.isDone)).length
        })
        return {doneCount}
    }
}
</script>