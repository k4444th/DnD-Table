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
			<v-btn>Join</v-btn>
			<v-btn>Create</v-btn>
			<v-spacer />
		</v-card-actions>
	</v-card>
</template>
<script>
export default {
	name: "Campaigns",
	data() { return { campaigns: [] } },
	async mounted() {
		const response = await this.$axios.get('/campaigns/my');

		this.campaigns = response.data.campaigns;
	}
}
</script>
<style scoped>
a {
	text-decoration: none;
}
</style>