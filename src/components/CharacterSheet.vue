<template>
	<v-card>
		<div v-if="character">
			<CharacterCard v-bind:character="character" />
			<br>
			<SkillsAndModifiers v-bind:skills="character.skills" v-bind:size="'big'" />
			<Combat v-bind:combat="character.combat" />
			<v-row>
				<v-col>
					<Proficiencies v-bind:proficiencies="character.skill_proficiencies" />
				</v-col>
				<v-col>
					<SavingThrows v-bind:combat="character.combat" />
				</v-col>
			</v-row>
			<br>
			<Quotes v-bind:quotes="character.details" />
			<br>
		</div>
		<div v-else>
			<v-skeleton-loader type="card, article, date-picker" />
		</div>
	</v-card>
</template>

<script>
import SkillsAndModifiers from "@/components/SkillsAndModifiers.vue";
import Combat from "@/components/Combat.vue";
import CharacterCard from "@/components/CharacterCard.vue";
import Proficiencies from "@/components/Proficiencies.vue";
import SavingThrows from "@/components/SavingThrows.vue";
import Quotes from "@/components/Quotes.vue";

import axios from 'axios';


export default {
	name: "Home",
	data() {
		return {
			character: null
		}
	},
	props: {
		characterId: {
			type: String, required: true
		}
	},
	methods: {
		async fetchCharacter() {
			const response = await axios.get(`${process.env.VUE_APP_DND_API_ENDPOINT}/characters/id/${this.characterId}`);
			console.log(response);

			this.character = response.data;
		}
	},
	mounted() { this.fetchCharacter() },
	components: {
		SkillsAndModifiers,
		Combat,
		Proficiencies,
		SavingThrows,
		CharacterCard,
		Quotes
	},
};
</script>

<style scoped>
.traits {
	position: relative;
}
</style>