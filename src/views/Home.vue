<template>
  <div class="home">
    <header1 msg="Bienvenid@ a Burger Queen"/>
    <div class="container">
      <div class="row row-cols-2">
        <div class="col">
          <img alt="Vue logo" src="../assets/hamburguesa.png">
        </div>
        <div class="col">
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

<style lang="sass" scoped>

</style>
