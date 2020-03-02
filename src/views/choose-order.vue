<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <barMenu/>
        </div>
        <div class="col">
          <order/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import barMenu from '@/components/bar-menu.vue'
import order from '../components/to-order.vue'

export default {
  name: 'choose-order',
  components: {
    barMenu,
    order,
  }
}
</script>

<style>
.container{
  width: 100%;
  margin: 0 0 0 0 0;
}
.col{
  padding: 15px 5px 15px 5px;
}
</style>