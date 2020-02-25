import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected : '',
    table: 0,
    productsList:[],
    total: 0,
    db:{},
  },
  getters:{
    database: state => state.db
  },
  mutations: {
    set(state, transaccion){ /*los parametros son el estado y la transacción 
      va a ser un objeto que va a tener dos propiedades*/
      state[transaccion.destino] = transaccion.value
    },
    addTable(state,orderTable){
      if (orderTable > 0)
     { state.table = orderTable;}
    },
    'SET_DATABASE': (state, db) => {
      state.db = db
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
    }
  },
  actions: {
    saveTypeOfOrder(context, transaccion){
      context.commit('set',transaccion)
    },
    changeOfOrderTable(context, orderTable){
      context.commit('addTable', orderTable)
    },
    saveOrder(context, listOrder){
      context.commit('addOrder', listOrder)      
    },
  },
  modules: {
  }
})
