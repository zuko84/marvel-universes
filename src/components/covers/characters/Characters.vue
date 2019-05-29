<template>
 <div class="row">  
  <div class="col-md-6 col-sm-12 character-box" v-for="data in datas">
   <div class="card">
    <img class="card-img-top" :src="data.image" alt="Characters Images">
    <div class="card-body text-center">
     <h5 class="card-title">{{ data.name }}</h5>
     <p class="card-text">{{ data.description }}</p>
     <a href="#" class="btn">Find Out More</a>
    </div>
   </div>
  </div>  
 </div>
</template>

<script>
 import axios from 'axios';
 import { public_key } from '../../../../marvel';
 
 export default {
  data() {
    return {
     datas: [],
     size: 'landscape_incredible.jpg'
    }
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
             image: `${items.thumbnail.path}/${this.size}` === '' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png' : `${items.thumbnail.path}/${this.size}`   
            }    
        });
        
    }).catch((e) => {
        console.log(e);    
    });    
   }
  }
 }
</script>

<style scoped>
 .character-box {
  margin: 15px 0; 
 }
 
 .card-body {
  height: 35rem;
 }
 
 .card-title {
  text-transform: uppercase;
  font-size: 3rem;
  letter-spacing: 1.5px;
  padding: 2rem 0;
 }
 
 .card-text {
  font-size: 1.6rem;
  letter-spacing: 1px;
  font-weight: 500;
  padding: 2rem 1rem;
 }
</style>