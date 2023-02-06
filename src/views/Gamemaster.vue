<template>
	<div>
		<Hero />
		<br>
		<v-container>
			<v-row>
				<v-col v-for="character in characters" :key="character[0]" class="col-12 col-sm-6">
					<CharacterSheet v-bind:character-override="character" />
				</v-col>
			</v-row>
			<br>
			<SelectMap />
			<br>
			<Dice class="d-flex justify-center" />
		</v-container>
		<br>
	</div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Dice from "@/components/Dice.vue";
import SelectMap from "@/components/SelectMap.vue";
import CharacterSheet from "../components/CharacterSheet.vue";

export default {
	name: "Gamemaster",
	components: {
		Hero,
		Dice,
		SelectMap,
		CharacterSheet
	},
	computed: {
		characters() {
			return this.$store.state.character;
		}
	}
};
</script>