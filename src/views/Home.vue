<template>
  <div class="home">
    <header1 msg="Bienvenid@ a Burger Queen"/>
    <img alt="Vue logo" src="../assets/hamburguesa.png">
    <form action="">
    </form>
  </div>  
</template>

<script>
// @ is an alias to /src
import header1 from '@/components/header1.vue'

export default {
  name: 'Home',
  components: {
    header1
  }
}
</script>

<style lang="sass" scoped>

</style>
