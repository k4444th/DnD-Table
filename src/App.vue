<template>
  <v-app>
    <Navbar/>  
    <!-- <PreviewHero/> -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import Hero from "@/components/Hero.vue";
import Navbar from "@/components/Navbar.vue";
// import PreviewHero from "@/components/PreviewHero.vue"
export default {
  name: "App",
  components: {
    // Hero,
    Navbar,
    // PreviewHero
  },

  data: () => ({ }),
};
</script>
