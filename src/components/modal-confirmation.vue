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
										<th scope="row">{{ click }}<!-- cantidad --></th>
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
                <button type="button" class="btn btn-primary" @click="sendOrder(nameforORder,productsOfOrder, $store.state.sumOrderTotal, inWaitress, new Date())">enviar</button>
            </div>
            </div>
        </div>
    </div>
	</div>
</template>

<script>
import {db} from '@/firebase/init'
import 'firebase'

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
    }
	},
	methods:{
    sendOrder(nameClient, listOrder, sumtotal, waitress, date){
			db.collection('pedidos').add({
				waitress,
				nameClient,
				listOrder,
				sumtotal,
				date,
			})
      this.$router.push('choose-table');
      this.$store.state.productsList = [];
      this.$store.state.sumOrderTotal = 0;
		},
		sendPedido(){
			this.windowModal=true;
			console.log(this.productsOfOrder);
			this.$store.dispatch('sumTotalOfTheOrder',this.productsOfOrder );
    },
	}
}
</script>

<style>
/* .container-modal{
	background: rgba(0, 0, 0, 0.5)
} */
</style>