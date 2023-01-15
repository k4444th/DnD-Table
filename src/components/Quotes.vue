<template>
	<v-dialog transition="dialog-bottom-transition" max-width="600">
		<template v-slot:activator="{ on, attrs }">
			<v-btn color="primary" block v-bind="attrs" v-on="on">Quotes</v-btn>
		</template>
		<template v-slot:default="dialog">
			<v-card>
				<v-toolbar color="primary" dark><span class="text-h5">Quotes</span></v-toolbar>
				<br>
				<v-row>
					<v-col v-for="(value, key) in quotes" :key="key" class="col-12 col-sm-6">
						<v-card>
							<v-card-title>
								{{ key }}
							</v-card-title>
							<v-card-text>
								{{ value }}
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
				<v-card-actions class="justify-end">
					<v-btn text @click="dialog.value = false">Close</v-btn>
				</v-card-actions>
			</v-card>
		</template>
	</v-dialog>
</template>
<script>
export default {
	props: {
		quotes: Object
	},
};

</script>

<style scoped>
.title {
	padding-top: 0px;
}
</style>