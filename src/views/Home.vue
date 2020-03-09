<template>
  <div class="home">
    <div class="title">
      <header1 msg="Bienvenid@ a Burger Queen"/>
    </div>
    <div class="container container-home">
      <div class="row row-cols-2">
        <div class="col col-imagen">
          <img alt="Vue logo" src="../assets/hamburguesa.png">
        </div>
        <div class="col input-user">
          <form action="" @submit="checkForm">
            <inputUser/>
          </form>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
// @ is an alias to /src
import header1 from '@/components/header1.vue'
import inputUser from '@/components/input-user.vue'

export default {
  name: 'Home',
  components: {
    header1,
    inputUser,
  },
  methods: {
    checkForm: function (e) {
      e.preventDefault();
    }
  }
}
</script>

<style>
.title{
  text-align: center;
}
.container-home{
  display: flex;
  justify-content: space-around;
}
.col-imagen{
  display: flex;
  justify-content: center;
  align-content: center;
}
img{
  width: 450px;
  height: auto;
}
.input-user{
  display:flex;
  justify-content: center;
  align-content: center;
}
</style>
