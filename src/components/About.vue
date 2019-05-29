<template>
 <div class="row bg-light">
  <div class="col-md-6 about-image-box">
  <img src="https://png.pngtree.com/element_origin_min_pic/16/12/29/2ab061bdf4951a087f37c126800c7fab.jpg"></img>
  </div>
  
  <div class="col-md-6 contact-us">
   <h1>Contact </h1>
   <p>Need assistance with your Microsoft product? We’ll get you 
   the help you need.</p>
   <button class="btn">Get Started</button>
  </div>
  
  <div class="col-md-12 support">
   <h1>More support options</h1>  
  </div>
 
  <div class="col-md-4 about-column">
  <a href="#">Business, IT & developer</a>
  <p>Small & medium businesses, enterprises & partners, 
     IT professionals, and developers.</p>
  </div>
  
  <div class="col-md-4 about-column">
  <a href="#">Business, IT & developer</a>
  <p>Small & medium businesses, enterprises & partners, 
     IT professionals, and developers.</p>
  </div>
  
  <div class="col-md-4 about-column">
  <a href="#">Business, IT & developer</a>
  <p>Small & medium businesses, enterprises & partners, 
     IT professionals, and developers.</p>
  </div>  
  
  <div class="col-md-4 about-column">
  <a href="#">Business, IT & developer</a>
  <p>Small & medium businesses, enterprises & partners, 
     IT professionals, and developers.</p>
  </div>  
  
  <div class="col-md-4 about-column">
  <a href="#">Business, IT & developer</a>
  <p>Small & medium businesses, enterprises & partners, 
     IT professionals, and developers.</p>
  </div>  
  
  <div class="col-md-4 about-column">
  <a href="#">Business, IT & developer</a>
  <p>Small & medium businesses, enterprises & partners, 
     IT professionals, and developers.</p>
  </div>    
  
 </div>
</template>

<script>
 export default {
  
 }
</script>

<style scoped>
 .about-image-box img {
  display: block;
  width: 30rem;
  height: 30rem;
  border-radius: 100%;
  border: 3px solid #000000;
  margin: 6rem auto;
 }
 
 .contact-us {
  margin: auto 0;
  text-align: center;
 }
 
 .contact-us h1 {
  text-transform: uppercase;
  font-size: 4rem;
  letter-spacing: 1.5px;
 }
 
 .contact-us p {
  font-size: 1.8rem;
  font-weight: 300;
  padding: 3rem;
 }
 
 .support {
  text-align: center;
  margin: 8rem 0;
  border-top: 1px solid #efefef;
  padding-top: 6rem;
 }
 
 .support h1 {
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
 }
 
 .about-column {
  text-align: center;
  margin: 8rem 0;
  padding: 3rem 6rem;
 }
 
 .about-column p {
  font-size: 1.8rem;
  font-weight: 300;
  padding: 3rem;
  line-height: 3.5rem;
 }
 
 .about-column a {
  font-size: 2rem;
  font-weight: 300;
 }
 
.btn {
  padding: 1rem 2rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  background: red;
  color: #fff;
  transition: all .2s;
  letter-spacing: 1px;
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