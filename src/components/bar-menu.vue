<template>
  <section>
    <button type="button" class="btn btn-primary" @click="breakfast">Desayuno</button>
    <button type="button" class="btn btn-secondary">Bebidas</button>
    <button type="button" class="btn btn-success">Hamburguesas</button>
    <button type="button" class="btn btn-danger">Adicional</button>
    <button type="button" class="btn btn-warning">Acompañamiento</button>
    <div v-for="(index,item) of items" :key="index">
      {{ item }}
    </div>
  </section>
</template>

<script>
import db from '@/firebase/init'
import 'firebase'

export default {
  name: 'bar-menu',
  props: {  },
  components: {},
  firebase: {
    items: db.ref('menu') 
  }
  /* methods : { 
    breakfast(){
      console.log(db.ref('menu').get());
      
      db.collection('menu').get()
      .then((resolve)=>{
        console.log('data',resolve.data()); 
        console.log('doc',resolve.doc());
        
      })
    }
  } */
}
</script>
