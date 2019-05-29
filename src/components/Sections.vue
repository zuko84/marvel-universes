<template>
 <div class="container-fluid p-0">
  <app-section-one></app-section-one>
  <app-section-two></app-section-two>
  <app-section-three></app-section-three>
  <app-section-four></app-section-four>
 </div>
</template>

<script>
 import SectionOne from './sections/SectionOne.vue';
 import SectionTwo from './sections/SectionTwo.vue';
 import SectionThree from './sections/SectionThree.vue';
 import SectionFour from './sections/SectionFour.vue';

 export default {
  components: {
      'app-section-one': SectionOne,
      'app-section-two': SectionTwo,
      'app-section-three': SectionThree,
      'app-section-four': SectionFour,
  }
 }
</script>

<style>

</style>