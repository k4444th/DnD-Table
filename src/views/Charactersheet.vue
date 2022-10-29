<template>
    <div>
      <Hero/>
      <br>
      <v-container>
        <CharacterCard v-bind:character="character"/>
        <v-row class="mt-3">
            <v-col v-for="skill in character.skills" :key="skill.name" cols="4" sm="2" class="skills">
                <SkillAndModifier v-bind:skill="skill"/>
            </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  import Hero from "@/components/Hero.vue";
  import SkillAndModifier from "@/components/SkillAndModifier.vue";
  import CharacterCard from "@/components/CharacterCard.vue";
  
  export default {
    name: "Home",
    components: {
      Hero,
      SkillAndModifier,
      CharacterCard
    },
    computed: {
        character() {
            return this.$store.state.character[0];
        }  
    }
  };
  </script>
  
  <style scoped>
    .skills {
        position: relative;
    }
  </style>