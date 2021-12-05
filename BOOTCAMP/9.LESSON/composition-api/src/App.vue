<template>
  <div>
    <h1>{{ title }}</h1>
    <input type="text" v-model="title" />
    <p>{{titleLengthMessage}}</p>
    <button @click="toggleIt">toggleIt</button>
    <p v-if="show">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur minus a voluptates repudiandae veniam quibusdam, natus cupiditate ratione aperiam!
    </p>
    <hr>
    <button @click="counter++">{{counter}} {{oddOrEven}}</button>
    <hr>
    <input type="text" v-model="searchText">
    <p v-if="isTyping">I'm writing...</p>
  </div>
</template>

<script>
import Counter from "./composables/Counter.js";
import Header from "./composables/Header.js";
import Toggle from "./composables/Toggle.js";
import Search from "./composables/Search.js";
export default {
  // data() {
  //   return {
  //     title:"Hallooo"
  //   }
  // },
  // beforeCreate() {
  //   console.log("beforeCreate");
  // },
  // created() {
  //   console.log("created");
  // },

  setup() {
    const {counter, oddOrEven}=Counter();
    const {title,titleLengthMessage}=Header();
    const {show, toggleIt}=Toggle();
    const {searchText, isTyping}=Search();

    return {
      title,
      show,
      toggleIt,
      titleLengthMessage,
      counter,
      oddOrEven,
      searchText,
      isTyping
    };
  },
};
</script>
