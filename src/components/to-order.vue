<template>
  <div>
    <h5>Tipo de Pedido: {{ $store.state.selected }}</h5>
    <h5>Mesa: {{ $store.state.table }}</h5>    
  </div>
</template>

<script>
export default {
	name: 'order',
  props: {
  }
}
</script>