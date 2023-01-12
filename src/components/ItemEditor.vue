<template>
	<v-container>
		<div v-if="loading"><v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader></div>
		<div v-if="!loading">
			<v-form>
				<v-text-field label="Name" v-model="item.name"></v-text-field>
				<v-select label="Type" :items="itemTypes" v-model="item.type"></v-select>
				<v-text-field label="Value" v-model="item.cost_gp" suffix="GP"></v-text-field>
				<v-text-field label="Weight" v-model="item.weight_lbs" suffix="lbs"></v-text-field>
				<v-textarea label="Description" v-model="item.description"></v-textarea>

				<v-divider />


				<div v-if="item.type == 'Weapon'">
					<v-checkbox v-model="item.details.ranged" :label="`Ranged`"></v-checkbox>
					<v-text-field label="Proficiency" hint="simple weapon, battleaxe, ..."
						v-model="item.details.proficiency"></v-text-field>
					<v-text-field label="Damage Roll" hint="1d4, 1d8, ..."
						v-model="item.details.damage_roll"></v-text-field>
					<v-autocomplete label="Damage Type" :items="damageTypes"
						v-model="item.details.damage_type"></v-autocomplete>
					<v-text-field label="Ammo Type" v-model="item.details.ammo_type"></v-text-field>
				</div>

				<div v-if="item.type == 'Armor'">
					<v-text-field label="Armor Class" v-model="item.details.armor_class"></v-text-field>
					<v-checkbox v-model="item.details.stealth_disadvantage"
						:label="'Stealth Disadvantage'"></v-checkbox>
					<v-text-field label="Strenght Requirement"
						v-model="item.details.strenght_requirement"></v-text-field>
					<v-select label="Armor Type" :items="armorTypes" v-model="item.details.armor_type"></v-select>
					<v-select label="Skill for AC mod" v-model="item.details.armor_class_mod"></v-select>
					<v-select label="Max AC mod" v-model="item.details.armor_class_mod_max"></v-select>
				</div>

				<div v-if="item.type == 'Adventuring Gear'">
					<v-text-field label="Gear Type" v-model="item.details.gear_type"
						hint="Equipment, Container, Utility, ..."></v-text-field>
					<v-text-field label="Ammo Type" v-model="item.details.ammo_type"></v-text-field>
					<v-text-field label="Container Capacity" v-model="item.details.container_capacity"></v-text-field>
				</div>

				<div v-if="item.type == 'Equipment Pack'">
					<h1>TODO</h1>
				</div>

				<div v-if="item.type == 'Tool'">
					<v-text-field label="Tool Type" v-model="item.details.tool_type"></v-text-field>
				</div>

			</v-form>

			<v-btn color="green" fixed bottom right fab @click="saveData">
				<v-icon>mdi-content-save</v-icon>
			</v-btn>

		</div>
	</v-container>
</template>

<script>
import axios from "axios";

export default {
	name: "ItemEditor",
	props: {
		itemId: {
			type: String,
			required: false,
		}

	},
	data() {
		return {
			loading: true,
			item: {},
			itemTypes: ['Weapon', 'Armor', 'Adventuring Gear', 'Equipment Pack', 'Tool'],
			damageTypes: ['slashing', 'bludgeoning', 'piercing', 'force', 'fire', 'cold', 'lightning', 'thunder', 'poison', 'acid', 'psychic', 'necrotic', 'radiant'],
			armorTypes: ['Light', 'Medium', 'Heavy', 'Shield']
		};
	},
	mounted() {
		if (this.itemId) {
			this.fetchData();
		}else{
			this.item = {details:{}}
		}
		this.loading = false;

	},
	methods: {
		async fetchData() {
			const response = await axios.get(`${process.env.VUE_APP_DND_API_ENDPOINT}/items/id/${this.itemId}`);
			console.log(response.data)
			this.item = response.data;
		},

		async saveData() {
			// If its an existing Item save the changes, otherwise create a new one
			let response;

			if (this.itemId) {
				console.log('Updating item');
				response = await axios.put(`${process.env.VUE_APP_DND_API_ENDPOINT}/items/id/${this.itemId}`, this.item);

			} else {
				console.log('Creating item')
				response = await axios.post(`${process.env.VUE_APP_DND_API_ENDPOINT}/items/`, this.item);

			}

			console.log(response)

			this.$emit('closeDialog')
		}
	}

};
</script>
