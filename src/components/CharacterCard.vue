<template>
	<v-card class="mx-auto" outlined>
		<v-list-item>
			<v-list-item-content>
				<v-list-item-title class="text-h5 mb-1">{{ character.name }}</v-list-item-title>
				<div class="mb-5">
					<v-chip class="mr-2 mr-sm-5 mt-3">Race: {{ character.race }}</v-chip>
					<v-chip class="mr-2 mr-sm-5 mt-3">Class: {{ character.class }}</v-chip>
					<v-chip class="mt-3">Level: {{ character.level }}</v-chip>
					<br>
				</div>
				<hr class="dashed">
				<v-list-item-subtitle class="combats mt-3">
					<div class="mr-5">
						<v-icon>mdi-shield-sword-outline</v-icon> Hitpoints: {{ character.combat.hp }} of {{
							character.combat.hp_max
						}} + ({{ character.combat.hp_temp }})
					</div>
					<div class="mr-5">
						<v-icon>mdi-dice-d20-outline</v-icon> XP: {{ character.xp }}
					</div>
					<div>
						<v-icon>mdi-dice-5-outline</v-icon> Hit Dice: {{ character.combat.hit_dice }}
					</div>
				</v-list-item-subtitle>
				<Money v-bind:money="character.money"/>
			</v-list-item-content>
		</v-list-item>
	</v-card>
</template>

<script>
import Money from "@/components/Money.vue";
import avatar1 from "./../../public/img/avatars/avatar1.png";


export default {
	props: {
		character: Object,
	},
	data() {
		return {
			avatar1: avatar1
		}
	},
	components: {
		Money
	},
	computed: {
		dark() {
			return this.$vuetify.theme.dark
		}
	}
};
</script>

<style scoped>
hr.dashed {
	border: 1px dashed grey;
}

.combats {
	display: flex !important;
}

.float-right {
	float: right;
}
</style>