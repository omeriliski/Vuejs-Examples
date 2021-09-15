<template>
  <div>
    {{$store.state.mainName}}
    <ul v-for="personnel in personnelList" :key="personnel">
      <li>{{personnel.name}}</li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
export default {
  name: 'App',
  created() {
    console.log(this.$store)
    console.log("personnel list ",this.$store.getters["personnel/_personnelList"]);
  },
  computed:{
    ...mapGetters({
      personnelList:"personnel/_personnelList"
    })
  }
}
</script>
