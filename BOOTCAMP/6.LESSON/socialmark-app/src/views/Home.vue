<template>
    <div>
        <AppHeader/>
        <div class="flex flex-row">
            <Sidebar/>
            <AppBookmarkList :items="bookmarkList"/>
       
       </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Home/Sidebar';
export default {
    data() {
        return {
            bookmarkList:[]
        }
    },
    components:{
        Sidebar
    },
    created() {
        this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then(res=>{
            console.log(res);
            this.bookmarkList=res.data;
        })
    },
}
</script>