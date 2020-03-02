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
      <tfoot>
          <th scope="row"></th>
          <td></td>
          <td>total:</td>
          <td>${{ this.$store.state.sumOrderTotal }}</td>
          <td></td>
      </tfoot>
    </table>
    <modal/>
  </div>
</template>

<script>
import modal from './modal-confirmation.vue'

export default {
  name: 'order',
  components:{
    modal
  },
  data(){
    return {
      productsOfOrder: this.$store.state.productsList,
      num:0,
    }
  },
  methods:{
    deleteProduct(index){
      console.log(index);
      this.productsOfOrder.splice(index, 1);
      this.$store.state.sumOrderTotal=0;
    }
  }
}
</script>