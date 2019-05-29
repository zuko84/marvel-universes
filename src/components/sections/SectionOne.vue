<template>
 <section class="section-one">
  <div class="col-sm-12 header-bg">
 
   <div class="header-textBox">
    <h1>Marvel Universe Characters</h1>
   </div>
  
   <ul class="ul-box">
    <li>
      <p>
       <span class="circle">1</span>
       <span class="text">This is Portfolio Site</span>
      </p> 
    </li>
    <li>
      <p>
       <span class="circle">2</span>
       <span class="text">Built with Marvel API</span>
      </p> 
    </li>
    <li>
      <p>
       <span class="circle">3</span>
       <span class="text">
        <a 
        class="git-link"
        target="_blank"
        :href="link"
        >GitHub Pages
        </a>
       </span>
      </p> 
    </li>   

   </ul>
  
  </div> 
 </section>
</template>

<script>

 export default {
  data() {
   return {
    link: 'https://github.com/zuko84/marvel-universes'
   }
  }
 }
</script>

<style scoped>
 .header-bg {
  background-image: url(https://wallpapercave.com/wp/5moTV2H.jpg); 
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 90vh;
  padding: 0;
  margin: 0;
  position: relative;
 }
 
 .header-textBox {
   position: absolute;
   top: 40%;
   left: 5%;
 }
 
 .header-textBox h1 {
  font-size: 3.5rem;   
  letter-spacing: 1px;
  color: #FFFFFF;
  text-shadow: #FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px, 2px 2px 2px rgba(244, 78, 66, 0), 2px 2px 2px rgba(244, 78, 66, 0);
 }
 
 .ul-box {
  position: absolute;
  top: 90%;
  left: 5%;
  display: flex;
  list-style: none;
 }
 
 .circle {
  border: 3px solid #fff;
  border-radius: 10px 100px / 120px;
  padding: .5rem 1.5rem;
  margin-right: .5rem;
  color: #d6d6d6;
  font-weight: 700;
  font-size: 1.5rem;
 }
 
 .text {
  font-size: 1.3rem;
  color: #d6d6d6;
  font-weight: 500;
  padding: .5rem .8rem;
  background: #000000;
 }
 
 .git-link {
  color: #fff;
 }
 
</style>