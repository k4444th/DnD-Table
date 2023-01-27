<template>

	<div v-if="account">
		<h1>{{ account.nickname }}</h1>
		<h1>Test</h1>
	</div>
</template>

<script>
import jwtDecode from 'jwt-decode'

export default {
	data() { return { account: false } },
	async mounted() {
		const jwt = localStorage.getItem('jwt');

		if (!jwt) return false;

		const decoded = jwtDecode(jwt);

		const response = await this.$axios.get('/users/id/' + decoded.id);

		this.account = response.data;
	}
}
</script>