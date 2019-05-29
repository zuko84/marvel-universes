<template>
 <section class="section-four">
  <div class="section-four-heading">
     <h1>Marvel Events</h1>
  </div>
  <div class="row">
   <div class="col-md-6 col-sm-12 zero" v-for="data in arrs">
    <div class="card text-center">
     <img class="card-img-top" :src="data.image" alt="Card image cap">
      <div class="card-body">
       <h5 class="card-title">{{ data.title }}</h5>
       <p class="card-text">{{ data.description }}</p>
       <a :href="data.info" target="_blank" class="btn">More Info</a>
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
    }
  },
  mounted() {
    this.startAPI;  
  },     
  computed: {
   startAPI() {
    axios.get(`https://gateway.marvel.com/v1/public/events?apikey=${public_key}`)
    .then((res) => {
        this.datas = res.data.data.results.map((items) => {          
            return {
              title: items.title,
              description: items.description,
              image:  `${items.thumbnail.path}/${this.size}`,
              info: items.urls[0].url
            }    
        });
        
        for(let i = 0; i <= 1; i++) {
         let list = this.datas.pop();
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
 .section-four {
  overflow: hidden; 
 }
 
 .section-four-heading {
  background: #fff;
  text-align: center;
 }
 
  .section-four-heading h1 {
   margin: 0;
   font-size: 5.5rem;
   text-transform: uppercase;
   font-weight: 700;
   letter-spacing: 1.5px;
   padding: 3rem 0;
   text-shadow: 2px 2px 0px #FFFFFF, 5px 4px 0px rgba(0,0,0,0.15);
   
  }
 
 .zero {
  padding: 0;
  margin: 0;
 }
 
 .card {
  border: none;
 }
 
 .card-body {
  height: 38rem;
 }
 
 .card-title {
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 2rem 0;
 }
 
 .card-text {
  font-size: 1.5rem;
  font-weight: 300;
  padding: 4rem;
  line-height: 3rem;
 }
 
 
</style>