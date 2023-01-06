<template>
    <div>
        <v-card class="mx-auto d-flex flex-column" max-width="600">
            <v-card-text>
                <v-layout align-center>
                    <v-flex class="text-center">
                        <h3 class="text--primary">{{ weapon.name }}</h3>
                        <br>
                        <v-icon class="icon text--primary">{{ weapon.icon }}</v-icon>
                    </v-flex>
                </v-layout>
            </v-card-text>
        </v-card>

        <v-dialog transition="dialog-bottom-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" block v-bind="attrs" v-on="on">Skills</v-btn>
        </template>
        <template v-slot:default="dialog">
            <v-card>
                <v-toolbar color="primary" dark><span class="text-h5">Properties</span></v-toolbar>
                <v-card-text class="pa-sm-12 pa-6">
                    <div v-for="property in weapon.properties" :key="property.name">
                        <v-row>
                            <v-col class="text--primary">{{ property.name }}: </v-col>
                            <v-col class="text--primary">{{ property.score }}</v-col>
                        </v-row>
                    </div>
                </v-card-text>
                <v-card-actions class="justify-end">
                <v-btn text @click="dialog.value = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </template>
        </v-dialog>
    </div>
</template>

<script>
    export default {
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
    .icon {
        font-size: 50px;
    }
</style>