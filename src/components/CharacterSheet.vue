<template>
	<div>
		<v-card>
			<div v-if="character">
				<CharacterCard v-bind:character="character" />
				<br>
				<SkillsAndModifiers v-bind:skills="character.skills" v-bind:size="'big'" />
				<v-row class="mt-3 align-center">
					<v-col class="col-12 col-md-6">
						<Combat v-bind:combat="character.combat" />
						<br>
					</v-col>
					<v-col class="d-none d-md-block" cols="5">
						<v-row>
							<v-col cols="6">
								<Traits v-bind:traits="character.traits" />
								<br>
								<Weapons :items="character.items" />
							</v-col>
							<v-col cols="6">
								<Proficiencies v-bind:proficiencies="character.proficiencies"
									v-bind:skill_proficiencies="character.skill_proficiencies" />
								<br>
								<SavingThrows v-bind:combat="character.combat" />
							</v-col>
						</v-row>
					</v-col>
					<v-row class="d-md-none d-xs-flex mt-7 mr-2 ml-2">
						<v-col cols="6" class="pa-2">
							<Traits v-bind:traits="character.traits" />
						</v-col>
						<v-col cols="6" class="pa-2">
							<Weapons :items="character.items" />
						</v-col>
						<v-col cols="6" class="pa-2">
							<Proficiencies v-bind:proficiencies="character.proficiencies"
								v-bind:skill_proficiencies="character.skill_proficiencies" />
						</v-col>
						<v-col cols="6" class="pa-2">
							<SavingThrows v-bind:combat="character.combat" />
						</v-col>
					</v-row>
				</v-row>
				<br>
				<Quotes v-bind:quotes="character.details" />
				<br>
				<v-card-actions v-if="editable">
					<v-chip-group>
						<v-chip @click="copyToClipboard(character.id)">
							<v-icon left>
								mdi-content-copy
							</v-icon>
							ID: {{ character.id }}
						</v-chip>
					</v-chip-group>
					<v-spacer></v-spacer>
					<v-btn @click="dialog = true"><v-icon>mdi-pencil</v-icon></v-btn>
					<v-btn><v-icon>mdi-delete</v-icon></v-btn>
				</v-card-actions>
			</div>
			<div v-else>
				<v-skeleton-loader type="card, article, date-picker" />
			</div>
		</v-card>

		<v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
			<v-card>
				<v-toolbar dark color="primary">
					<v-btn icon dark @click="dialog = false">
						<v-icon>mdi-close</v-icon>
					</v-btn>
					<v-toolbar-title>Character Editor</v-toolbar-title>
				</v-toolbar>
				<CharacterEditor v-if="editable" :character-id="characterId" @closeDialog="dialog = false, fetchCharacter()" />
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
import SkillsAndModifiers from "@/components/SkillsAndModifiers.vue";
import Combat from "@/components/Combat.vue";
import CharacterCard from "@/components/CharacterCard.vue";
import Proficiencies from "@/components/Proficiencies.vue";
import SavingThrows from "@/components/SavingThrows.vue";
import Quotes from "@/components/Quotes.vue";
import Traits from "@/components/Traits.vue";
import Weapons from "@/components/Weapons.vue";
import CharacterEditor from "./CharacterEditor/CharacterEditor.vue";

import axios from 'axios';


export default {
	name: "Home",
	data() {
		return {
			character: null,
			dialog: false
		}
	},
	props: {
		editable: {
			type: Boolean,
			default: true
		},
		characterId: {
			type: String
		},
		characterOverride: {
			default() {
				return false;
			}
		}
	},
	methods: {
		async fetchCharacter() {

			if (this.characterOverride) {
				this.character = this.characterOverride;
			} else {
				const response = await axios.get(`${process.env.VUE_APP_DND_API_ENDPOINT}/characters/id/${this.characterId}`);
				console.log(response);

				this.character = response.data;
			}
		},
		copyToClipboard(text) {

			navigator.clipboard.writeText(text);
		},
	},
	mounted() { this.fetchCharacter() },
	components: {
		SkillsAndModifiers,
		Combat,
		Proficiencies,
		SavingThrows,
		CharacterCard,
		Quotes,
		Traits,
		Weapons,
		CharacterEditor
	},
};
</script>

<style scoped>
.traits {
	position: relative;
}
</style>