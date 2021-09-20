<template>
  <div class="container">
    <router-link class="nav-link" active-class="active" to="/">
      Anasayfa
    </router-link>
    <router-link class="nav-link" active-class="active" to="/hakkimda">
      Hakkimda
    </router-link>
     <router-link class="nav-link" active-class="active" to="/detay/123">
      Detay
    </router-link>
    <router-view></router-view>
  </div>
</template>

<style>
  .nav-link{
    padding: 5px 10px;
    text-decoration: none;
    border: 1px solid #fa6558;
    color: #fa6558;
    margin: 5px 5px;
    display: inline-block;
  }
  .active{
    color: white;
    background-color: #fa6558;
  }
</style>