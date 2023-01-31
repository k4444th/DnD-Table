<template>
	<v-container>
		<div v-for="id in characterIds" :key="id">
			<CharacterSheet :character-id="id" editable></CharacterSheet>
		</div>
	</v-container>
</template>
<script>
import CharacterSheet from './CharacterSheet.vue';
export default {
	name: "DungeonMaster",
	props: {
		characterIds: {
			type: Array,
			required: true
		}
	},
	components: {
		CharacterSheet
	}
}
</script>