<template>
  <div class="productsList">
    <div v-for="({id, name, productList, waitress, day, hour, totalCount}, index) in getlist" :key="index">
      <button class="button-list" @click="goToReadyOrders(id, index, day, hour, waitress, name, productList, totalCount)">
        <div class="container">
          <div class="row">{{id}}</div>
          <div class="row">nombre: {{name}} meser@: {{waitress}} fecha: {{day}} - {{hour}}</div>
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
      </button>
    </div>
  </div>
</template>

<script>
import { actionGetList } from "../funtion-watch-order.js";
import { saveReadyList, deleteOrder } from "@/firebase/function-firestore.js"

export default {
  name: "getOrder",
  data() {
    return {
      getlist: this.$store.state.getLisOfOrders,
      other: actionGetList(data =>
          data.forEach((product) => {
            this.$store.dispatch("saveListOfOrders", product)
          } 
        )
      ),
      cheff: this.$store.state.signInWaitres,
    };
  },
  methods: {
    goToReadyOrders(id, num, day, hour, waitress, name, productList, total) {
      console.log(num);
      this.$store.state.listOfReadyOrders=[];
      saveReadyList(id, num, day, hour, this.cheff, waitress, name, productList, total);
      deleteOrder(id)
        .then(()=>{
          this.getlist.splice(num, 1);
          alert('pedido listo');
          /* actionGetList(data => data.forEach((product) => { this.$store.dispatch("saveListOfOrders", product)}))  */
        })
    }
  }
};
</script>

<style scoped>
/* .productsList {
  font-size: 10px;
  display: flex;
  flex-wrap: wrap;
}
.button-list {
  height: 200px;
  width: 200px;
}
.row {
  width: 100%;
  margin: 0px;
}
.table-list-product{
  width: 180px;
} */
</style>