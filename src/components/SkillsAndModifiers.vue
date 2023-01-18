<template>
	<v-container>
		<v-row>
			<v-col v-for="(value, key) in skills" :key="key" class="col-4 col-lg-2">
				<div class="stat-container">
					<div class="image-container">
						<img src="./../../public/img/shapes/traits1.svg" alt="" class="stat-shape"
							:class="dark ? 'dark-theme' : ''" />
						<span class="skill">{{ value.value }}</span>
						<span class="modifier">{{ value.modifier }}</span>
					</div>
					<span>{{ key }}</span>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	props: {
		skills: Object
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

.skill {
	position: absolute;
	top: 35%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 45px;
}

.modifier {
	position: absolute;
	bottom: 2%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 16px;
}
</style>