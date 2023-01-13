<template>
	<div>
		<v-card class="mx-auto">

			<v-card-text>
				<p class="text-h4 text--primary mb-0">{{ item.name }}</p>
				<div>{{ item.type }}</div>
				<v-chip-group>
					<v-chip color="amber">{{ item.cost_gp + "GP" }}</v-chip>
					<v-chip color="grey">{{ item.weight_lbs + "lbs" }}</v-chip>
				</v-chip-group>
				<v-divider />
				<p>{{ item.description }}</p>
				<v-expansion-panels>
					<v-expansion-panel>
						<v-expansion-panel-header v-on:click="toggleExpanded">
							Details
						</v-expansion-panel-header>
						<v-expansion-panel-content v-if="expanded">
							<div v-if="details">
								<v-list>
									<v-list-item-group active-class="">

										<v-list-item v-for="(value, key) in details" :key="key">
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
			<v-card-actions>
				<v-chip-group>
					<v-chip @click="copyToClipboard(item.id)">
						<v-icon left>
							mdi-content-copy
						</v-icon>
						ID: {{ item.id }}
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
				<ItemEditor :itemId="item.id" @closeDialog="dialog = false" />

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
			required: true,
		},
	},
	data() {
		return {
			loading: false,
			expanded: false,
			details: null,
			dialog: false,
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
			if (this.expanded && !this.details) {
				this.fetchDetails()
			}
		},
		async fetchDetails() {
			const response = await axios.get(`${process.env.VUE_APP_DND_API_ENDPOINT}/items/id/${this.item.id}`);
			console.log(response.data)
			this.details = response.data.details;
		},
	},
};
</script>
