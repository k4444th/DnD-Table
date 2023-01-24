<template>
	<v-container>
		<div v-if="loading"><v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader> </div>
		<div v-if="!loading">
			<v-card>
				<v-card-text>
					<v-form>
						<v-card-title> Basic Information</v-card-title>
						<v-container>
							<v-row>
								<v-col>
									<v-text-field label="Name" v-model="character.name"></v-text-field>
								</v-col>
								<v-col>
									<v-text-field label="Race" v-model="character.race"></v-text-field>
								</v-col>
							</v-row>
							<v-row>
								<v-col>
									<v-text-field label="Class" v-model="character.class"></v-text-field>
								</v-col>
								<v-col>
									<v-text-field label="Background" v-model="character.background"></v-text-field>
								</v-col>
							</v-row>
							<v-text-field label="Alignment" v-model="character.alignment"></v-text-field>

							<v-row>
								<v-col>
									<v-text-field type="number" label="Level" v-model="character.level"></v-text-field>
								</v-col>
								<v-col>
									<v-text-field type="number" label="Experience Points"
										v-model="character.xp"></v-text-field>
								</v-col>
							</v-row>
						</v-container>
						<v-expansion-panels>
							<v-expansion-panel>
								<v-expansion-panel-header>Skills</v-expansion-panel-header>
								<v-expansion-panel-content>
									<v-container>
										<v-row>
											<v-col>
												<v-text-field type="number" label="Strength"
													v-model="character.skills.Strength.value"></v-text-field>
											</v-col>
											<v-col>
												<v-text-field type="number" label="Modifier"
													v-model="character.skills.Strength.modifier"></v-text-field>
											</v-col>
										</v-row>
										<v-row>
											<v-col>
												<v-text-field type="number" label="Dexterity"
													v-model="character.skills.Dexterity.value"></v-text-field>
											</v-col>
											<v-col>
												<v-text-field type="number" label="Modifier"
													v-model="character.skills.Dexterity.modifier"></v-text-field>
											</v-col>
										</v-row>
										<v-row>
											<v-col>
												<v-text-field type="number" label="Condition"
													v-model="character.skills.Condition.value"></v-text-field>
											</v-col>
											<v-col>
												<v-text-field type="number" label="Modifier"
													v-model="character.skills.Condition.modifier"></v-text-field>
											</v-col>
										</v-row>
										<v-row>
											<v-col>
												<v-text-field type="number" label="Intelligence"
													v-model="character.skills.Intelligence.value"></v-text-field>
											</v-col>
											<v-col>
												<v-text-field type="number" label="Modifier"
													v-model="character.skills.Intelligence.modifier"></v-text-field>
											</v-col>
										</v-row>
										<v-row>
											<v-col>
												<v-text-field type="number" label="Wisdom"
													v-model="character.skills.Wisdom.value"></v-text-field>
											</v-col>
											<v-col>
												<v-text-field type="number" label="Modifier"
													v-model="character.skills.Wisdom.modifier"></v-text-field>
											</v-col>
										</v-row>
										<v-row>
											<v-col>
												<v-text-field type="number" label="Charisma"
													v-model="character.skills.Charisma.value"></v-text-field>
											</v-col>
											<v-col>
												<v-text-field type="number" label="Modifier"
													v-model="character.skills.Charisma.modifier"></v-text-field>
											</v-col>
										</v-row>
									</v-container>
								</v-expansion-panel-content>
							</v-expansion-panel>
							<v-expansion-panel>
								<v-expansion-panel-header>Combat</v-expansion-panel-header>
								<v-expansion-panel-content>
									<v-container>
										<v-row>
											<v-col>
												<v-text-field type="number" label="Armor Class"
													v-model="character.combat.armor_class"></v-text-field>
											</v-col>
											<v-col>
												<v-text-field type="number" label="Initiative"
													v-model="character.combat.initiative"></v-text-field>
											</v-col>
											<v-col>
												<v-text-field type="number" label="Speed"
													v-model="character.combat.speed"></v-text-field>
											</v-col>
										</v-row>
										<v-row>
											<v-col>
												<v-text-field type="number" label="Hitpoints"
													v-model="character.combat.hp"></v-text-field>
											</v-col>
											<v-col>
												<v-text-field type="number" label="Maximum HP"
													v-model="character.combat.hp_max"></v-text-field>
											</v-col>
											<v-col>
												<v-text-field type="number" label="Temporary HP"
													v-model="character.combat.hp_temp"></v-text-field>
											</v-col>
										</v-row>
										<v-row>
											<v-col>
												<v-text-field label="Hit Dice"
													v-model="character.combat.hit_dice"></v-text-field>
											</v-col>
											<v-col>
												<v-text-field type="number" label="Successful Death Saves"
													v-model="character.combat.death_save_success"></v-text-field>
											</v-col>
											<v-col>
												<v-text-field type="number" label="Failed Death Saves"
													v-model="character.combat.death_save_fail"></v-text-field>
											</v-col>
										</v-row>
									</v-container>
								</v-expansion-panel-content>
							</v-expansion-panel>
							<v-expansion-panel>
								<v-expansion-panel-header>Skill Proficiencies</v-expansion-panel-header>
								<v-expansion-panel-content>
									<v-container>
										<v-row>
											<v-col>
												<v-text-field label="Proficiency Bonus" type="number"
													v-model="character.skill_proficiencies.proficiency_bonus"></v-text-field>
											</v-col>
										</v-row>
										<v-row>
											<v-col>
												<v-checkbox v-for="prof in proficiency_skills"
													v-model="character.skill_proficiencies[prof]" :label="prof"
													:key="prof"></v-checkbox>
											</v-col>
										</v-row>
									</v-container>
								</v-expansion-panel-content>
							</v-expansion-panel>
							<v-expansion-panel>
								<v-expansion-panel-header>
									Personality Details
								</v-expansion-panel-header>
								<v-expansion-panel-content>
									<v-row>
										<v-col>
											<v-textarea label="Personality"
												v-model="character.details.personality"></v-textarea>
											<v-textarea label="Ideals" v-model="character.details.ideals"></v-textarea>
											<v-textarea label="Bonds" v-model="character.details.bonds"></v-textarea>
											<v-textarea label="Flaws" v-model="character.details.flaws"></v-textarea>
										</v-col>
									</v-row>
								</v-expansion-panel-content>
							</v-expansion-panel>
							<v-expansion-panel>
								<v-expansion-panel-header>
									Money
								</v-expansion-panel-header>
								<v-expansion-panel-content>
									<v-text-field type="number" label="Copper"
										v-model="character.money.copper"></v-text-field>
									<v-text-field type="number" label="Silver"
										v-model="character.money.silver"></v-text-field>
									<v-text-field type="number" label="Electrum"
										v-model="character.money.electrum"></v-text-field>
									<v-text-field type="number" label="Gold"
										v-model="character.money.gold"></v-text-field>
									<v-text-field type="number" label="Platinum"
										v-model="character.money.platinum"></v-text-field>
								</v-expansion-panel-content>
							</v-expansion-panel>

							<v-expansion-panel>
								<v-expansion-panel-header>
									Proficiencies
								</v-expansion-panel-header>
								<v-expansion-panel-content>

									<v-list subheader>
										<v-subheader>Weapons</v-subheader>

										<v-list-item v-for="proficiency in weapon_proficiencies"
											:key="proficiency.proficiency_id">
											<v-list-item-content>
												<v-list-item-title v-text="proficiency.name"></v-list-item-title>
											</v-list-item-content>
											<v-list-item-action>
												<v-btn icon @click="removeTrait(proficiency.proficiency_id)">
													<v-icon color="grey lighten-1">mdi-delete-forever</v-icon>
												</v-btn>
											</v-list-item-action>
										</v-list-item>

										<v-divider></v-divider>
										<v-subheader>Armor</v-subheader>

										<v-list-item v-for="proficiency in armor_proficiencies"
											:key="proficiency.proficiency_id">
											<v-list-item-content>
												<v-list-item-title v-text="proficiency.name"></v-list-item-title>
											</v-list-item-content>
											<v-list-item-action>
												<v-btn icon @click="removeTrait(proficiency.proficiency_id)">
													<v-icon color="grey lighten-1">mdi-delete-forever</v-icon>
												</v-btn>
											</v-list-item-action>
										</v-list-item>

										<v-divider></v-divider>
										<v-subheader>Armor</v-subheader>

										<v-list-item v-for="proficiency in language_proficiencies"
											:key="proficiency.proficiency_id">
											<v-list-item-content>
												<v-list-item-title v-text="proficiency.name"></v-list-item-title>
											</v-list-item-content>
											<v-list-item-action>
												<v-btn icon @click="removeTrait(proficiency.proficiency_id)">
													<v-icon color="grey lighten-1">mdi-delete-forever</v-icon>
												</v-btn>
											</v-list-item-action>
										</v-list-item>

									</v-list>
									<PropertyPicker header="Proficiency" selection-type="characterProficiencies"
										@addProps="addProficiencies"></PropertyPicker>
								</v-expansion-panel-content>
							</v-expansion-panel>

							<v-expansion-panel>
								<v-expansion-panel-header>
									Items
								</v-expansion-panel-header>
								<v-expansion-panel-content>
									<v-list>
										<v-list-item v-for="item in character.items" :key="item.item_id">
											<v-list-item-content>
												<v-list-item-title v-text="item.name"></v-list-item-title>
												<v-row>
													<v-col>
														<v-text-field type="number" v-model="item.amount" outlined
															dense></v-text-field>
													</v-col>
													<v-col>
														<v-checkbox v-model="item.equipped"
															label='Equipped'></v-checkbox>
													</v-col>
												</v-row>
											</v-list-item-content>
											<v-list-item-action>
												<v-btn icon @click="removeTrait(item.item_id)">
													<v-icon color="grey lighten-1">mdi-delete-forever</v-icon>
												</v-btn>
											</v-list-item-action>
										</v-list-item>
									</v-list>
									<PropertyPicker header="Items" selection-type="characterItems" @addProps="addItems">
									</PropertyPicker>
								</v-expansion-panel-content>
							</v-expansion-panel>
						</v-expansion-panels>
					</v-form>
				</v-card-text>
			</v-card>
			<v-btn color="green" fixed bottom right fab @click="saveData">
				<v-icon>mdi-content-save</v-icon>
			</v-btn>
		</div>
	</v-container>
</template>
<script>
import PropertyPicker from '../PropertyPicker.vue';

export default {
	name: 'CharacterEditor',
	data() {
		return {
			loading: true,
			character: {},
			proficiency_skills: [
				"strength",
				"dexterity",
				"constitution",
				"intelligence",
				"wisdom",
				"charisma",
				"acrobatics",
				"animal_handling",
				"arcana",
				"athletics",
				"deception",
				"history",
				"insight",
				"intimidation",
				"investigation",
				"medicine",
				"nature",
				"perception",
				"performance",
				"persuasion",
				"religion",
				"sleight_of_hand",
				"stealth",
				"survival"
			]
		}
	},
	mounted() {
		if (this.characterId) {
			this.fetchCharacter();
		} else {
			this.loading = false;
		}
	},
	props: {
		characterId: { type: String }
	},
	methods: {
		async fetchCharacter() {
			const response = await this.$axios.get(`/characters/id/${this.characterId}`);

			this.character = response.data;
			this.loading = false;
		},
		async saveData() {
			console.log(this.character)

			let response;

			if (this.character.id) {
				console.log("Updating character");

				response = await this.$axios.put(`/characters/id/${this.character.id}`, this.character);

				console.log(response);

				this.character = response.data;

			} else {
				console.log("Creating new characters");

				response = await this.$axios.post(`/characters/`, this.character);

				console.log(response);
			}

			this.$emit('closeDialog');

		},
		async addProficiencies(proficiencies) {
			console.log(proficiencies)

			for (const prop of proficiencies) {
				const response = await this.$axios.get(`/characters/proficiencies/id/${prop}`);

				const data = response.data;

				this.character.proficiencies.push({ proficiency_id: data.id, name: data.name, type: data.type });
			}

		},
		removeTrait(id) {
			this.character.proficiencies = this.character.proficiencies.filter(x => x.proficiency_id != id);
		},
		async addItems(items) {
			console.log(items);

			for (const item of items) {
				const response = await this.$axios.get(`/items/id/${item}`);
				const data = response.data;
				this.character.items.push({ item_id: data.id, name: data.name, amount: 1, equipped: false });
			}
		}

	},
	computed: {
		language_proficiencies() {
			return this.character.proficiencies.filter(x => x.type == 'Languages');
		},
		weapon_proficiencies() {
			return this.character.proficiencies.filter(x => x.type == 'Weapons');
		},
		armor_proficiencies() {
			return this.character.proficiencies.filter(x => x.type == 'Armor');
		}
	},
	components: {
		PropertyPicker
	}
}
</script>
<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

/* Firefox */
input[type=number] {
	-moz-appearance: textfield;
}
</style>