<template>
	<div>
		<Hero />
		<br>
		<v-container v-if="registered">
			<CharacterSheet v-bind:character-override="character"></CharacterSheet>
		</v-container>
		<v-container v-else>
			<Login />
		</v-container>
	</div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Login from "@/components/Login.vue";

import CharacterSheet from "../components/CharacterSheet.vue";

export default {
	name: "Home",
	components: {
		Hero,
		Login,
		CharacterSheet,
	},
	computed: {
		registered() {
			return this.$store.state.registered;
		},
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