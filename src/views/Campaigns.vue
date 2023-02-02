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
					<v-card-text>
						<div class="text-h2 pa-12">Hello world!</div>
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
						<v-text-field label="Create a campaign" placeholder="Campaign name" v-model="createCampaignName"></v-text-field>
						<v-row>
							<v-col cols="10" sm="11">
								<v-text-field v-model="createPassword" label="Password" required :type="createVisible ? 'text' : 'password'"></v-text-field>
							</v-col>
							<v-col cols="2" sm="1">
								<v-icon class="eye-con" v-if="createVisible"
									v-on:click="toggleVisible">mdi-eye-off-outline</v-icon>
								<v-icon class="eye-con" v-else v-on:click="createToggleVisible">mdi-eye-outline</v-icon>
							</v-col>
						</v-row>
						<br>
						<v-slider v-model="createSliderValue" thumb-label min="1" max="20" label="Max. players"></v-slider>
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
export default {
	name: "Campaigns",
	data() { 
		return { 
			campaigns: [],
			characters: [],

			createDialog: false,
			joinDialog: false,
			createCampaignName: "",
			creatSliderValue: 0,
			createVisible: false,
			createPassword: ""
		}
	},
	async mounted() {
		const campainResponse = await this.$axios.get('/campaigns/my');
		this.campaigns = campainResponse.data.campaigns;

		const characterResponse = await this.$axios.get('/characters/my?page=1&pageSize=10&search_query=BlablablubderWachelpudding');
		this.characters = characterResponse.data.campaigns;
	},
	methods: {
		openCreate() {
			this.createDialog = true;
		},
		async createCampaign() {
			if (this.creatCampaignName != "" && this.createPassword != "") {
				let campaign = [this.createDialog, this.createCampaignName, this.createSliderValue];
				this.createDialog = false;
				this.createCampaignName = "";
				this.createPassword = "";
				this.createSliderValue = 1;
				console.log(response);
				let response = await this.$axios.post(`/campaigns/`, campaign[0], campaign[1], campaign[2]);
	
			}
		},
		createToggleVisible() {
			this.createVisible = !this.createVisible;
		},
		openJoin() {
			this.joinDialog = true;
		},
		joinCampaign() {
			console.log("Hi");
			this.joinDialog = false;
			console.log(this.characters);
		},
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