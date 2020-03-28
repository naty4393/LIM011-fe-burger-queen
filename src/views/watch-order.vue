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
          <header>Pedidoslistos</header>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getOrder from '../components/get-order.vue'
export default {
  name: 'watch-order',
  components:{
    getOrder,
  },
  data(){
    return{

    }
  },
  methods:{
  }
}
</script>