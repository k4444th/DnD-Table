<template>
	<div>
		<Hero />
		<br>
		<v-container v-if="registered">
			<CharacterCard v-bind:character="character" v-bind:name="true" v-bind:avatar="true" />
			<br>
			<v-row class="mt-3">
				<SkillsAndModifiers v-bind:skills="character.skills" v-bind:size="'big'" />
			</v-row>
			<br>
			<v-row class="mt-3">
				<Combat v-bind:combat="character.combat" />

				<v-col class="d-none d-md-block mt-md-6" cols="4 offset-1">
					<Proficiencies v-bind:proficiencies="character.skill_proficiencies" />
					<br>
					<SavingThrows v-bind:combat="character.combat" />
				</v-col>

			</v-row>
			<br>
			<br>
			<Quotes v-bind:quotes="character.details" />
			<br>
		</v-container>
		<v-container v-else>
			<Login />
		</v-container>
	</div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import SkillsAndModifiers from "@/components/SkillsAndModifiers.vue";
import Combat from "@/components/Combat.vue";
import CharacterCard from "@/components/CharacterCard.vue";
import Proficiencies from "@/components/Proficiencies.vue";
import SavingThrows from "@/components/SavingThrows.vue";
import Quotes from "@/components/Quotes.vue";
import Login from "@/components/Login.vue";

export default {
	name: "Home",
	components: {
		Hero,
		SkillsAndModifiers,
		Combat,
		Proficiencies,
		SavingThrows,
		CharacterCard,
		Login,
		Quotes
	},
	computed: {
		registered() {
			return this.$store.state.registered;
		},
		character() {
			return this.$store.state.character[0];
		}
	}
};
</script>

<style scoped>
.traits {
	position: relative;
}
</style>
