<template>
	<v-container>
		<h3>{{ campaign.name }}</h3>

		<div v-if="loading">
			<v-skeleton-loader />
		</div>

		<div v-else>
			<div v-if="user.role == 'dungeon_master'">
				<DungeonMaster v-bind:characterIds="characterIds"></DungeonMaster>
			</div>
			<div v-else-if="user.role == 'player'">
				<CharacterSheet :characterId="user.character_id" :editable="false"></CharacterSheet>
			</div>
			<div v-else>
				<h1>Join View</h1>
			</div>
		</div>
	</v-container>
</template>
<script>
import DungeonMaster from '../components/DungeonMaster.vue';
import CharacterSheet from '../components/CharacterSheet.vue';

import jwtDecode from 'jwt-decode'

export default {
	name: "Campaign",
	async mounted() {
		let campaign = await this.$axios.get('/campaigns/id/' + this.$route.params.id);
		console.log(campaign);

		this.campaign = campaign.data;

		const jwt = localStorage.getItem('jwt');
		const decoded = jwtDecode(jwt);

		this.user = this.campaign.users.find(x => x.user_id == decoded.id);

		this.loading = false

	},
	data() {
		return { campaign: {}, user: {}, loading: true }
	},
	computed: {
		characterIds() {
			const players = this.campaign.users.filter(x => x.role == 'player');
			console.log(players);

			return players.map(x => x.character_id);
		}
	},
	components: {
		DungeonMaster,
		CharacterSheet
	}
}
</script>