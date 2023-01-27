<template>
	<div>
		<Hero />
		<br>
		<v-container>
			<CharacterSheet v-bind:character-override="character"></CharacterSheet>
		</v-container>
	</div>
</template>

<script>
import Hero from "@/components/Hero.vue";

import CharacterSheet from "../components/CharacterSheet.vue";

export default {
	name: "Home",
	components: {
		Hero,
		CharacterSheet,
	},
	computed: {
		character() {
			return this.$store.state.character[1];
		}
	}
};
</script>

<style scoped>
.traits {
	position: relative;
}
</style>