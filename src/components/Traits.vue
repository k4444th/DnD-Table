<template>
	<v-layout align-center justify-center>
		<div class="trait-container">
			<div>
				<img v-if="trait.name == 'Armor Class'" src="./../../public/img/shapes/shield2.svg" alt="" class="traits-shape" :class="dark ? 'dark-theme' : ''" />
				<img v-else src="./../../public/img/shapes/rectangle1.svg" alt="" class="traits-shape" :class="dark ? 'dark-theme' : ''" />
				<span class="value">{{ trait.value }}</span>
			</div>
			<span>{{ trait.name }}</span>
		</div>
	</v-layout>
</template>

<script>
export default {
	props: {
		trait: Object
	},
	computed: {
		dark() {
			return this.$vuetify.theme.dark
		}
	}
};
</script>

<style scoped>
.trait-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.traits-shape {
	user-select: none;
	width: 100px;
    max-width: 125px;
    min-width: 75%;
}

.traits-shape.dark-theme {
	filter: invert(100%);
}

.value {
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 45px;
}
</style>