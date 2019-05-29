<template>
 <nav class="navbar navbar-expand-lg fixed-top">
  <a class="navbar-brand" href="#">Marvel Universes</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-5">
        <router-link
         to="/"
         tag="li"
         active-class="active"
         exact
         ><a class="nav-link">Home</a></router-link>
        <router-link
         to="/characters"
         tag="li"
         active-class="active"
         ><a class="nav-link">Characters</a></router-link>      
        <router-link
         to="/cartoons"
         tag="li"
         active-class="active"
         ><a class="nav-link">Magazines</a></router-link>   
        <router-link
         to="/about"
         tag="li"
         active-class="active"
         ><a class="nav-link">Contact</a></router-link>         
    </ul>
    <ul class="header-icon ml-auto">
     <li><i class="far fa-user"></i></li>
     <li><i class="fas fa-map-marker-alt"></i></li>
    </ul>
  </div>
</nav>
</template>

<script>

</script>

<style scoped>
.navbar-brand {
 font-size: 1.5rem !important;  
 font-weight: 700;
 color: #fff;
}

.navbar {
 background-color: #000000;
}

.navbar-toggler-icon {
 background: #fff;
}

.nav-link {
 color: #fff;
 font-size: 1.3rem;
}

i {
 color: #fff;
 padding: 0 1rem;
}

*[data-v-61dd7a3d] {
 color: #fff;   
 text-transform: uppercase;
 font-weight: bold;
 font-size: 1.3rem;
 transition: all .5s;
 padding: .3rem .5rem;
}

*[data-v-61dd7a3d]:hover {
 color: red;
}

.header-icon {
 list-style: none;
 align-items: center;
 display: flex;
 cursor: pointer;
}

.header-icon li i {
 font-size: 1.5rem;
}
</style>