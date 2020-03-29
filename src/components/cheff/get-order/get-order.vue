<template>
  <div class="productsList">
    <div v-for="{id, name, productList, waitress, date } in getlist" :key="id">
      <button class="button-list">
        <div class="container">
          <div class="row">{{id}}</div>
          <div class="row">nombre: {{name}} mese@: {{waitress}} fecha: {{date}}</div>
          <div v-for="{click, product, description} in productList" :key="click">
            <table class="table table-list-product">
              <thead class="measures-head">
                <tr>
                  <th scope="col" class="column">cantidad</th>
                  <th scope="col">producto</th>
                  <th scope="col">description</th>
                </tr>
              </thead>
              <tbody>
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
import { actionGetList } from "./funtion-watch-order.js";
export default {
  name: "getOrder",
  data() {
    return {
      getlist: this.$store.state.getLisOfOrders,
      other: actionGetList(data =>
        data.forEach(product =>
          this.$store.dispatch("saveListOfOrders", product)
        )
      )
    };
  },
  methods: {
    go() {
      console.log(this.getlist);
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