<template>
  <div>
    Mobilyalar:
    <ul>
      <li v-for="(item, index) in woodItems" :key="index">
        {{ item.title }}-----------{{item.type}}
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    computed:{
    ...mapGetters(["woodItems"])
    }
}
</script>
