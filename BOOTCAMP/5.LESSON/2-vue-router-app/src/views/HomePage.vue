<template>
  <div class="card border p-2">
      <div class="d-flex justify-content-end">
        <button class="btn btn-primary btn-sm" @click="$router.push({name:'NewBookmark'})">+ Yeni Ekle</button>
      </div>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Baslik</th>
          <th scope="col">URL</th>
          <th scope="col">Aciklama</th>
          <th scope="col">Sil</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bookmark in userData" :key="bookmark.id">
          <th scope="row">{{bookmark.id}}</th>
          <td>{{bookmark.title}}</td>
          <td><a :href="bookmark.url">{{bookmark.url}}</a></td>
          <td>{{bookmark.description}}</td>
          <td>
              <button class="btn-sm btn-danger" @click="deleteBookmark(bookmark)">Sil</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData:[]
    }
  },
  created() {
    this.$appAxios.get("/bookmarks")
    .then(res=>{
      console.log(res.data)
      this.userData=res.data;
    })
    .catch(err=>{
      console.log(err)
    })
  },
  methods: {
    deleteBookmark(bookmark){
      this.$appAxios.delete(`/bookmarks/${bookmark.id}`)
      .then(res=>{
        console.log("deleted",res);
        this.userData = this.userData.filter(item=>item!=bookmark)
      })
      .catch(err=>{
        console.log(err)
      })
    }
  },
}
</script>