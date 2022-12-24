<template>
    <div>
      <Hero/>
      <br>
      <v-container>
        <Dice/>
      </v-container>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Hero from "@/components/Hero.vue";
  import Dice from "@/components/Dice.vue";
  
  export default {
    name: "Tv",
    components: {
      Hero,
      Dice
    }
  };
  </script>
  