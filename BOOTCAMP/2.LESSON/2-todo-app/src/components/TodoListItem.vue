<template>
  <div>
    <li
      class="d-flex justify-content-between align-items-center"
    >
      <span>{{ todoItem.text}}</span>
      <button class="sm red" @click="$emit('delete-todo', todoItem)">Sil</button>
    </li>
  </div>
</template>

<script>
export default {
  props:["todoItem"]
}
</script>
