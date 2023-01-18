<template>
	<v-layout align-center justify-center>
		<v-dialog transition="dialog-bottom-transition" max-width="600">
			<template v-slot:activator="{ on, attrs }">
				<v-btn color="primary" block v-bind="attrs" v-on="on">Proficiencies</v-btn>
			</template>
			<template v-slot:default="dialog">
				<v-card>
					<v-toolbar color="primary" dark><span class="text-h5">Proficiencies</span></v-toolbar>
					<v-card-text class="pa-sm-12 pa-6">
						<v-card-title>Skill Proficiencies</v-card-title>
						<h3>Proficiency Bonus: {{ skill_proficiencies.proficiency_bonus }}</h3>
						<v-radio-group>
							<v-radio v-for="(value, key) in skill_proficiencies" :key="key" :disabled="true"
								:off-icon="value ? '$radioOn' : '$radioOff'">
								<template v-slot:label>
									<div>
										<div class="skill">
											<strong class="primary--text">{{ key }}</strong>
										</div>
									</div>
								</template>
							</v-radio>
						</v-radio-group>
						<v-card-title>Weapon Proficiencies</v-card-title>
						<ul>
							<li v-for="proficiency in weapon_proficiencies" :key="proficiency.id">
								{{ proficiency.name }}
							</li>
						</ul>
						<v-card-title>Armor Proficiencies</v-card-title>
						<ul>
							<li v-for="proficiency in armor_proficiencies" :key="proficiency.id">
								{{ proficiency.name }}
							</li>
						</ul>
						<v-card-title>Language Proficiencies</v-card-title>
						<ul>
							<li v-for="proficiency in language_proficiencies" :key="proficiency.id">
								{{ proficiency.name }}
							</li>
						</ul>
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
		skill_proficiencies: Object,
		proficiencies: Array
	},
	computed: {
		dark() {
			return this.$vuetify.theme.dark
		},
		language_proficiencies() {
			return this.proficiencies.filter(x => x.type == 'Languages');
		},
		weapon_proficiencies() {
			return this.proficiencies.filter(x => x.type == 'Weapons');
		},
		armor_proficiencies() {
			return this.proficiencies.filter(x => x.type == 'Armor');
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