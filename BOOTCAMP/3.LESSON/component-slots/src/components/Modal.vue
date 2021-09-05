<template>
  <div class="container">
    <div class="header">
        <slot name="title"/>
    </div>
    <hr>
    <div id="content">
        <slot name="content"/>
    </div>
    <hr>
    <div class="footer text-right">
        <button class="mr-2">Kapat</button>
        <button class="green">Kaydet</button>
    </div>
  </div>
</template>
