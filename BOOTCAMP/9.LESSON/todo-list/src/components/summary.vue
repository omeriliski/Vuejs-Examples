<template>
    <div>
        <div class="text-green-300">{{completed}} is done</div>
        <div class="text-red-400">{{uncompleted}} is not done</div>
    </div>
</template>

<script>
import {computed} from 'vue'
export default {
    props:{
        todoList:Array
    },
    setup(props) {
        const completed=computed(()=>props.todoList.filter(e =>e.completed).length);
        const uncompleted=computed(()=>props.todoList.filter(e =>!e.completed).length)
        return {completed,uncompleted}
    }
}
</script>