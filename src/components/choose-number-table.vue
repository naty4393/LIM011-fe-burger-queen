<template>
    <div>
      <h4>¿Cuál es la mesa a escoger el pedido?</h4>
      <section class="block-number">
        <button type="button" class="btn btn-primary btn-number" @click="toinput('1')">1</button>
        <button type="button" class="btn btn-secondary btn-number" @click="toinput('2')">2</button>
        <button type="button" class="btn btn-success btn-number" @click="toinput('3')">3</button>
        <button type="button" class="btn btn-danger btn-number" @click="toinput('4')">4</button>
        <button type="button" class="btn btn-warning btn-number" @click="toinput('5')">5</button>
        <button type="button" class="btn btn-info btn-number" @click="toinput('6')">6</button>
        <button type="button" class="btn btn-light btn-number" @click="toinput('7')">7</button>
        <button type="button" class="btn btn-dark btn-number" @click="toinput('8')">8</button>
        <button type="button" class="btn btn-primary btn-number" @click="toinput('9')">9</button>
        <button type="button" class="btn btn-secondary btn-number" @click="toinput('10')">10</button>
        <button type="button" class="btn btn-primary btn-number" @click="toinput('11')">11</button>
        <button type="button" class="btn btn-secondary btn-number" @click="toinput('12')">12</button>
        <button type="button" class="btn btn-success btn-number" @click="toinput('13')">13</button>
        <button type="button" class="btn btn-danger btn-number" @click="toinput('14')">14</button>
        <button type="button" class="btn btn-warning btn-number" @click="toinput('15')">15</button>
        <button type="button" class="btn btn-info btn-number" @click="toinput('16')">16</button>
        <button type="button" class="btn btn-light btn-number" @click="toinput('17')">17</button>
        <button type="button" class="btn btn-dark btn-number" @click="toinput('18')">18</button>
        <button type="button" class="btn btn-primary btn-number" @click="toinput('19')">19</button>
        <button type="button" class="btn btn-secondary btn-number" @click="toinput('20')">20</button>
      </section>
    </div>
</template>

<script>
export default {
    name: 'chooseNumberTable',
    data() {
        return {
        number: '',
        }
    },
    methods: {
        toinput(number){
        this.number = number;
        this.$store.dispatch('changeOfOrderTable', this.number );
        },
    }
}
</script>

<style>
    .block-number{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 10px 50px 10px 50px;
    }
    .btn-number{
        border: 5px solid black;
        margin: 10px 30px 10px 10px;
    }
    .btn-number-1{
        margin: 10px auto 10px auto;
    }
</style>