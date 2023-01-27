<template>
	<Login :redirect="redirect"></Login>
</template>
<script>
import Login from '../components/Login.vue';
export default {
	components: { Login },
	computed: {
		redirect() {
			return this.$route.query.redirect || '';
		}
	}
}
</script>