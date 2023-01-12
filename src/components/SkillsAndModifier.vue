<template>
	<v-container>
		<img src="./../../public/img/shapes/traits1.svg" alt="" class="traits-shape"
			:class="dark ? 'dark-theme' : ''" />
		<v-layout align-center justify-center>
			<div class="skillmodContainer">
				<div>
					<div v-if="size == 'big'">
						<span class="skill-big">{{ skill.skill }}</span>
						<span class="modifier-big">{{ skill.modifier }}</span>
					</div>
					<div v-if="size == 'small'">
						<span class="skill-small">{{ skill.skill }}</span>
						<span class="modifier-small">{{ skill.modifier }}</span>
					</div>
				</div>
				<div v-if="size == 'big'">
					<span>{{ skill.name }}</span>
				</div>
				<div v-if="size == 'small'">
					<span>{{ skill.shortname }}</span>
				</div>
			</div>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	props: {
		skill: Object,
		size: String
	},
	computed: {
		dark() {
			return this.$vuetify.theme.dark
		}
	}
};
</script>

<style scoped>
.skillmodContainer {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.traits-shape {
	user-select: none;
	width: 100%;
	max-width: 125px;
	min-width: 75%;
}

.traits-shape.dark-theme {
	filter: invert(100%);
}

.modifier-big {
	position: absolute;
	top: 60%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 15px;
}

.skill-big {
	position: absolute;
	top: 35%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 40px;
}

.modifier-small {
	position: absolute;
	top: 53%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 10px;
}

.skill-small {
	position: absolute;
	top: 33%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 25px;
}
</style>