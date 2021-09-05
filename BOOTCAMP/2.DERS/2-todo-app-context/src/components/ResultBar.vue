<template>
    <div>
        <small class="d-flex justify-content-end green mt-2">todo sayisi:{{provideData.todoList.length}}</small>    
    </div>
</template>
<script>
export default {
   inject:["provideData"]
}
</script>