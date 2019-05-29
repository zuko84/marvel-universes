<template>
 <section class="section-two">
  <div class="w-100">
   <h1 class="text-center">Hottest Characters</h1>
  </div>
  
  <div class="container-fluid p-0">
   <div class="row">
    <div class="col-md-12 d-flex" v-for="arr in arrs">
    
      <div class="left-side">
      <h1>{{ arr.name }}</h1>
      <h5>{{ arr.description }}</h5>
         <a    
          class="btn"
          target="_blank"
          :href="arr.info"
         >Find Out More
         </a>
        </div> 
     
    <div class="right-side">
      <img :src="arr.image" class="section-3-img"></img>
    </div>   
  
    </div>
   </div>
  </div> 
 </section>
</template>

<script>
 import axios from 'axios';
 import { public_key } from '../../../marvel';
 
 export default {
  data() {
    return {
     datas: [],
     arrs: [],
     size: 'landscape_incredible.jpg'     
    };
  },
  mounted() {
    this.startAPI;  
  },     
  computed: {
   startAPI() {
    axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`)
    .then((res) => {             
        this.datas = res.data.data.results.map((items) => {          
            return {
             name: items.name,
             description: items.description === '' ? 'No Description' : items.description,
             image: `${items.thumbnail.path}/${this.size}`,
             info:  items.urls[1].url
            };  
        });
        
        for(let i = 0; i < 4; i++) {
         let list = this.datas.shift();
         this.arrs.push(list);
        }
        
    }).catch((e) => {
        console.log(e);    
    });    
   }
  }
 };
</script>

<style scoped>
 .section-two {
  background: #fff;
    overflow: hidden;
 }
 
 .section-two h1 {
  font-size: 5.5rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1.5px;
  margin-bottom: 6rem;
  padding-top: 3rem;
  text-shadow: 2px 2px 0px #FFFFFF, 5px 4px 0px rgba(0,0,0,0.15);
 }
 
 .left-side {
  background: #fff;
  padding: 5rem;
  width: 50%;
 }
 
 .left-side h1 {
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding-bottom: 2rem;
 }
 
 .left-side h5 {
  font-size: 1.5rem;
  letter-spacing: 1px;
  line-height: 2rem;
 }
 
 .right-side {
  padding: 0;
  width: 50%;
 }
 
 .right-side img {
  display: block;
  object-fit: fill;
  width: 100%;
  height: 100%;
 }
 
 .btn {
  margin-top: 3rem;
 }
</style>