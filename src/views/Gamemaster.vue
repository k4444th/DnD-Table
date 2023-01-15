<template>
    <div>
      <Hero/>
      <br>
      <v-container v-if="registered">
        <Dice class="d-flex justify-center"/>
        <br>
        <v-row>
            <v-col v-for="character in characters" :key="character[0]" class="col-12 col-sm-6">
              <GamemasterPreview v-bind:character="character"/>
            </v-col>
        </v-row>
      </v-container>
      <v-container v-else>
        <Login/>
      </v-container>
      <br>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Hero from "@/components/Hero.vue";
  import Login from "@/components/Login.vue";
  import GamemasterPreview from "@/components/GamemasterPreview.vue";
  import Dice from "@/components/Dice.vue";
  
  export default {
    name: "Gamemaster",
    components: {
        Hero,
        Login,
        Dice,
        GamemasterPreview,
    },
    computed: {
        registered() {
          return this.$store.state.registered;
        },
        characters() {
            return this.$store.state.character;
        } 
    }
  };
  </script>

  <style scoped>
        .traits {
            position: relative;
        }
  </style>