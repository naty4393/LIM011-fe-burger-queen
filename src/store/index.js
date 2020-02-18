import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected : '',
    table: 0,
  },
  mutations: {
    set(state, transaccion){ /*los parametros son el estado y la transacción 
      va a ser un objeto que va a tener dos propiedades*/
      state[transaccion.destino] = transaccion.value
    },
    add(state,orderTable){
      if (orderTable > 0)
     { state.table = orderTable;}
    },
  },
  actions: {
    saveTypeOfOrder(context, transaccion){
      context.commit('set',transaccion)
    },
    changeOfOrderTable(context, orderTable){
      context.commit('add', orderTable)
    }
  },
  modules: {
  }
})
