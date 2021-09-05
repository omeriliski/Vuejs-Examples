<template>
  <div class="container">
    <div class="d-flex justify-content-between mb-2">
      <button class="blue" @click="activeComp = 'blue'">Blue</button>
      <button class="red" @click="activeComp = 'red'">Red</button>
      <button class="green" @click="activeComp = 'green'">Green</button>
    </div>
    <component :is="activeComp" :msg="activeComp"></component>
  </div>
</template>

<script>
import Blue from "@/components/Blue.vue";
import Red from "@/components/Red.vue";
import Green from "@/components/Green.vue";
export default {
  data() {
    return {
      activeComp: "red",
    };
  },
  components: {
    Blue,
    Red,
    Green,
  },
};
</script>
