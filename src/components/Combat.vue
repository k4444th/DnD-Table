<template>
	<v-layout align-center justify-center>
		<v-row>
			<v-col cols="4" class="stat-container">
				<div class="image-container">
					<img src="./../../public/img/shapes/shield2.svg" alt="" class="stat-shape"
						:class="dark ? 'dark-theme' : ''" />
					<span class="value">{{ combat.armor_class }}</span>
				</div>
				<span>Armor Class</span>
			</v-col>
	
			<v-col cols="4" class="stat-container">
				<div class="image-container">
					<img src="./../../public/img/shapes/rectangle1.svg" alt="" class="stat-shape"
						:class="dark ? 'dark-theme' : ''" />
					<span class="value">{{ combat.initiative }}</span>
				</div>
				<span>Initiative</span>
			</v-col>
	
			<v-col cols="4" class="stat-container">
				<div class="image-container">
					<img src="./../../public/img/shapes/rectangle1.svg" alt="" class="stat-shape"
						:class="dark ? 'dark-theme' : ''" />
					<span class="value">{{ combat.speed }}</span>
				</div>
				<span>Speed</span>
			</v-col>
		</v-row>
	</v-layout>
</template>

<script>
export default {
	props: {
		combat: Object
	},
	computed: {
		dark() {
			return this.$vuetify.theme.dark
		}
	}
};
</script>

<style scoped>
.image-container {
	position: relative;
	text-align: center;
}

.stat-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.stat-shape {
	user-select: none;
	width: 100px;
	max-width: 125px;
	min-width: 75%;
}

.stat-shape.dark-theme {
	filter: invert(100%);
}

.value {
	position: absolute;
	top: 45%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 45px;
}
</style>