<template>
  <div>
    User:
    <div class="mb-5">
      <ul>
        <li
          v-for="(userDetails, key, index) in activeUser"
          :key="index"
        >
          {{ key }} : {{ userDetails }}
        </li>
      </ul>
    <hr />
    </div>
    Mobilyalar:
    <ul>
      <li v-for="(item, index) in woodItems" :key="index">
        {{ item.title }}
      </li>
    </ul>
    <input type="text" placeholder="ürün adi..." v-model="urunAdi">
    <input type="text" placeholder="ürün türü..." v-model="urunTuru">
    <button @click="urunEkle">Ekle</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  data() {
    return {
      urunAdi:"",
      urunTuru:""
    }
  },
  created() {
    console.log(this.woodItems);
    console.log(this.activeUser);
  },
  computed:{
    ...mapGetters(["woodItems","activeUser"])
    },
  methods: {
      urunEkle(){
          this.$store.state.itemList.push({id:new Date().getTime(),title:this.urunAdi, type:this.urunTuru});
          this.urunAdi="";
          this.urunTuru="";
      }
  },
};
</script>
