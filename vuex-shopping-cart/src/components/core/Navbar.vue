<template>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="principalNavbar"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="principalNavbar" class="navbar-menu">
          <div class="navbar-start">
              <div class="navbar-item titleNavbar">
                  Lash Artist Products
              </div>
          </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/aboutme" class="button is-primary">
               <strong> Home</strong>
              </router-link>
              <router-link to="/inventory" class="button is-primary">
               <strong> Productos</strong>
              </router-link>
              <router-link to="/cart"  class="button is-warning">   <p>
    Carrito:
    <span> {{cartQuantity}}</span> </p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>
<script>
import {mapGetters} from "vuex"
export default {
    name: "Navbar",
    computed: {
    ...mapGetters([
    'cartQuantity'
    ])
    },
        created() {
            this.$store.dispatch("getCartItems");
        }
}
</script>