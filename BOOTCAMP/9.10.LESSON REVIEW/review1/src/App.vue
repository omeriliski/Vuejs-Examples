<template>
  <div>
    <input type="text" v-model="text" />
    <h3>{{ text }}</h3>
    <p v-if="isWriting">writing...</p>
  </div>
</template>

<script>
import { ref, watch } from "vue";
export default {
  setup() {
    const text = ref("");
    const writing = ref("");
    let isWriting = ref(false);
    watch(text, () => {
      if (text.value.length > 0) 
      {
        console.log("calisti1")
        isWriting.value = true;
      }
      setTimeout(() => {
        isWriting.value=false
        console.log("calisti2");
      }, 1500);
    });

    return { text, writing,isWriting };
  },
};
</script>
