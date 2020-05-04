import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected : '',
    table: 0,
    productsList:[],
    total: 0,
    sumOrderTotal: 0,
    signInWaitres:0,
    getLisOfOrders: [],
    listOfReadyOrders: [],
  },
  mutations: {
    setTypeOrder(state, transaccion){ /*los parametros son el estado y la transacción 
      va a ser un objeto que va a tener dos propiedades*/
      state.selected = transaccion;
    },
    addTable(state,orderTable){
      if (orderTable > 0)
     { state.table = orderTable;}
    },
    addOrder(state, listOrder) {

      let existe = false;
      state.productsList.map( element => {
          if(element.product==listOrder.order){
            element.click++;
            element.total = (element.click) * (element.price)
            existe = true;
          }
      });

      if(!existe){ 
        const total = (listOrder.counteradd)*(listOrder.price);
        state.productsList.push({
          product:listOrder.order,
          description: listOrder.description,
          price: listOrder.price,
          click: listOrder.counteradd,
          total,
        })
      }  
    },
    addSumTotal(state, sumaOfOrderTotal){
      state.sumOrderTotal=0;
      sumaOfOrderTotal.forEach(element => {
        state.sumOrderTotal = state.sumOrderTotal + element.total
      });
    },
    addSingInWaitress(state, waitress){
      state.signInWaitres = waitress
    },
    getListOfOrders(state, orders){
      /* state.getLisOfOrders = []; */
      state.getLisOfOrders.push(orders)
    },
    saveListOfOrders(state, orders){
      /* state.listOfReadyOrders = []; */
      state.listOfReadyOrders.push(orders)
    }
  },
  actions: {
    saveTypeOfOrder(context, transaccion){
      context.commit('setTypeOrder',transaccion)
    },
    changeOfOrderTable(context, orderTable){
      context.commit('addTable', orderTable)
    },
    saveOrder(context, listOrder){
      context.commit('addOrder', listOrder)      
    },
    sumTotalOfTheOrder(context, sumaOfOrderTotal){
      context.commit('addSumTotal', sumaOfOrderTotal)
    },
    addwaitress(context, waitress){
      context.commit('addSingInWaitress', waitress)
    },
    saveListOfOrders(context, orders){
      context.commit('getListOfOrders', orders)
    },
    saveReadyOrders(context, orders){
      this.state.getLisOfOrders=[];  
      context.commit('saveListOfOrders', orders)
    }
  },
  modules: {
  }
})
