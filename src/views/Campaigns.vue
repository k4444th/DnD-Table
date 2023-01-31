<template>
	<v-card>
		<v-card-title primary-title>
			My Campaigns
		</v-card-title>
		<v-card-text>
			<v-list subheader two-line>
				<v-list-item v-for="campaign in campaigns" :key="campaign.id" link>
					<v-list-item-content>
						<v-list-item-title v-text="campaign.name"></v-list-item-title>

						<v-list-item-subtitle v-text="campaign.role"></v-list-item-subtitle>
					</v-list-item-content>

					<v-list-item-action>
						<v-btn icon>
							<v-icon color="grey lighten-1">mdi-information</v-icon>
						</v-btn>
					</v-list-item-action>
				</v-list-item>
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

		this.campaigns = response.data;
	}
}
</script>