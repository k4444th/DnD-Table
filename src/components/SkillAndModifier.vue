<template>
	<v-layout align-center justify-center>
		<div class="skillmodContainer">
			<div>
				<img src="./../../public/img/shapes/traits1.svg" alt="" class="traits-shape"
					:class="dark ? 'dark-theme' : ''" />
				<span class="skill">{{ skill.skill }}</span>
				<span class="modifier">{{ skill.modifier }}</span>
			</div>
			<span>{{ skill.name }}</span>
		</div>
	</v-layout>
</template>

<script>
export default {
	props: {
		skill: Object
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
	width: 100px;
	height: 100px;
	user-select: none;
}

.traits-shape.dark-theme {
	filter: invert(100%);
}

.modifier {
	position: absolute;
	top: 60%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 15px;
}

.skill {
	position: absolute;
	top: 35%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 40px;
}
</style>