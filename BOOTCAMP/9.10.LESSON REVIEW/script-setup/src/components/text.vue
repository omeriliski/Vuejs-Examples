<template>
    <div>
        <h1>{{text}}</h1>
    </div>
</template>

<script setup>
    const props = defineProps({text:String})  // we can get the props like this
</script>