<template>
  <v-app>
    <Navbar/>  
    <v-main>
      <router-view />
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },

  data: () => ({ }),
};
</script>
