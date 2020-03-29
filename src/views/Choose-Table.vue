<template>
  <div class="Choose-Table">
    <div class="select-order">
      <header1 msg="El pedido es: (local / delivery)"/>
      <selectOrder/>
    </div>
    <section> 
      <chooseNumberTable/>
    </section>
    <section>
      <button type="button" class="btn btn-primary btn-lg" @click="goToNextPage()">Continuar con el pedido</button>
    </section>
  </div>
</template>

<script>
import selectOrder from '../components/waitress/selec-table/select-order'
import header1 from '@/components/home/header1.vue'
import chooseNumberTable from '../components/waitress/selec-table/choose-number-table.vue'

export default {
  name: 'choose-table',
  components: {
    header1,
    selectOrder,
    chooseNumberTable,
  },
  methods: {
    goToNextPage(){
      this.$router.push('choose-order')
    }
  }
}
</script>
<style>
  .Choose-Table{
    text-align: center;
  }
</style>