<template>
    <div>
      <Hero/>
      <br>
      <v-container v-if="registered">
        <CharacterCard v-bind:character="character" v-bind:name="true" v-bind:avatar="true"/>
        <br>
        <v-row class="mt-3">
            <v-col v-for="skill in character.skillsAndModifier" :key="skill.name" cols="4" sm="2" class="traits">
                <SkillsAndModifier v-bind:skill="skill" v-bind:size="'big'"/>
            </v-col>
        </v-row>
        <br>
        <v-row class="mt-3">
          <v-col v-for="trait in character.traits" :key="trait.name" cols="4" md="2" class="traits">
            <Traits v-bind:trait="trait"/>
          </v-col>
          <v-col class="d-none d-md-block mt-md-6" cols="4 offset-1">
            <Skills v-bind:skills="character.skills"/>
            <br>
            <SavingThrows v-bind:savingThrows="character.savingThrows"/>
          </v-col>
          <v-row class="d-md-none d-xs-flex mt-7 mr-2 ml-2">
            <v-col cols="6" class="pa-2"><Skills v-bind:skills="character.skills"/></v-col>
            <v-col cols="6" class="pa-2"><SavingThrows v-bind:savingThrows="character.savingThrows"/></v-col>
          </v-row>
        </v-row>
        <br>
        <br>
        <Quotes v-bind:quotes="character.quotes"/>
        <br>
      </v-container>
      <v-container v-else>
        <Login/>
      </v-container>
    </div>
  </template>
  
  <script>
  import Hero from "@/components/Hero.vue";
  import SkillsAndModifier from "@/components/SkillsAndModifier.vue";
  import Traits from "@/components/Traits.vue";
  import CharacterCard from "@/components/CharacterCard.vue";
  import Skills from "@/components/Skills.vue";
  import SavingThrows from "@/components/SavingThrows.vue";
  import Quotes from "@/components/Quotes.vue";
  import Login from "@/components/Login.vue";
  
  export default {
    name: "Home",
    components: {
      Hero,
      SkillsAndModifier,
      Traits,
      Skills,
      SavingThrows,
      CharacterCard,
      Login,
      Quotes
    },
    computed: {
        registered() {
          return this.$store.state.registered;
        },
        character() {
            return this.$store.state.character[0];
        } 
    }
  };
  </script>
  
  <style scoped>
    .traits {
        position: relative;
    }
  </style>