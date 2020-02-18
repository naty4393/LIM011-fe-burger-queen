<template>
  <div class="Choose-Table">
    <header1 msg="¿Cuál es tu mesa a servir?"/>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <label class="input-group-text" for="inputGroupSelect01">Options</label>
      </div>
      <select v-model="selected" class="custom-select" id="inputGroupSelect01">
        <option v-for="(el,index) in options" :key="index">{{index}} - {{el.text}}</option>
      </select>
    </div>
    <section> 
      <button type="button" class="btn btn-primary" @click="toinput('1')">1</button>
      <button type="button" class="btn btn-secondary" @click="toinput('2')">2</button>
      <button type="button" class="btn btn-success" @click="toinput('3')">3</button>
      <button type="button" class="btn btn-danger" @click="toinput('4')">4</button>
      <button type="button" class="btn btn-warning" @click="toinput('5')">5</button>
      <button type="button" class="btn btn-info" @click="toinput('6')">6</button>
      <button type="button" class="btn btn-light" @click="toinput('7')">7</button>
      <button type="button" class="btn btn-dark" @click="toinput('8')">8</button>
      <button type="button" class="btn btn-primary" @click="toinput('9')">9</button>
      <button type="button" class="btn btn-secondary" @click="toinput('10')">10</button>
    </section>
  </div>
</template>

<script>
import header1 from '@/components/header2.vue'

export default {
  name: 'choose-table',
  components: {
    header1
  },
  watch:{
    selected: function () {
      this.$store.dispatch('saveTypeOfOrder', {destino: 'selected', value: this.selected})
    }
  },
  data() {
    return {
      number: '',
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'local', text: 'local' },
        { value: 'delivery', text: 'delivery' },
      ]
    }
  },
  methods: {
    toinput(number){
      this.number = number;
      this.$store.dispatch('changeOfOrderTable', this.number );
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
<style scoped lang="sass">
.mt-3{ width: 10px; }
</style>
-->