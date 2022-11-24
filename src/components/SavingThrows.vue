<template>
	<v-layout align-center justify-center>
        <v-dialog transition="dialog-bottom-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" block v-bind="attrs" v-on="on">Saving Throws</v-btn>
        </template>
        <template v-slot:default="dialog">
            <v-card>
                <v-toolbar color="primary" dark><span class="text-h5">Saving Throws</span></v-toolbar>
                <v-card-text class="pa-sm-12 pa-6">
                    <v-radio-group value="true">
                        <v-radio v-for="savingThrow in savingThrows" :key="savingThrow.name" disabled="true" :off-icon="savingThrow.selected ? '$radioOn' : '$radioOff'">
                            <template v-slot:label>
                                <div>
                                    <div class="value text-center">{{ savingThrow.value }}</div>
                                    <div class="savingThrow">
                                        <strong class="primary--text">{{ savingThrow.name }}</strong>
                                    </div>
                                </div>
                            </template>
                        </v-radio>
                    </v-radio-group>
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
		savingThrows: Object
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