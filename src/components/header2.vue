<template>
  <div class="Ctable">
    <h1>{{ msg }}</h1>
    <h5>{{ asignation }}</h5>
  </div>
</template>

<script>
export default {
  name: 'header2',
  props: {
    msg: String,
    asignation: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>