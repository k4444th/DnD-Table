<template>
	<v-container>
		<v-data-table :headers="headers" :items="items" :search="searchQuery" :page.sync="page"
			:items-per-page="pageSize" :server-items-length="total" @update:search="updateSearch">
			<template v-slot:item.name="{ item }">
				<span>{{ item.name }}</span>
			</template>
			<template v-slot:item.description="{ item }">
				<span>{{ item.description }}</span>
			</template>
			<template v-slot:item.actions="{ item }">
				<v-btn color="primary" @click="editItem(item)">Edit</v-btn>
				<v-btn color="error" @click="deleteItem(item)">Delete</v-btn>
			</template>
		</v-data-table>
		<v-pagination v-model="page" :length="totalPages"></v-pagination>
		<v-dialog v-model="dialog" fullscreen>
			<v-card>
				<v-card-title>
					<span v-if="isEdit">Edit Item</span>
					<span v-else>Add Item</span>
				</v-card-title>
				<v-card-text>
					<v-form>
						<v-text-field label="Name" v-model="currentItem.name" />
						<v-text-field label="Description" v-model="currentItem.description" />
					</v-form>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="primary" @click="saveItem">Save</v-btn>
					<v-btn color="error" @click="closeDialog">Cancel</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
		<v-btn color="success" @click="addItem">Add</v-btn>
	</v-container>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			headers: [
				{ text: 'Name', value: 'name' },
				{ text: 'Description', value: 'description' },
				{ text: 'Actions', value: 'actions' },
			],
			items: [],
			page: 1,
			pageSize: 10,
			searchQuery: '',
			total: 0,
			totalPages: 0,
			dialog: false,
			isEdit: false,
			currentItem: {
				name: '',
				description: '',
			},
		};
	},
	methods: {
		// CRUD actions
		async addItem() {
			this.dialog = true;
			this.isEdit = false;
			this.currentItem = {
				name: '',
				description: '',
			}
		},
		async editItem(item) {
			this.dialog = true;
			this.isEdit = true;
			this.currentItem = { ...item }
		},
		async saveItem() {
			try {
				let result;
				if (this.isEdit) {
					//update item
					result = await axios.put(`http://localhost:3000/items/id/${this.currentItem.id}`, this.currentItem);
				} else {
					//create new item
					result = await axios.post(`http://localhost:3000/items`, this.currentItem);
				}

				console.log(result);
				
				//refresh the list
				this.fetchData();
				this.dialog = false;
			} catch (error) {
				console.error(error);
			}
		},
		async deleteItem(item) {
			try {
				await axios.delete(`http://localhost:3000/items/id/${item.id}`);
				this.fetchData();
			} catch (error) {
				console.error(error);
			}
		},
		closeDialog() {
			this.dialog = false;
		},
		// get data from the server
		async fetchData() {
			try {
				const { data } = await axios.get('http://localhost:3000/items', {
					params: {
						page: this.page,
						pageSize: this.pageSize,
						search_query: this.searchQuery
					}
				});
				this.items = data.items;
				this.total = Number(data.total);
				this.totalPages = Math.ceil(this.total / this.pageSize);
			} catch (error) {
				console.error(error);
			}
		},
		updateSearch() {
			this.page = 1;
			this.fetchData();
		},
	},
	created() {
		this.fetchData();
	},
};
</script>
