<template>
  <div>
    <li
      class="d-flex justify-content-between align-items-center"
    >
      <span>{{ todoItem.text}}</span>
      <button class="sm red" @click="deleteTodo(todoItem)">Sil</button>
    </li>
  </div>
</template>

<script>
export default {
  props:["todoItem"],
  inject:["deleteTodo"]
}
</script>
