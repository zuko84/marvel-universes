<template>
 <section class="section-two">
    <div class="section-two-header">
      <h1>Marvel Series</h1>   
    </div>
   <div class="row">
    <div class="col-lg-3 col-sm-12 p-0" v-for="data in arrs" :key="data.id">
     <div class="card text-center w-100">
       <img class="card-img-top" :src="data.image" alt="Magazine">
       <div class="card-body">
        <h5 class="card-title">{{ data.title }}</h5>
        <p class="card-text">Rating: {{ data.rating }}</p>
        <p class="card-text p-0 m-0">Start Year: {{ data.startYear }}</p>
        <p class="card-text p-0">End Year: {{ data.endYear }}</p>
        <p class="card-text">Types: {{ data.type }}</p>
        <a class="btn" :href="data.info" target="_blank">Check It Out</a>
       
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
     size: 'landscape_incredible.jpg',
     randomNum: Math.floor(Math.random() * 8)
    }
  },
  mounted() {
    this.startAPI;  
  },     
  computed: {
   startAPI: function() {
    axios.get(`http(s)://gateway.marvel.com/v1/public/series?apikey=${public_key}`)
    .then((res) => {
             
        this.datas = res.data.data.results.map((items) => {          
            return {
              title: items.title,            
              image: `${items.thumbnail.path}/${this.size}`,   
              type: items.type === '' ? 'No Description' : items.type,
              rating: items.rating === '' ? 'No Rating' : items.rating,
              startYear: items.startYear,
              endYear: items.endYear,
              info: items.urls[0].url
            }    
        });
        
        for(let i = 0; i < 8; i++) {
         let list = this.datas.shift();
        this.arrs.push(list);
        }
        
    }).catch((e) => {
        console.log(e);    
    });  
    
   }
  }

 }
</script>

<style scoped>
 .section-two {
  overflow: hidden;
 }
 
 .section-two-header {
  width: 100%;
  background: #fff;
  padding: 0;
  height: 12rem;
 }
 
 .section-two-header h1 {
  padding: 0;
  padding-top: 2rem;
  font-weight: 700;
  text-align: center;
  font-size: 5.5rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-shadow: 2px 2px 0px #FFFFFF, 5px 4px 0px rgba(0,0,0,0.15);
 }

 .card {
   height: 45rem;   
   border: none;
 }
 
 .card-title {
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  margin: 1.5rem 0;
 }
 
 .card-body p {
  font-size: 1.2rem;
  font-weight: 500;
 }
 
 .btn {
  margin-top: 1.5rem;
 }
</style>