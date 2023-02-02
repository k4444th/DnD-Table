<template>
	<v-card>
		<v-card-title primary-title>
			My Campaigns
		</v-card-title>
		<v-card-text>
			<v-list subheader two-line>
				<router-link v-for="campaign in campaigns" :key="campaign.id" :to="'/campaigns/id/' + campaign.id">
					<v-list-item link>
						<v-list-item-avatar color="primary">
							{{ campaign.role == "dungeon_master" ? "DM" : "PC" }}
						</v-list-item-avatar>
						<v-list-item-content>
							<v-list-item-title v-text="campaign.name"></v-list-item-title>

							<v-list-item-subtitle>
								{{ new Date(campaign.created_at).toLocaleDateString() }}
							</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>
				</router-link>
			</v-list>
		</v-card-text>

		<v-card-actions>
			<v-spacer />
			<v-btn color="primary" class="ml-2" @click="openJoin">Join</v-btn>
			<v-dialog transition="dialog-bottom-transition" max-width="600" v-model="joinDialog">
				<template v-slot:default="joinDialog">
					<v-card>
						<v-toolbar color="primary" dark>Join a campaign</v-toolbar>
						<br>
						<v-card-text>
							<v-text-field label="Join a campaign" placeholder="Campaign ID"
								v-model="joinId"></v-text-field>
							<v-row>
								<v-col cols="10" sm="11">
									<v-text-field v-model="joinPassword" label="Password" required
										:type="joinVisible ? 'text' : 'password'"></v-text-field>
								</v-col>
								<v-col cols="2" sm="1">
									<v-icon class="eye-con" v-if="joinVisible"
										v-on:click="joinToggleVisible">mdi-eye-off-outline</v-icon>
									<v-icon class="eye-con" v-else
										v-on:click="joinToggleVisible">mdi-eye-outline</v-icon>
								</v-col>
							</v-row>
							<v-autocomplete v-model="joinCharacter" :items="characters" :loading="characterSeachLoading"
								:search-input.sync="characterSearch" cache-items clearable item-text="name"
								item-value="id" label="Search your characters..." solo>
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
											<v-list-item-subtitle
												v-text="`Level ${item.level} ${item.background} ${item.class}`"></v-list-item-subtitle>
										</v-list-item-content>
									</v-list>
								</template>
							</v-autocomplete>
						</v-card-text>
						<v-card-actions class="justify-end">
							<v-btn color="primary" @click="joinCampaign">Join</v-btn>
							<v-spacer></v-spacer>
							<v-btn text @click="joinDialog.value = false">Close</v-btn>
						</v-card-actions>
					</v-card>
				</template>
			</v-dialog>

			<v-btn color="primary" class="ml-2" @click="openCreate">Create</v-btn>
			<v-dialog transition="dialog-bottom-transition" v-model="createDialog" max-width="600">
				<template v-slot:default="createDialog">
					<v-card>
						<v-toolbar color="primary" dark>Create a campaign</v-toolbar>
						<br>
						<v-card-text>
							<v-text-field label="Create a campaign" placeholder="Campaign name"
								v-model="createCampaignName"></v-text-field>
							<v-row>
								<v-col cols="10" sm="11">
									<v-text-field v-model="createPassword" label="Password" required
										:type="createVisible ? 'text' : 'password'"></v-text-field>
								</v-col>
								<v-col cols="2" sm="1">
									<v-icon class="eye-con" v-if="createVisible"
										v-on:click="createToggleVisible">mdi-eye-off-outline</v-icon>
									<v-icon class="eye-con" v-else
										v-on:click="createToggleVisible">mdi-eye-outline</v-icon>
								</v-col>
							</v-row>
							<br>
							<v-slider v-model="createSliderValue" thumb-label min="1" max="20"
								label="Max. players"></v-slider>
						</v-card-text>
						<v-card-actions class="justify-end">
							<v-btn color="primary" @click="createCampaign">Create</v-btn>
							<v-spacer></v-spacer>
							<v-btn text @click="createDialog.value = false">Close</v-btn>
						</v-card-actions>
					</v-card>
				</template>
			</v-dialog>
			<v-spacer />
		</v-card-actions>
	</v-card>
</template>
<script>
import jwtDecode from 'jwt-decode';

export default {
	name: "Campaigns",
	data() {
		return {
			campaigns: [],
			characters: [],
			createDialog: false,
			createCampaignName: "",
			createSliderValue: 0,
			createVisible: false,
			createPassword: "",
			joinDialog: false,
			joinId: "",
			joinPassword: "",
			joinCharacter: "",
			joinVisible: false,
			characterSeachLoading: true,
			characterSearch: ""
		}
	},
	async mounted() {
		this.fetchCampaigns();
	},
	methods: {
		openCreate() {
			this.createDialog = true;
		},
		async createCampaign() {
			if (this.creatCampaignName != "" && this.createPassword != "") {
				const response = await this.$axios.post(`/campaigns/`, { name: this.createCampaignName, password: this.createPassword, max_players: this.createSliderValue });

				if (response.status == 200) {
					this.createDialog = false;
					this.createCampaignName = "";
					this.createPassword = "";
					this.createSliderValue = 1;

					this.fetchCampaigns();
				}
			}
		},
		createToggleVisible() {
			this.createVisible = !this.createVisible;
		},
		openJoin() {
			this.joinDialog = true;
		},
		async joinCampaign() {
			if (this.joinId != "" && this.joinCharacter != "") {
				console.log(this.joinCharacter)

				let userId = jwtDecode(localStorage.getItem('jwt'));

				const response = await this.$axios.post(`/campaigns/id/${this.joinId}/join`, { id: userId, character_id: this.joinCharacter, password: this.joinPassword });

				if (response.status == 200) {
					this.joinDialog = false;
					this.fetchCampaigns();

					this.joinId = "";
					this.joinPassword = "";
					this.joinCharacter = "";
				}
			}
		},
		joinToggleVisible() {
			this.joinVisible = !this.joinVisible;
		},
		async fetchCampaigns() {
			const campainResponse = await this.$axios.get('/campaigns/my');
			this.campaigns = campainResponse.data.campaigns;
		}
	},
	watch: {
		async characterSearch(val) {
			// TODO: add rate limiting maybe
			this.characterSeachLoading = true;
			const response = await this.$axios.get('/characters/my?search_query=' + encodeURIComponent(val));

			this.characters = response.data.characters;
			this.characterSeachLoading = false;

		}
	}
}
</script>
<style scoped>
a {
	text-decoration: none;
}

.eye-con {
	cursor: pointer;
	margin-top: 1rem;
}
</style>