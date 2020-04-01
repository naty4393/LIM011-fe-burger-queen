<template>
  <div>
		<div class="container">
      <div class="row">
        <div class="col">
          <header>Lista de Pedidos</header>
          <section>
            <getOrder/>
          </section>
        </div>
        <div class="col">
          <header>Pedidos listos</header>
          <section>
            <readyOrder/>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getOrder from '../components/cheff/get-order/get-order.vue'
import readyOrder from '../components/cheff/ready-order/ready-order.vue'

export default {
  name: 'watch-order',
  components:{
    getOrder,
    readyOrder,
  },
  data(){
    return{
      
    }
  },
  methods:{
  }
}
</script>