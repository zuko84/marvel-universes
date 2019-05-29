<template>
 <div class="container-fluid p-0">
  <app-header></app-header>
   
  <div class="col-lg-12 p-0 m-0"> 
   <router-view></router-view>
  </div>
  
  <app-footer></app-footer>
 </div>
</template>

<script>
 import Header from './components/Header.vue';
 import Footer from './components/Footer.vue';

 export default {
  components: {
   'app-header': Header,
   'app-footer': Footer
  }
 }
</script>

<style type="text/css">
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit; 
}

html {
  font-size: 62.5%; }

body {
  box-sizing: border-box;
  background-image: url(https://wallpaperplay.com/walls/full/c/e/b/323958.jpg);
  background-size: cover;
  background-attachment: fixed;
  padding: 0 5rem;
}

::selection {
  background-color: red;
  color: #fff; 
}

.btn:link, .btn:visited {
 color: #fff;
 background: red;
 border: none;
 padding: 1rem 2rem;
 font-size: 1.5rem;
 text-transform: uppercase;
 letter-spacing: 1px;
 transition: all .2s;
}

.btn:hover {
  transform: translateY(-0.3rem);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); 
}

.btn:active, .btn:focus {
 outline: none;
 transform: translateY(-0.1rem);
 box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2); 
 background: red;
}
  
  
</style>