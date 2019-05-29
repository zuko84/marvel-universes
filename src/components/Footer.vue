<template>
 <section class="section-footer">
 <div class="row">
  <ul class="nav">
   <li><i class="fab fa-facebook-square"></i></li>
   <li><p>|</p></li>
   <li><i class="fab fa-twitter-square"></i></li>
   <li><p>|</p></li>
   <li><i class="fab fa-google-plus-square"></i></li>
   <li><p>|</p></li> 
   <li><i class="fab fa-instagram"></i></li>   
  </ul>
  
  <ul class="nav">
   <li><p><small>&copy; 2019 SangKim</small></p></li>
   <li><p>|</p></li>
   <li><p><small>Contact Us</small></p></li>
   <li><p>|</p></li>
   <li><p><small>Careers</small></p></li>
   <li><p>|</p></li> 
   <li><p><small>Customer Services</small></p></li>   
  </ul>  
 </div> 
 </section>

</template>

<script>

</script>

<style scoped>
 .section-footer {
  overflow: hidden;
 }

 .row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;

 }

 .nav {  
  display: flex; 
  align-items: center;  
  padding: 0 1rem;
 }
 
 .nav li {
  padding: .5rem 1rem;   
 }
 
 .nav li i {
  font-size: 3rem;
  color: #fff; 
 } 
 
 .nav li p {
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
 }  
</style>