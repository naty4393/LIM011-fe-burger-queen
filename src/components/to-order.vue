<template>
  <div>
    <h5>Tipo de Pedido: {{ $store.state.selected }}</h5>
    <h5>Mesa: {{ $store.state.table }}</h5>  
    <br>
    <br>
    <table class="table table-sm">
      <thead>
        <tr>
          <th scope="col">cantidad</th>
          <th scope="col">pedido</th>
          <th scope="col">P. Uni.</th>
          <th scope="col">Total</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="({product, price, click, total}, index) in productsOfOrder" :key="index">
          <th scope="row">{{ click }}<!-- cantidad --></th>
          <td>{{ product }}<!-- pedido --></td>
          <td>${{ price }}<!-- precio unitario --></td>
          <td>${{ total }}<!-- total --></td>
          <td><button @click="deleteProduct(index)">Eliminar</button></td>
        </tr>
      </tbody>
    </table>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
        Enviar
      </button>
      <div>
        <modal/>
      </div>
  </div>
</template>

<script>
import modal from './modal-confirmation'
export default {
	name: 'order',
  props: {
  },
  components:{
    modal
  },
  data(){
    return {
      productsOfOrder: this.$store.state.productsList
    }
  },
  methods:{
    sendList(){
      console.log(this.productsOfOrder);
    },
    deleteProduct(index){
      console.log(index);
      this.productsOfOrder.splice(index, 1);
    }
  }
}
</script>