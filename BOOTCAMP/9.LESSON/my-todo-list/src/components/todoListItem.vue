<template>
    <div class=" p-1 even:bg-gray-400 odd:bg-gray-500 flex justify-between mt-1 rounded-md">
        <p :class="isDone" @click="doneToggle" class=" w-full">{{item.title}}</p>
        <button @click="deleteItem" class=" bg-red-800 text-white p-1 rounded-md active:bg-red-600 hover:bg-red-700">Delete</button>
    </div>
</template>

<script>
import {ref,computed} from 'vue';
export default {
    props:{
        item:Object,
        deleteTodo:Function,
        done:Function
    },
    setup(props) {
        const isDone= computed(()=>{return props.item.isDone ? "line-through text-red-700" : null})
        const deleteItem=()=>{
            props.deleteTodo(props.item)
        }
        const doneToggle=()=>{
            props.done(props.item)
        }
        return{deleteItem,isDone,doneToggle}
    }
}
</script>