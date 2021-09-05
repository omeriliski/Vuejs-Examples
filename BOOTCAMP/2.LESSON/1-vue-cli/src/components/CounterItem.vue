<template>
  <div>
    <div class="col-2 card p-2">
      <h3 class="text-center">{{ counter }}</h3>
      <div class="d-flex justify-content-center align-items-center">
        <button class="btn-sm btn-primary me-2" @click="counter++">+</button>
        <button class="btn-sm btn-danger" @click="counter--">-</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            counter:0
        }
    },
}
</script>
