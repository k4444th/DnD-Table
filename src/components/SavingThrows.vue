<template>
	<v-layout align-center justify-center>
        <v-dialog transition="dialog-bottom-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" block v-bind="attrs" v-on="on">Death Saving Throws</v-btn>
        </template>
        <template v-slot:default="dialog">
            <v-card>
                <v-toolbar color="primary" dark><span class="text-h5">Death Saving Throws</span></v-toolbar>
                <v-card-text class="pa-sm-12 pa-6">
				<h3>Failed Death Saving Throws: {{ combat.death_save_fail }} of 3</h3>
				<h3>Successful Death Saving Throws: {{ combat.death_save_success }} of 3</h3>
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
export default {
	props: {
		combat: Object
	},
	computed: {
		dark() {
			return this.$vuetify.theme.dark
		}
	}
};
</script>

<style scoped>
    .value {
        min-width: 50px;
        display: inline-block;
    }
    .savingThrow {
        display: inline-block;
    }
</style>