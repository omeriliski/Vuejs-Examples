<template>
    <div>
        <h1>Home Page</h1>
        <input type="text" v-model="userId">
        <input type="text" v-model="department">
        <input type="text" v-model="name">
        <button @click="goToDetails">Gönder</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userId:"",
            department:"",
            name:""
        }
    },
    methods: {
        goToDetails(){
            // this.$router.push(`/detay/${e.target.value}`);
            //Bu da ikinci yol
            console.log(this.$route)
            this.$router.push({
                name:"detailsPage",
                params:{
                    userId:this.userId
                },
                query:{
                    department:this.department,
                    name:this.name
                }
            })
        }
    },
}
</script>