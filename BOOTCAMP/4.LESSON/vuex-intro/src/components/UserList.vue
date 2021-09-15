<template>
  <div>
    User:
    <div class="mb-5">
      <ul>
        <li v-for="(userDetails, key, index) in activeUser" :key="index">
          {{ key }} : {{ userDetails }}
        </li>
      </ul>
      <hr />
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    computed:{
    ...mapGetters(["activeUser"])
    }    
}
</script>
