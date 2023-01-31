<template>
	<v-container>
		<div v-if="account">
			<h1>{{ account.name }}</h1>
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