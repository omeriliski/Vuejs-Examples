<template>
  <Modal>
    <template #title>
      <h1>Modal title</h1>
    </template>
    <template v-slot:content>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque neque nobis
      maxime harum repellat a minus libero autem reiciendis corporis
      perspiciatis magni eaque voluptatum placeat illo, explicabo accusamus
      deleniti! Consequatur.
    </template>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal'
export default {
  components:{
    Modal
  }
}
</script>

