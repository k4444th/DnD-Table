<template>
    <div>
      <Hero/>
      <br>
      <v-container>
        <v-card class="mx-auto" outlined>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h5 mb-1">{{ character.name }}</v-list-item-title>
                    <div class="mb-5">
                        <v-chip class="mr-2 mr-sm-5 mt-3">Race: {{ character.generalInformation.race }}</v-chip>
                        <v-chip class="mr-2 mr-sm-5 mt-3">Class: {{ character.generalInformation.class }}</v-chip>
                        <v-chip class="mt-3">Level: {{ character.generalInformation.level }}</v-chip>
                        <br>
                    </div>
                    <hr class="dashed">
                    <v-list-item-subtitle class="combats mt-3">
                        <div class="mr-5">
                            <v-icon>mdi-shield-sword-outline</v-icon> Hitpoints: {{ character.combats.hitpoints }}
                        </div>
                        <div class="mr-5">
                            <v-icon>mdi-dice-d20-outline</v-icon> XP: {{ character.combats.xp }}
                        </div>
                        <div>
                            <v-icon>mdi-dice-5-outline</v-icon> Hit Dice: {{ character.combats.hitdice }}
                        </div>
                    </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar tile size="120" color="grey" class="d-none d-sm-flex"></v-list-item-avatar>
            </v-list-item>
        </v-card>
        <v-row class="mt-3">
            <v-col v-for="trait in character.traits" :key="trait.name" cols="4" sm="2" class="traits">
                <v-layout align-center justify-center>
                    <v-flex class="text-center">
                        <img src="./../../public/img/shapes/traits1.svg" width="112" alt="" class="traits-shape d-flex d-sm-none" :class="dark ? 'dark-theme': ''"/>
                        <img src="./../../public/img/shapes/traits1.svg" width="120" alt="" class="traits-shape d-none d-sm-flex d-md-none" :class="dark ? 'dark-theme': ''"/>
                        <img src="./../../public/img/shapes/traits1.svg" width="150" alt="" class="traits-shape d-none d-md-flex d-lg-none" :class="dark ? 'dark-theme': ''"/>
                        <img src="./../../public/img/shapes/traits1.svg" width="170" alt="" class="traits-shape d-none d-lg-flex d-xl-none" :class="dark ? 'dark-theme': ''"/>
                        <img src="./../../public/img/shapes/traits1.svg" width="170" alt="" class="traits-shape d-none d-xl-flex" :class="dark ? 'dark-theme': ''"/>
                        {{ trait.name }}
                        <br>
                        <span class="modifier pt-3 pr-3 pt-sm-5">{{ trait.modifier }}</span>
                        <br> 
                        <span class="skill pb-3">{{ trait.skill }}</span>
                    </v-flex>
                </v-layout>
            </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  import Hero from "@/components/Hero.vue";
  
  export default {
    name: "Home",
    components: {
      Hero,
    },
    computed: {
        character() {
            return this.$store.state.character[0];
        },
            dark() {
            return this.$vuetify.theme.dark
        }    
    }
  };
  </script>
  
  <style scoped>
    hr.dashed {
        border: 1px dashed grey;
    }
    .combats {
        display: flex !important;
    }
    .traits-shape.dark-theme {
        object-fit: contain;
        filter: 
        invert(100%);
    }
    .traits-shape {
        padding-left: 10px
    }
    .traits {
        position: relative;
    }
    .modifier {
        position: absolute;
        font-size: 40px;
        transform: translate(-25%, -180%);

    }
    .skill {
        position: absolute;
        transform: translate(-15%, -200%);
        font-size: 20px;
    }
  </style>