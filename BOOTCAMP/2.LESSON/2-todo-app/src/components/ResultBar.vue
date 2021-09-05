<template>
    <div>
        <small class="d-flex justify-content-end green mt-2">todo sayisi:{{todoListLength}}</small>    
    </div>
</template>
<script>
export default {
    props:["todoListLength"]
}
</script>