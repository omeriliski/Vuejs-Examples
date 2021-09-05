<template>
  <div class="container">
    <h3>Alisveris Listesi</h3>
    <hr />
    <div class="my-2">
      <input type="text" placeholder="listeyi gir" @keydown.enter="saveData" />
    </div>
    <ul v-if="itemList.length>0">
      <li  v-for="item in itemList" :key="item.id" class="d-flex justify-content-between align-items-center">
        <span>{{item.title}}</span>
        <button class="sm red" @click="deleteData(item)">Sil</button>
      </li>
    </ul>
    <div v-else class="bg-blue p-3 text-white">Listede hic bir eleman yoktur </div>
    <small class="text-blue mt-2 d-flex justify-content-end align-items-center"
      >eleman sayisi:{{itemList.length}}
    </small>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      itemList: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    saveData(e) {
      let data = {
        title: e.target.value,
        created_at: new Date(),
        completed: false,
      };
      axios.post("http://localhost:3000/items", data)
        .then((res) => {
          console.log("data saved:",res.data)
          e.target.value = "";
          this.itemList.push(res.data)
          // this.getData();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getData() {
      axios
        .get("http://localhost:3000/items")
        .then((res) => {
          this.itemList=res.data;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteData(item){
      axios.delete(`http://localhost:3000/items/${item.id}`)
      .then(res=>{
        console.log(res);
        this.itemList=this.itemList.filter(e=>e!=item);
      })
      .catch(err=>{
        console.log(err);
      })
    }
  },
};
</script>
