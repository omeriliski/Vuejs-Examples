<template>
  <div>
    <app-header/>
    <h3>Bu benim ilk CLI uygulamam</h3>
    <p>bugün component ve CLI kullanacagiz</p>
    <CounterItem/>
     <CounterItem/>
  </div>
</template>
<script>
  import CounterItem from '@/components/CounterItem';
  export default {
    components:{
      CounterItem,
    }
  };
</script>

<style></style>
