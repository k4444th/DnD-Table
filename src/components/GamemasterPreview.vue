<template>
    <div>
        <v-card class="pa-5 pa-sm-7">
            <div class="text-h5 mb-1">
                    {{ character.name }}
                    <v-btn class="float-right" fab dark small color="primary">
                        <v-icon dark>mdi-pencil-outline</v-icon>
                    </v-btn>
                </div>
                <br>
                <CharacterCard v-bind:character="character" v-bind:name="false" v-bind:avatar="false"/>
                <v-row class="mt-3">
                    <v-col v-for="trait in character.traits" :key="trait.name" cols="4" class="traits">
                        <Traits v-bind:trait="trait"/>
                    </v-col>
                </v-row>
                <v-row class="mt-3">
                    <v-col v-for="skill in character.skillsAndModifier" :key="skill.name" cols="4" md="2" class="traits">
                        <SkillsAndModifier v-bind:skill="skill" v-bind:size="'small'" class="d-none d-md-flex"/>
                        <SkillsAndModifier v-bind:skill="skill" v-bind:size="'big'" class=" d-sm-flex d-md-none"/>
                    </v-col>
                </v-row>
            <br>
        </v-card>
    </div>
  </template>
  
  <script>
  
  import CharacterCard from "@/components/CharacterCard.vue";
  import Traits from "@/components/Traits.vue";
  import SkillsAndModifier from "@/components/SkillsAndModifier.vue";


  export default {
    props: {
        character: Object
    },
    components: {
        CharacterCard,
        Traits,
        SkillsAndModifier
    }
  };
  </script>
  
  <style scoped>
    .traits {
            position: relative;
        }
  </style>