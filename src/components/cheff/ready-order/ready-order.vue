<template>
    <div>
      <div v-for="({id, name, productList, waitress, day, hour, totalCount}, index) in readyList" :key="index">
        <div class="container">
          <div class="row">{{id}}</div>
          <div class="row">nombre: {{name}} mese@: {{waitress}} fecha: {{day}} - {{hour}}</div>
          <div>
            <table class="table table-list-product">
              <thead class="measures-head">
                <tr>
                  <th scope="col" class="column">cantidad</th>
                  <th scope="col">producto</th>
                  <th scope="col">description</th>
                </tr>
              </thead>
              <tbody v-for="{click, product, description} in productList" :key="click">
                <tr>
                  <th scope="row">{{click}}</th>
                  <td>{{product}}</td>
                  <td>{{description}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { actionGetReadyList } from '../funtion-watch-order.js'

export default {
    name: "ready-Order",
    data(){
      return {
        readyList: this.$store.state.listOfReadyOrders,
        otherthings: actionGetReadyList((data) => {
          /* this.$store.state.listOfReadyOrders = []; */
          data.forEach(product =>  this.$store.dispatch("saveReadyOrders", product))
        })
      }
    },
    methods: {
      go(){
        console.log('ready', this.readyList);
      }
    }  
}
</script>