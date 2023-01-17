<template>
	<v-layout align-center justify-center>
		<v-dialog transition="dialog-bottom-transition" max-width="600">
			<template v-slot:activator="{ on, attrs }">
				<v-btn color="primary" block v-bind="attrs" v-on="on">{{ name || "Traits"}}</v-btn>
			</template>
			<template v-slot:default="dialog">
				<v-card>
					<v-toolbar color="primary" dark><span class="text-h5">{{ name || "Traits"}}</span></v-toolbar>
					<v-card-text class="pa-sm-12 pa-6">
						<v-row>
							<v-col v-for="trait in traits" :key="trait.id" class="col-12 col-sm-6">
								<v-card>
									<v-card-title>
										{{ trait.name }}
									</v-card-title>
									<v-card-text>
										{{ trait.description }}
									</v-card-text>
								</v-card>
							</v-col>
						</v-row>
					</v-card-text>
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