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
    <footer>create by Natalia LP : Frond-end Developer</footer>
  </div>
</template>

<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<script>
export default {

}
</script>

<style>
@import url("../node_modules/bootstrap/dist/css/bootstrap.css");

@media (min-width: 600px) { 
html{
  height: 100%;
  width: 100%;
  position: relative;
}
footer {
  text-align: center;
  margin-top: 400px;
  background-color: rgba(212, 114, 33, 0.849);
  bottom: 0;
  width: 100%;
  height: 20px;
  color:black;
}
}
</style>