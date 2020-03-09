<template>
    <div>
        <!-- <div class="input-group mb-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Options</label>
            </div>
            <select v-model="selected" class="custom-select" id="inputGroupSelect01">
                <option v-for="(el,index) in options" :key="index">{{el.text}}</option>
            </select>
        </div>  -->
        <div class="form-check">
            <input v-model="selected" class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="Local" checked>
            <label class="form-check-label" for="exampleRadios1">
                Local
            </label>
        </div>
        <div class="form-check">
            <input v-model="selected" class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="Delivery">
            <label class="form-check-label" for="exampleRadios2">
                Delivery
            </label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'selectOrder',
    data() {
      return {
        selected: null,
      }
  },
    watch:{
        selected: function () {
        this.$store.dispatch('saveTypeOfOrder', this.selected)
        }
    },
}

</script>