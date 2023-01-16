<template>
	<v-layout align-center justify-center>
		<v-dialog transition="dialog-bottom-transition" max-width="600">
			<template v-slot:activator="{ on, attrs }">
				<v-btn color="primary" block v-bind="attrs" v-on="on">Items</v-btn>
			</template>
			<template v-slot:default="dialog">
				<v-card>
					<v-toolbar color="primary" dark><span class="text-h5">Items</span></v-toolbar>
					<v-card-text>
						<v-container v-for="item in items" :key="item.id">
						<Item :editable="false" :id="item.id" :local="true"></Item>
						</v-container>
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

import Item from "@/components/Item.vue";

export default {
	components: {
		Item
	},
	props: {
		items: Array
	},
	computed: {
		allWeapons() {
			return this.$store.state.weapons
		}
	}
};

</script>

<style scoped>
.title {
	padding-top: 0px;
}
</style>
