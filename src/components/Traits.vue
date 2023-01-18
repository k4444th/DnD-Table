<template>
	<v-layout align-center justify-center>
		<v-dialog transition="dialog-bottom-transition" max-width="600">
			<template v-slot:activator="{ on, attrs }">
				<v-btn color="primary" block v-bind="attrs" v-on="on">{{ name || "Traits"}}</v-btn>
			</template>
			<template v-slot:default="dialog">
				<v-card>
					<v-toolbar color="primary" dark><span class="text-h5">{{ name || "Traits"}}</span></v-toolbar>
					<v-expansion-panels multiple>
						<v-expansion-panel v-for="trait in traits" :key="trait.id" class="col-12">
							<v-expansion-panel-header>
								<span>{{ trait.name }} {{ trait.details ? ` (${trait.details})` : ""}}</span>
							</v-expansion-panel-header>
							<v-expansion-panel-content>
								{{ trait.description }}
							</v-expansion-panel-content>
						</v-expansion-panel>
					</v-expansion-panels>
					<v-card-actions class="justify-end">
						<v-btn text @click="dialog.value = false">Close</v-btn>
					</v-card-actions>
				</v-card>
			</template>
		</v-dialog>
	</v-layout>
</template>

<script>
export default {
	props: {
		traits: Array,
		name: String
	},
	computed: {
		dark() {
			return this.$vuetify.theme.dark
		}
	}
};
</script>

<style scoped>
.value {
	min-width: 50px;
	display: inline-block;
}

.skill {
	display: inline-block;
}

.theme--dark.v-icon {
	color: grey !important;
}
</style>