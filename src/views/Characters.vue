<template>
	<v-container>
		<CharacterSheet :character-id="'81df7186-6ee2-46f9-94ce-2205639cf284'" />
		<v-btn color="green" fixed bottom right fab @click="dialog = true">
			<v-icon>mdi-plus</v-icon>
		</v-btn>

		<v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
			<v-card>
				<v-toolbar dark color="primary">
					<v-btn icon dark @click="dialog = false">
						<v-icon>mdi-close</v-icon>
					</v-btn>
					<v-toolbar-title>Create Character</v-toolbar-title>
				</v-toolbar>
				<CharacterEditor @closeDialog="dialog = false" />

			</v-card>
		</v-dialog>
	</v-container>
</template>

<script>
import CharacterSheet from '../components/CharacterSheet.vue';
import CharacterEditor from '../components/CharacterEditor/CharacterEditor.vue';

export default {
	data() {
		return {
			dialog: false
		}
	},
	components: {
		CharacterSheet,
		CharacterEditor
	}
}

</script>