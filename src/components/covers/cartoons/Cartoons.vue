<template>
 <div class="row">  
  <div class="col-md-6 col-sm-12 character-box" v-for="data in datas">
   <div class="card">
    <img class="card-img-top" :src="data.image" alt="Characters Images">
    <div class="card-body text-center" style="height: 40rem;">
     <h5 class="card-title">{{ data.title }}</h5>
     <p class="card-text">Issue#: {{ data.issue }}</p>
     <p class="card-text">Characters: {{ data.characters}}</p>
     <a href="#" class="btn">Click</a>

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
    axios.get(`http://gateway.marvel.com/v1/public/comics?apikey=${public_key}`)
    .then((res) => {
        this.datas = res.data.data.results.map((items) => {          
            return {
             title: items.title,            
             image: `${items.thumbnail.path}/${this.size}`,   
             issue: items.issueNumber,
             characters: items.characters.items.map((item) => {
                return {
                 name: item.name
                 }
                })          
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
 
 .card-img-top {
  display: block;
  width: 100%;
  object-fit: fill;  
 }
</style>