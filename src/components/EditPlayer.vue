<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="700">
            <template v-slot:activator="{ on, attrs }">
                <v-btn class="float-right" fab dark small color="primary" v-bind="attrs" v-on="on">
                    <v-icon dark>mdi-pencil-outline</v-icon>
                </v-btn>
            </template>
            <v-card>
                <v-toolbar color="primary" dark><span class="text-h5">Info: {{ character.name }}</span></v-toolbar>
                <v-card-text class="pa-sm-12 pa-6">
                    <v-row>
                        <v-col class="col-12 col-md-4 offset-md-1">
                            <br class="d-md-none d-xs-flex">
                            <v-row>
                                <v-text-field label="Race" v-model="character.generalInformation.race"></v-text-field>
                            </v-row>
                            <v-row>
                                <v-text-field label="Class" v-model="character.generalInformation.class"></v-text-field>
                            </v-row>
                            <v-row>
                                <v-text-field label="Level" v-model="character.generalInformation.level"></v-text-field>
                            </v-row>

                            <br><br><br>

                            <v-row>
                                <v-text-field label="Hitpoints" v-model="character.combats.hitpoints"></v-text-field>
                            </v-row>
                            <v-row>
                                <v-text-field label="XP" v-model="character.combats.xp"></v-text-field>
                            </v-row>
                            <v-row>
                                <v-text-field label="Hit Dice" v-model="character.combats.hitdice"></v-text-field>
                            </v-row>

                            <br><br><br>

                            <v-row v-for="trait in character.traits" :key="trait.name">
                                <v-text-field :label="trait.name" v-model="trait.value"></v-text-field>
                            </v-row>

                            <br>

                            <div class="mt-7 mr-2 ml-2">
                                <Skills v-bind:skills="character.skills"/>
                                <br>
                                <SavingThrows v-bind:savingThrows="character.savingThrows"/>
                            </div>

                            <br>
                        </v-col>
                        <v-col class="col-12 col-md-5 offset-md-1">
                            <v-row v-for="skill in character.skillsAndModifier" :key="skill.name">
                                <v-col cols="5">
                                    <h4 class="float-left">{{ skill.name }}: </h4>
                                </v-col>
                                <v-col cols="7">
                                    <v-text-field label="Skill" v-model="skill.skill"></v-text-field>
                                    <v-text-field label="Modifier" v-model="skill.modifier"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card-text>
                <br>
                <v-card-actions class="justify-end">
                    <v-btn text @click="dialog = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
  
<script>

import Skills from "@/components/Skills.vue";
import SavingThrows from "@/components/SavingThrows.vue";

  export default {
    data () {
      return {
        dialog: false,
      }
    },
    props: {
        character: Object
    },
    computed: {
        dark() {
            return this.$vuetify.theme.dark
        }    
    },
    components: {
        Skills,
        SavingThrows
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
    .white-input {
        color: white;
    }
    .grey-input {
        color: gray;
    }
  </style>