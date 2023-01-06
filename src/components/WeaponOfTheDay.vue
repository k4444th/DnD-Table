<template>
    <div>
        <v-card class="mx-auto d-flex flex-column" max-width="600">
            <v-card-text>
                <v-row>
                    <v-col cols="12" sm="5">
                        <v-layout align-center>
                            <v-flex class="text-center">
                                <img src="./../../public/img/shapes/shield1.svg" height="200" alt="" class="wotd-shield" :class="dark ? 'dark-theme': ''"/>
                                <v-icon class="wotd-icon-big d-none d-md-flex mt-md-6 text--primary">{{ weapon.icon }}</v-icon>
                                <v-icon class="wotd-icon-small d-md-none d-xs-flex mt-7 mr-2 ml-2 text--primary">{{ weapon.icon }}</v-icon>
                            </v-flex>
                        </v-layout>
                    </v-col>
                    <v-col cols="12" sm="7">
                        <div>Weapon of the Day</div>
                        <p class="text-h4 text--primary">{{ weapon.name }}</p>
                        <div class="text--primary">{{ weapon.description }}</div>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-spacer></v-spacer>
            <v-card-actions>
                <v-btn text color="primary" @click="reveal = true">Properties</v-btn>
            </v-card-actions>

            <v-expand-transition>
                <v-card v-if="reveal" class="transition-fast-in-fast-out v-card--reveal d-flex flex-column" style="height: 100%;">
                    <v-toolbar color="primary" dark><span class="text-h5">Properties</span></v-toolbar>
                    <v-card-text class="pb-0">
                        <div v-for="property in weapon.properties" :key="property.name">
                            <v-row>
                                <v-col class="text--primary">{{ property.name }}: </v-col>
                                <v-col class="text--primary">{{ property.score }}</v-col>
                            </v-row>
                        </div>
                    </v-card-text>
                    <v-spacer></v-spacer>
                    <v-card-actions class="pt-0">
                        <v-btn text color="primary" @click="reveal = false">Close</v-btn>
                    </v-card-actions>
                </v-card>
            </v-expand-transition>
        </v-card>
    </div>
</template>

<script>
    export default {
        data: () => ({
            reveal: false,
        }),
        props: {
            weapon: Object
        },
        computed: {
            dark() {
                return this.$vuetify.theme.dark
            }    
        }
    }
</script>

<style scoped>
    .v-card--reveal {
        bottom: 0;
        opacity: 1 !important;
        position: absolute;
        width: 100%;
    }

    .wotd-shield.dark-theme {
        object-fit: contain;
        filter: invert(100%);
    }
    .wotd-icon-big {
        font-size: 100px;
        position: absolute;
        left: 75px;
        top: 40px;
    }
    .wotd-icon-small {
        font-size: 100px;
        position: absolute;
        left: 115px;
        top: 40px;
    }
    #app > div.v-application--wrap > main > div > div > div.container > div:nth-child(1) > div > div.transition-fast-in-fast-out.v-card--reveal.d-flex.flex-column.v-card.v-sheet.theme--dark > header, #app > div.v-application--wrap > main > div > div > div.container > div:nth-child(1) > div > div.transition-fast-in-fast-out.v-card--reveal.d-flex.flex-column.v-card.v-sheet.theme--light > header {
        height: 20px !important;
    }
</style>