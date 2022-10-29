<template>
    <v-layout align-center justify-center>
        <v-flex class="text-center">
            <img src="./../../public/img/shapes/traits1.svg" width="112" alt="" class="traits-shape d-flex d-sm-none" :class="dark ? 'dark-theme': ''"/>
            <img src="./../../public/img/shapes/traits1.svg" width="120" alt="" class="traits-shape d-none d-sm-flex d-md-none" :class="dark ? 'dark-theme': ''"/>
            <img src="./../../public/img/shapes/traits1.svg" width="150" alt="" class="traits-shape d-none d-md-flex d-lg-none" :class="dark ? 'dark-theme': ''"/>
            <img src="./../../public/img/shapes/traits1.svg" width="170" alt="" class="traits-shape d-none d-lg-flex d-xl-none" :class="dark ? 'dark-theme': ''"/>
            <img src="./../../public/img/shapes/traits1.svg" width="170" alt="" class="traits-shape d-none d-xl-flex" :class="dark ? 'dark-theme': ''"/>
            {{ skill.name }}
            <br>
            <span class="modifier pt-3 pr-3 pt-sm-5">{{ skill.modifier }}</span>
            <br> 
            <span class="skill pb-3">{{ skill.skill }}</span>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        props: {
            skill: Object
        },
        computed: {
            dark() {
                return this.$vuetify.theme.dark
            }  
        }
    };
</script>

<style scoped>
    .traits-shape.dark-theme {
        object-fit: contain;
        filter: 
        invert(100%);
    }
    .traits-shape {
        padding-left: 10px
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