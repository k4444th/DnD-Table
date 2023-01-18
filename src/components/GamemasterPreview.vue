<template>
	<v-card class="pa-5 pa-sm-7">
		<div class="text-h5 mb-1">
			<EditPlayer v-bind:character="character" />
			{{ character.name }}
		</div>
		<br>
		<CharacterCard v-bind:character="character" v-bind:name="false" v-bind:avatar="false" />
		<br>
		<Combat v-bind:combat="character.combat" />
		<br>
		<SkillsAndModifiers v-bind:skills="character.skills" v-bind:size="'small'" />
		<v-row class="mt-7 mr-2 ml-2">
			<v-col cols="6" class="pa-2"><Traits v-bind:skills="character.traits"/></v-col>
			<v-col cols="6" class="pa-2"><Weapons :items="character.items"/></v-col>
			<v-col cols="6" class="pa-2"><Proficiencies v-bind:proficiencies="character.proficiencies" v-bind:skill_proficiencies="character.skill_proficiencies" /></v-col>
			<v-col cols="6" class="pa-2"><SavingThrows v-bind:combat="character.combat" /></v-col>
		</v-row>
		<v-row>
			<v-col class="col-12 col-md-6 col-lg-4" v-for="weapon in character.weapons" :key="weapon.name">
				<Weapon :weapon="weapons[weapon]" />
			</v-col>
		</v-row>
		<br>
		<hr>
		<br>

		<v-dialog transition="dialog-bottom-transition" max-width="600">
			<template v-slot:activator="{ on, attrs }">
				<v-btn color="primary" block v-bind="attrs" v-on="on">Quotes</v-btn>
			</template>
			<template>
				<v-card>
					<v-toolbar color="primary" dark><span class="text-h5">Quotes</span></v-toolbar>
					<br>
					<Quotes v-bind:quotes="character.quotes" />
				</v-card>
			</template>
		</v-dialog>
	</v-card>
</template>

<script>

import CharacterCard from "@/components/CharacterCard.vue";
import Combat from "@/components/Combat.vue";
import SkillsAndModifiers from "@/components/SkillsAndModifiers.vue";
import Proficiencies from "@/components/Proficiencies.vue";
import SavingThrows from "@/components/SavingThrows.vue";
import EditPlayer from "./EditPlayer.vue";
import Quotes from "./Quotes.vue";
import Weapon from "@/components/Weapon.vue";
import Weapons from "@/components/Weapons.vue";
import Traits from "@/components/Traits.vue";

export default {
	props: {
		character: Object
	},
	components: {
		CharacterCard,
		Combat,
		SkillsAndModifiers,
		Proficiencies,
		SavingThrows,
		EditPlayer,
		Quotes,
		Weapon,
		Traits,
		Weapons
	},
	computed: {
		weapons() {
			return this.$store.state.weapons
		}
	}
};
</script>

<style scoped>
.traits {
	position: relative;
}

.float-left {
	float: left;
}
</style>