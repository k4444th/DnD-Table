<template>
    <v-card class="mx-auto" outlined>
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="text-h5 mb-1" v-if="name">{{ character.name }}</v-list-item-title>
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
            <v-list-item-avatar v-if="character.avatar && avatar" tile size="120" color="grey" class="d-none d-sm-flex"><v-img :src="character.avatar"></v-img></v-list-item-avatar>
        </v-list-item>
    </v-card>
</template>

<script>
    export default {
        props: {
            character: Object,
            name: Boolean,
            avatar: Boolean
        },
        computed: {
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
</style>