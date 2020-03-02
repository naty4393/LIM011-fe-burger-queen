<template>
  <section>
    <button type="button" class="btn btn-primary" @click="allMenu('desayuno')">Desayuno</button>
    <button type="button" class="btn btn-secondary" @click="allMenu('bebidas')">Bebidas</button>
    <button type="button" class="btn btn-success" @click="allMenu('hamburguesas')">Hamburguesas</button>
    <button type="button" class="btn btn-danger" @click="allMenu('adicional')">Adicional</button>
    <button type="button" class="btn btn-warning" @click="allMenu('acompañamiento')">Acompañamiento</button>
    <transition-group name="list" tag="p">
    <ul v-for="{producto, descripcion, precio} in products" :key="producto" class="list-products">
          <li><button class="button-add" :id="producto" v-on:click="addProduct(producto, descripcion, precio)">+</button>{{ producto }} - {{ descripcion }} - {{ precio }}</li>
    </ul> 
    </transition-group>
    <div>Se ha dado {{ counter }} clicks</div>
  </section>
</template>

<script>
import {db} from '@/firebase/init'
import 'firebase'

export default {
  name: 'bar-menu',
  props: {  },
  components: {},   
  data() {
    return {
      products: [],
      order:[],
      counter: 0,
      disable: true,
    }
  },
  methods : { 
    allMenu(option){
        this.disable=false
        this.products = []
        console.log(db.collection(option));
        db.collection(option).get()
        .then((querySnapshot)=>{
          querySnapshot.forEach(doc => {
            const object = {
              producto: doc.id,
              descripcion: doc.data().descripcion,
              precio: doc.data().precio}
            this.products.push(object);
            this.disable=true;
          });
        }).catch((error) =>{
        console.error('Error:',error)
      })
    },
    addProduct(order, description, price){
      const counteradd = 1;
      const convertPrice = parseInt(price, 10);
      const objectList = { order, description, price, counteradd, convertPrice};
      this.order.push(objectList)
      this.$store.dispatch('saveOrder', objectList);
    }
  }
}
</script>
<style>
  .button-add{
    padding: 5px 7px 5px 7px;
    margin: 9px;
  }
  .list-products{
    margin-top: 20px
  }
  .list-enter-active, .list-leave-active {
  transition: all 10ms;
  }
  .list-enter, .list-leave-to /* .list-leave-active for <2.1.8 */ {
  opacity: 0;
  }
</style>