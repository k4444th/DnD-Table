<template>
	<v-container>
		<div v-if="account">
			<h1>{{ account.name }}</h1>
		</div>
		<div v-for="campaign in campaigns" :key="campaign.id">
			<h1>{{ campaign.name }}</h1>
			<p>{{ campaign.role }}</p>
			<router-link :to="'/campaign/' + campaign.id">
				<v-btn>Join</v-btn>
			</router-link>
		</div>
	</v-container>
</template>

<script>
import jwtDecode from 'jwt-decode'

export default {
	data() { return { account: false, campaigns: [] } },
	async mounted() {
		const jwt = localStorage.getItem('jwt');

		if (!jwt) return false;

		const decoded = jwtDecode(jwt);

		const response = await this.$axios.get('/users/id/' + decoded.id);

		this.account = response.data;

		const campaignsResponse = await this.$axios.get('/campaigns/my');

		this.campaigns = campaignsResponse.data;

		console.log(this.campaigns);
	}
}
</script>