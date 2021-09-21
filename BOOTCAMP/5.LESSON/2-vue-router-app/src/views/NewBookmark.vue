<template>
  <div class="form-area card border p-2">
    <div class="mb-3">
      <label for="title" class="form-label">Baslik</label>
      <input
        type="text"
        class="form-control"
        id="title"
        placeholder="title"
        v-model="userData.title"
      />
    </div>
    <div class="mb-3">
      <label for="url" class="form-label">URL</label>
      <input
        type="text"
        class="form-control"
        id="url"
        placeholder="https://..."
        v-model="userData.url"
      />
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Aciklama</label>
      <textarea
        class="form-control"
        id="description"
        rows="3"
        placeholder="..."
        v-model="userData.description"
      ></textarea>
    </div>
    <div class="d-flex justify-content-end align-items-center">
      <button
        class="btn btn-sm btn-secondary me-2"
        @click="$router.push({ name: 'HomePage' })"
      >
        Iptal
      </button>
      <button class="btn btn-sm btn-primary" @click="onSave">Kaydet</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        title: null,
        url: null,
        description: null,
      },
    };
  },
  methods: {
      onSave(){
          this.$appAxios.post("/bookmarks", this.userData)
          .then(res=>{
            this.resetData();
            console.log(res);
            this.$router.push("/");
          })
          .catch(err=>{
            console.log(err)
          })
      },
      resetData(){
        Object.keys(this.userData).forEach(key=>this.userData[key]=null)
      }
  },
};
</script>
