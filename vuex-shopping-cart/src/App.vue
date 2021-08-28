<template>
  <div>
    <Navbar/>
    <div class="container mt-6">
      <div class="columns">
        <div class="column is-12 column--align-center">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from './components/core/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Merienda&display=swap');
html,
body {
  height: 100%;
  background: #f2f6fa;
}
.titleNavbar {
  font-family: "Merienda";
  font-size: 44px;
}
</style>