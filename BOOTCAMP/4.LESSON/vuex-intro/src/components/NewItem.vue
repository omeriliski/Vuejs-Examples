<template>
  <div>
    <input type="text" placeholder="ürün adi..." v-model="urunAdi" />
    <input type="text" placeholder="ürün türü..." v-model="urunTuru" />
    <button @click="urunEkle">Ekle</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      urunAdi:"",
      urunTuru:""
    }
  },
  methods: {
    urunEkle() {
      const itemData={
        id: new Date().getTime(),
        title: this.urunAdi,
        type: this.urunTuru,
      }
      // this.$store.commit("newItem",itemData);   //mutaitions called by using commit
      this.$store.dispatch("newItem",itemData); 
      // this.$store.state.itemList.push({
      //   
      // });
      this.urunAdi = "";
      this.urunTuru = "";
    },
  },
};
</script>
