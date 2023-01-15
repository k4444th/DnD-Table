<template>
	<v-layout align-center justify-center>
        <v-dialog transition="dialog-bottom-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" block v-bind="attrs" v-on="on">Weapons</v-btn>
        </template>
        <template v-slot:default="dialog">
            <v-card>
                <v-card-text>
                    <v-row>
                        <v-col class="col-12 col-md-4" v-for="weapon in weapons" :key="weapon.name">
                            <Weapon :weapon="allWeapons[weapon]"/>
                        </v-col>                
                    </v-row>
               </v-card-text>
                <v-card-actions class="justify-end">
                <v-btn text @click="dialog.value = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </template>
        </v-dialog>
	</v-layout>
</template>

<script>

import Weapon from "@/components/Weapon.vue";

export default {
    components: {
        Weapon
    },
    props: {
        weapons: Array
    },
    computed: {
        allWeapons() {
          return this.$store.state.weapons
        }
    }
};

</script>

<style scoped>
    .title {
        padding-top: 0px;
    }
</style>
