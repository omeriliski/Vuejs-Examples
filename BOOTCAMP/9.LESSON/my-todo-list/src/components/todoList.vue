<template>
    <div>
        <TodoListItem class="p-1 even:bg-gray-400 odd:bg-gray-500" v-for="item in todoList" :key="item.id" :item="item" :deleteTodo="deleteTodo" :done="done"/>
    </div>
</template>

<script>
import TodoListItem from "./todoListItem.vue"
export default {
    components:{
        TodoListItem
    },
    props:{
        todoList:Array,
        deleteTodo:Function,
        done:Function
    },
    setup(props) {
        console.log("props",props)
        console.log("todoList",props.todoList)
    }
}
</script>