<template>
	<v-layout align-center justify-center>
        <v-dialog transition="dialog-bottom-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" block v-bind="attrs" v-on="on">Traits</v-btn>
        </template>
        <template v-slot:default="dialog">
            <v-card>
                <v-toolbar color="primary" dark><span class="text-h5">Traits</span></v-toolbar>
                <v-card-text class="pa-sm-12 pa-6">
                    <v-radio-group>
                        <v-radio v-for="skill in skills" :key="skill.name" disabled="false" :off-icon="skill.selected ? '$radioOn' : '$radioOff'">
                            <template v-slot:label>
                              <div>
                                <div class="value text-center">{{ skill.value }}</div>
                                <div class="skill">
                                    <strong class="primary--text">{{ skill.name }}</strong>
                                    <span> ({{ skill.skill }})</span>
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
		skills: Object
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
    .skill {
        display: inline-block;
    }
    .theme--dark.v-icon {
        color: grey !important;
    }
</style>