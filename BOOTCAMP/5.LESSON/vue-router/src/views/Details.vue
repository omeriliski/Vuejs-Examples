<template>
    <div>
        <h1>Details Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus numquam deserunt saepe! Molestiae, alias nesciunt velit illum aliquam tempore eveniet.</p>
        <p>params: {{$route.params.userId}}</p>
        <p>query: {{$route.query.department}}</p>
        <p>query: {{$route.query.name}}</p>
        <button @click="goBack">Geri Dön</button>
    </div>
</template>

<script>
export default {
    methods: {
        goBack(){
            this.$router.push("/");
        }
    },
}
</script>