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
import barMenu from '@/components/waitress/send-order/bar-menu.vue'
import order from '@/components/waitress/send-order/to-order.vue'

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