<template>
	<div>
    <div>
      <button id="button-modal" @click="sendPedido()">
        Enviar
      </button>
    </div>
	<div class="container-modal" v-if="windowModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">Pedido: {{this.$store.state.selected}} - Mesa: {{this.$store.state.table}}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" @click="windowModal=false">&times;</span>
                  </button>
              </div>
            <div class="modal-body">
							<div>
								<label for="">Nombre del Cliente:</label>
								<input type="text" name="nameforORder" id="nameforORder" v-model="nameforORder">
							</div>
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
										<th scope="row">{{ click }}</th>
										<td>{{ product }}<!-- pedido --></td>
										<td>${{ price }}<!-- precio unitario --></td>
										<td>${{ total }}<!-- total --></td>
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
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="windowModal=false">cancelar</button>
                <button type="button" class="btn btn-primary" @click="sendOrder(nameforORder,productsOfOrder, $store.state.sumOrderTotal, inWaitress, fecha, hour)">Confirmar envio</button>
            </div>
            </div>
        </div>
    </div>
	</div>
</template>

<script>
import {addOrder} from '@/firebase/function-firestore.js'

export default {
	name: 'modal',
  props: {
	},
	data(){
    return {
			productsOfOrder: this.$store.state.productsList,
			inWaitress: this.$store.state.signInWaitres,
			nameforORder:'',
			oderComplete:[],
      windowModal:false,
      fecha: this.dayOfOrder(),
      hour: this.hourOfOrder(),
    }
	},
	methods:{
    sendOrder(nameClient, listOrder, sumtotal, waitress, day, hour){
      addOrder(nameClient, listOrder, sumtotal, waitress, day, hour);
      this.$router.push('choose-table');
      this.$store.state.productsList = [];
      this.$store.state.sumOrderTotal = 0;
		},
    sendPedido(){
      this.windowModal=true;
      console.log(this.productsOfOrder);
      this.$store.dispatch('sumTotalOfTheOrder',this.productsOfOrder );
    },
    dayOfOrder(){
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const dayOfOrder = `${day}/${month}/${year}`;
      return dayOfOrder; 
    },
    hourOfOrder(){
      const date = new Date();
      const hours = +date.getHours()
      const minutes = +date.getMinutes()
      const seconds = +date.getSeconds()
      const hourOfOrder = `${hours}:${minutes}:${seconds}`;
      return hourOfOrder; 
    }
  }
}
</script>

<style>
.container-modal{
	background: rgba(0, 0, 0, 0.5);
  top:0;
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
}
.modal-dialog{
  padding: 10px;
  width: 100%;
  margin: 40px auto;
  background: white;
  box-shadow: 0px 0px 10px black;
}
.modal-content{
  background: white;
}
.modal-header{
  background: coral;
}
</style>