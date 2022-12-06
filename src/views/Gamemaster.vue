<template>
    <div>
      <Hero/>
      <br>
      <v-container v-if="registered">
        <h1>Gamemaster</h1>
      </v-container>
      <v-container v-else>
        <Login/>
      </v-container>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Hero from "@/components/Hero.vue";
  import Login from "@/components/Login.vue";
  
  export default {
    name: "Gamemaster",
    components: {
      Hero,
      Login
    },
    computed: {
        registered() {
          return this.$store.state.registered;
        }
    }
  };
  </script>