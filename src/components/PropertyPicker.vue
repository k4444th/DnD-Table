<template>
	<v-dialog v-model="dialog" width="500">
		<template v-slot:activator="{ on, attrs }">
			<v-btn v-bind="attrs" v-on="on">
				Add
			</v-btn>
		</template>

		<v-card>
			<v-toolbar color="primary" dark><span class="text-h5">Add Property</span></v-toolbar>

			<v-card-text>
				<br>
				<v-autocomplete v-model="searchSelected" :items="items" :loading="isLoading" :search-input.sync="search"
					chips cache-items clearable hide-details hide-selected multiple item-text="name" item-value="id"
					label="Search for Properties" solo>
					<template v-slot:no-data>
						<v-list-item>
							<v-list-item-title>
								Start typing to search
							</v-list-item-title>
						</v-list-item>
					</template>
					<template v-slot:selection="{ attr, on, item, selected }">
						<v-chip v-bind="attr" :input-value="selected" v-on="on">
							<span v-text="item.name"></span>
						</v-chip>
					</template>
					<template v-slot:item="{ item }">
						<v-list>
							<v-list-item-content>
								<v-list-item-title v-text="item.name"></v-list-item-title>
								<v-list-item-subtitle v-text="item.description"></v-list-item-subtitle>
							</v-list-item-content>
						</v-list>
					</template>
				</v-autocomplete>
				<br>
				<v-divider />
				<v-form>
					<v-text-field required label="Name" v-model="newProperty.name"></v-text-field>
					<v-textarea required label="Description" v-model="newProperty.description"></v-textarea>
					<v-btn @click="createProp">
						Create
					</v-btn>
				</v-form>
			</v-card-text>

			<v-divider></v-divider>

			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="primary" text @click="$emit('addProps', searchSelected); dialog = false">
					Confirm
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>
<script>
import axios from 'axios';

export default {
	name: "Picker",
	data() {
		return {
			dialog: false,
			items: [],
			searchSelected: [],
			isLoading: false,
			search: "",
			newProperty: {},
		}
	},
	watch: {
		async search(val) {
			if (!val || this.loading) return;

			this.isLoading = true;
			console.log(val)

			const response = await axios.get(`${process.env.VUE_APP_DND_API_ENDPOINT}/items/properties/?search_query=${val}`);
			console.log(response);

			this.items = response.data.properties;

			this.isLoading = false;
		},
	},
	methods: {
		async createProp() {
			let response = await axios.post(`${process.env.VUE_APP_DND_API_ENDPOINT}/items/properties/`, this.newProperty);
			this.$emit('addProps', [response.data.id]);
			this.dialog = false;
		},
	},
	props: {
		selected: {
			type: Array
		},
		selectionType: {
			type: String
		}
	}
}
</script>