<template>
    <v-card class="pa-5 pa-sm-7">
        <div class="text-h5 mb-1">
            <EditPlayer v-bind:character="character"/>
            {{ character.name }}
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
        <div class="d-md-none d-xs-flex mt-7 mr-2 ml-2">
            <Skills v-bind:skills="character.skills"/>
            <br>
            <SavingThrows v-bind:savingThrows="character.savingThrows"/>
        </div>
        <v-row class="d-none d-md-block mt-md-6">
            <v-col cols="6" class="pa-2 float-left"><Skills v-bind:skills="character.skills"/></v-col>
            <v-col cols="6" class="pa-2 float-left"><SavingThrows v-bind:savingThrows="character.savingThrows"/></v-col>
            <br><br>
        </v-row>
        <br>
        <v-dialog transition="dialog-bottom-transition" max-width="600">
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" block v-bind="attrs" v-on="on">Quotes</v-btn>
            </template>
            <template v-slot:default="dialog">
                <v-card>
                    <v-toolbar color="primary" dark><span class="text-h5">Quotes</span></v-toolbar>
                    <br>
                    <Quotes v-bind:quotes="character.quotes"/>
                    <v-card-actions class="justify-end">
                    <v-btn text @click="dialog.value = false">Close</v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>
    </v-card>
  </template>
  
  <script>
  
  import CharacterCard from "@/components/CharacterCard.vue";
  import Traits from "@/components/Traits.vue";
  import SkillsAndModifier from "@/components/SkillsAndModifier.vue";
  import Skills from "@/components/Skills.vue";
  import SavingThrows from "@/components/SavingThrows.vue";
  import EditPlayer from "./EditPlayer.vue";
  import Quotes from "./Quotes.vue";

  export default {
    props: {
        character: Object
    },
    components: {
        CharacterCard,
        Traits,
        SkillsAndModifier,
        Skills,
        SavingThrows,
        EditPlayer,
        Quotes
    }
  };
  </script>
  
  <style scoped>
    .traits {
        position: relative;
    }
    .float-left {
        float: left;
    }
  </style>