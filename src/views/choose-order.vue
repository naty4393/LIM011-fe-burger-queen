<template>
<div>
      <barMenu/>
    <order/>
</div>

</template>

<script>
import barMenu from '@/components/bar-menu.vue'
import order from '../components/to-order.vue'

export default {
  name: 'choose-order',
  components: {
    barMenu,
    order
  }
}
</script>