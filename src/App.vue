<template>
  <div id="app">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <!-- <a  href="/"><img src="../assets/logo2.png"></a> -->
        <a class="navbar-brand" href="/">Burger Queen</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Inicio <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">¿Quiénes somos?</router-link>
            </li>
          </ul>
        </div>
      </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@import url("../node_modules/bootstrap/dist/css/bootstrap.css");

@media (min-width: 768px) { 

}
</style>