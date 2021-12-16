<template>
  <div>
    <div v-if="err">There is an error {{ err }}</div>
    <suspense v-else>
      <template #default>
        <div>
          <Todos />
          <hr />
          <Users />
        </div>
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </suspense>
  </div>
</template>

<script setup>
// import Todos from './components/Todos.vue'
import { defineAsyncComponent, ref, onErrorCaptured } from "@vue/runtime-core";
const Todos = defineAsyncComponent(() => import("./components/Todos.vue"));
const Users = defineAsyncComponent(() => import("./components/Users.vue"));

const err = ref(null);
onErrorCaptured((e) => {
  err.value = e;
  return true;
});
</script>
