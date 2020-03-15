<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-white mb-4">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-4 mr-auto mt-2">
          <li class="nav-item active mr-4">
            <router-link class="nav-link" :to="{ name: 'post' }"><i class="mr-1 fas fa-plus-square"></i>Postez !</router-link>
          </li>
          <li class="nav-item mr-4">
            <router-link class="nav-link" :to="{ name: 'search' }">Top 10</router-link>
          </li>
          <li class="nav-item mr-4">
            <router-link class="nav-link" :to="{ name: 'search' }">Dico</router-link>
          </li>
        </ul>
        <form class="form-inline">
          <router-link class="nav-link" :to="{ name: 'home' }">Accueil</router-link>
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

    <div class="container mt-2 mb-2 pd-4.pb-4">
      <transition name="fade" appear mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav-link {
  text-decoration: none;
  font-size: 1.2rem;
  color: #00C67E;
}



</style>