<template>
	<v-container>
		<v-text-field v-model="search_query">
			<v-icon slot="prepend">
				mdi-magnify
			</v-icon>
		</v-text-field>

		<div v-if="loading"><v-skeleton-loader class="mx-auto" type="card@5"></v-skeleton-loader></div>

		<div v-if="!loading">
			<v-container v-for="item in items" :key="item.id">
				<Item :item="item"/>
			</v-container>
			<p v-if="items.length == 0">No items found.</p>
		</div>

		<v-pagination v-model="page" :length="total" @input="search_items"></v-pagination>

		<v-btn color="green" fixed bottom right fab @click="dialog = true">
			<v-icon>mdi-plus</v-icon>
		</v-btn>

		<v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
			<v-card>
				<v-toolbar dark color="primary">
					<v-btn icon dark @click="dialog = false">
						<v-icon>mdi-close</v-icon>
					</v-btn>
					<v-toolbar-title>Create Item</v-toolbar-title>
				</v-toolbar>
				<ItemEditor @closeDialog="dialog = false"/>

			</v-card>
		</v-dialog>

	</v-container>
</template>

<script>
import axios from 'axios';

import Item from "@/components/Item.vue";
import ItemEditor from '../components/ItemEditor.vue';

export default {
	data() {
		return {
			search_query: '',
			items: [],
			total: 0,
			page: 1,
			search_timeout: null,
			loading: false,
			dialog: false
		};
	},
	methods: {
		async search_items() {
			this.loading = true;

			const response = await axios.get(`${process.env.VUE_APP_DND_API_ENDPOINT}/items/?page=${this.page}&pageSize=${5}&search_query=${this.search_query}`);
			
			this.items = response.data.items;
			this.total = Math.ceil(response.data.total / 5);

			console.log(response.data)
			this.loading = false;
		}
	},
	created() {
		this.search_items('');
	},
	watch: {
		async search_query() {
			if(this.search_timeout) clearTimeout(this.search_timeout);
			this.search_timeout = setTimeout(this.search_items, 500);
		}
	},
	components: {
		Item,
		ItemEditor
	}
};
</script>
