<template>
	<div>
		<v-card class="mx-auto">
			<v-card-text v-if="!loading">
				<p class="text-h4 text--primary mb-0">{{ itemData.name }}</p>
				<div>{{ itemData.type }}</div>
				<v-chip-group>
					<v-chip color="deep-orange darken-4">{{ itemData.cost_gp + "GP" }}</v-chip>
					<v-chip color="grey">{{ itemData.weight_lbs + "lbs" }}</v-chip>
				</v-chip-group>
				<v-divider />
				<p>{{ itemData.description }}</p>
				<v-expansion-panels>
					<v-expansion-panel>
						<v-expansion-panel-header v-on:click="toggleExpanded">
							Details
						</v-expansion-panel-header>
						<v-expansion-panel-content v-if="expanded">
							<div v-if="itemData.details">
								<v-list>
									<v-list-item-group active-class="">

										<v-list-item v-for="(value, key) in itemData.details" :key="key">
											<v-list-item-icon v-if="icons[key]">
												<v-icon v-text="icons[key]"></v-icon>
											</v-list-item-icon>

											<v-list-item-content>
												<v-list-item-title v-text="`${key}: ${value}`"></v-list-item-title>
											</v-list-item-content>
										</v-list-item>

									</v-list-item-group>
								</v-list>
							</div>
							<div v-else>
								<v-skeleton-loader type="list-item@3"></v-skeleton-loader>
							</div>
						</v-expansion-panel-content>
					</v-expansion-panel>
				</v-expansion-panels>
			</v-card-text>
			<v-skeleton-loader v-else type="card"></v-skeleton-loader>
			<v-card-actions v-if="editable">
				<v-chip-group>
					<v-chip @click="copyToClipboard(itemData.id)">
						<v-icon left>
							mdi-content-copy
						</v-icon>
						ID: {{ itemData.id }}
					</v-chip>
				</v-chip-group>
				<v-spacer></v-spacer>
				<v-btn @click="dialog = true"><v-icon>mdi-pencil</v-icon></v-btn>
				<v-btn><v-icon>mdi-delete</v-icon></v-btn>
			</v-card-actions>
		</v-card>

		<v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
			<v-card>
				<v-toolbar dark color="primary">
					<v-btn icon dark @click="dialog = false">
						<v-icon>mdi-close</v-icon>
					</v-btn>
					<v-toolbar-title>Edit Item</v-toolbar-title>
				</v-toolbar>
				<ItemEditor v-if="editable" :itemId="itemData.id" @closeDialog="dialog = false" />

			</v-card>
		</v-dialog>


	</div>
</template>

<script>
import axios from "axios";
import ItemEditor from "@/components/ItemEditor.vue"

export default {
	name: "Item",
	components: {
		ItemEditor
	},
	props: {
		item: {
			type: Object,
			required: false,
		},
		id: {
			type: String
		},
		local: {
			type: Boolean,
			default: false
		},
		editable: {
			type: Boolean,
			default: true
		}
	},
	mounted() {
		if (this.item) {
			this.itemData = this.item;
		} else {
			this.fetchDetails();
		}
	},
	data() {
		return {
			loading: true,
			expanded: false,
			dialog: false,
			itemData: {},
			icons: {
				damage_roll: 'mdi-sword-cross'
			}

		};
	},
	methods: {
		async editItem() {

		},
		copyToClipboard(text) {

			navigator.clipboard.writeText(text);
		},
		toggleExpanded() {
			this.expanded = !this.expanded;
			if (this.expanded && !this.itemData.details) {
				this.fetchDetails()
			}
		},
		async fetchDetails() {

			if (this.local && this.id) {
				this.itemData = this.$store.state.items.filter(x => x.id == this.id)[0];
			} else {
				let id = this.item ? this.item.id : this.id;

				const response = await axios.get(`${process.env.VUE_APP_DND_API_ENDPOINT}/items/id/${id}`);
				this.itemData = response.data;
			}

			this.loading = false;
		},
	},
};
</script>
