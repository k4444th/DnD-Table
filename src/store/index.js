import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {

		registered: false,

		users: [
			{
				login: "temp",
				password: "secure_pwd"
			},
			{
				login: "temp2",
				password: "very_secure_pwd"
			}
		],

		previews: [
			{name: "create", icon: "mdi-pencil-outline", url: "/gamemaster"},
			{name: "join", icon: "mdi-account-plus-outline", url: "/player"},
			{name: "TV", icon: "mdi-television", url: "/tv"},
		],

		currentMap: 1,

		maps: [
			"./../../public/img/maps/map1.jpeg",
			"./../../public/img/maps/map2.jpeg"
		],

		wotd: 0,

		weapons: [
			{
				name: "Sword",
				// shield: "./../../public/img/shapes/shield1.svg",
				icon: "mdi-knife-military",
				description: "You can cut your vegetables using a sword. Just be carefull not to hurt your fingers. It is very sharp so always hande it with caution. It would be the best, if you didn't use it at all",
				properties: [
					{ name: "wealth", score: "1 sp" },
					{ name: "cost damage", score: "1d4 bludgeoning" },
					{ name: "weight properties", score: "2lb" },
					{ name: "simple melee weoapons", score: "Light" }
				]
			},
			{
				name: "Bubble",
				// shield: "./../../public/img/shapes/shield1.svg",
				icon: "mdi-chart-bubble",
				description: "You can cut your vegetables using a sword. Just be carefull not to hurt your fingers. It is very sharp so always hande it with caution. It would be the best, if you didn't use it at all",
				properties: [
					{ name: "wealth", score: "1 sp" },
					{ name: "cost damage", score: "1d4 bludgeoning" },
					{ name: "weight properties", score: "2lb" },
					{ name: "simple melee weoapons", score: "Light" }
				]
			},
			{
				name: "Shield",
				// shield: "./../../public/img/shapes/shield1.svg",
				icon: "mdi-security",
				description: "You can cut your vegetables using a sword. Just be carefull not to hurt your fingers. It is very sharp so always hande it with caution. It would be the best, if you didn't use it at all",
				properties: [
					{ name: "wealth", score: "1 sp" },
					{ name: "cost damage", score: "1d4 bludgeoning" },
					{ name: "weight properties", score: "2lb" },
					{ name: "simple melee weoapons", score: "Light" }
				]
			},
			{
				name: "Bow",
				// shield: "./../../public/img/shapes/shield1.svg",
				icon: "mdi-bow-arrow",
				description: "You can cut your vegetables using a sword. Just be carefull not to hurt your fingers. It is very sharp so always hande it with caution. It would be the best, if you didn't use it at all",
				properties: [
					{ name: "wealth", score: "1 sp" },
					{ name: "cost damage", score: "1d4 bludgeoning" },
					{ name: "weight properties", score: "2lb" },
					{ name: "simple melee weoapons", score: "Light" }
				]
			}
		],

		items: [
			{
				"name": "Disguise Kit",
				"description": "This pouch of cosmetics, hair dye, and small props lets you create disguises that change your physical appearance. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a visual disguise.",
				"cost_gp": "25",
				"weight_lbs": "3",
				"type": "Tool",
				"image_url": null,
				"id": "b8095b2b-f272-462c-8773-5b0e0a5b75ab",
				"properties": [],
				"details": {
					"tool_type": "Kit"
				}
			},
			{
				"name": "Crowbar",
				"description": "Using a crowbar grants advantage to Strength checks where the crowbar's leverage can be applied.",
				"cost_gp": "2",
				"weight_lbs": "5",
				"type": "Adventuring Gear",
				"image_url": null,
				"id": "61ad9968-6cb8-4c79-84da-a7ece51a5118",
				"properties": [],
				"details": {
					"gear_type": "Equipment",
					"ammo_type": null,
					"container_capacity": null
				}
			},
			{
				"name": "Hammer",
				"description": "This one-handed hammer with an iron head is useful for pounding pitons into a wall.",
				"cost_gp": "1",
				"weight_lbs": "3",
				"type": "Adventuring Gear",
				"image_url": null,
				"id": "56ec76fd-d051-4ba7-b9eb-77534172918e",
				"properties": [],
				"details": {
					"gear_type": "Equipment",
					"ammo_type": null,
					"container_capacity": null
				}
			},
			{
				"name": "Torch",
				"description": "A torch burns for 1 hour, providing bright light in a 20-foot radius and dim light for an additional 20 feet. If you make a melee attack with a burning torch and hit, it deals 1 fire damage.",
				"cost_gp": "0.0001",
				"weight_lbs": "1",
				"type": "Adventuring Gear",
				"image_url": null,
				"id": "f9f65824-9208-44af-a921-959fa057d459",
				"properties": [],
				"details": {
					"gear_type": "Equipment",
					"ammo_type": null,
					"container_capacity": null
				}
			},
			{
				"name": "Piton",
				"description": "When a wall doesn’t offer handholds and footholds, you can make your own. A piton is a steel spike with an eye through which you can loop a rope.",
				"cost_gp": "0.0005",
				"weight_lbs": "0.25",
				"type": "Adventuring Gear",
				"image_url": null,
				"id": "08e10634-85cc-4660-a275-fd484c359d83",
				"properties": [],
				"details": {
					"gear_type": "Equipment",
					"ammo_type": null,
					"container_capacity": null
				}
			},
			{
				"name": "Tinderbox",
				"description": "This small container holds flint, fire steel, and tinder (usually dry cloth soaked in light oil) used to kindle a fire. Using it to light a torch -- or anything else with abundant, exposed fuel -- takes an action. Lighting any other fire takes 1 minute.",
				"cost_gp": "0.05",
				"weight_lbs": "1",
				"type": "Adventuring Gear",
				"image_url": null,
				"id": "a849bdfd-bb67-40e8-bf6d-dd9c0c9ae4fa",
				"properties": [],
				"details": {
					"gear_type": "Equipment",
					"ammo_type": null,
					"container_capacity": null
				}
			},
			{
				"name": "Waterskin",
				"description": "A waterskin can hold 4 pints of liquid.",
				"cost_gp": "0.05",
				"weight_lbs": "1",
				"type": "Adventuring Gear",
				"image_url": null,
				"id": "36b93b7e-f90d-497f-b99c-ca497e895fab",
				"properties": [],
				"details": {
					"gear_type": "Container",
					"ammo_type": null,
					"container_capacity": "4 pints"
				}
			},
			{
				"name": "Battleaxe",
				"description": "Proficiency with a battleaxe allows you to add your proficiency bonus to the attack roll for any attack you make with it.",
				"cost_gp": "10",
				"weight_lbs": "4",
				"type": "Weapon",
				"image_url": null,
				"id": "18464537-20cb-4d5d-85d3-d0b9086fd435",
				"properties": [
					{
						"property_id": "37f92bc2-1d3a-42f1-b2ae-2cba1beed5cb",
						"name": "Versatile",
						"details": "1d10",
						"description": "This weapon can be used with one or two hands. A damage value in parentheses appears with the property--the damage when the weapon is used with two hands to make a melee attack."
					}
				],
				"details": {
					"ranged": false,
					"proficiency": "battleaxe",
					"damage_roll": "1d8",
					"damage_type": "slashing",
					"ammo_type": ""
				}
			},
			{
				"name": "Rope, Hempen (50 feet)",
				"description": "Rope, has 2 hit points and can be burst with a DC 17 Strength check.",
				"cost_gp": "1",
				"weight_lbs": "10",
				"type": "Adventuring Gear",
				"image_url": null,
				"id": "5bc9fab4-a970-43dc-8eec-2768dabcd4b9",
				"properties": [],
				"details": {
					"gear_type": "Utility",
					"ammo_type": null,
					"container_capacity": null
				}
			},
			{
				"name": "Backpack",
				"description": "A backpack is a leather pack carried on the back, typically with straps to secure it. A backpack can hold 1 cubic foot/ 30 pounds of gear.\nYou can also strap items, such as a bedroll or a coil of rope, to the outside of a backpack.",
				"cost_gp": "10",
				"weight_lbs": "4",
				"type": "Adventuring Gear",
				"image_url": null,
				"id": "01d56226-1bc0-4c0d-9684-09c26ccc7e87",
				"properties": [],
				"details": {
					"gear_type": "Container",
					"ammo_type": null,
					"container_capacity": "1f³ / 30lbs"
				}
			},
			{
				"name": "Leather Armor",
				"description": "The breastplate and shoulder protectors of this armor are made of leather that has been stiffened by being boiled in oil. The rest of the armor is made of softer and more flexible materials.",
				"cost_gp": "10",
				"weight_lbs": "10",
				"type": "Armor",
				"image_url": null,
				"id": "ca05dead-b3a1-4e46-b215-b5e07dddc470",
				"properties": [],
				"details": {
					"armor_class": "11",
					"stealth_disadvantage": false,
					"strenght_requirement": null,
					"armor_type": "Light",
					"armor_class_mod_max": null,
					"armor_class_mod": "dexterity"
				}
			},
			{
				"name": "Dungeoneer's Pack",
				"description": "Includes a backpack, a crowbar, a hammer, 10 pitons, 10 torches, a tinderbox, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it.",
				"cost_gp": "12",
				"weight_lbs": "61.5",
				"type": "Equipment Pack",
				"image_url": null,
				"id": "7a4407d5-1a1e-43c7-af3a-6b1071aa5aaa",
				"properties": [],
				"details": {
					"contents": [
						{
							"id": "61ad9968-6cb8-4c79-84da-a7ece51a5118",
							"name": "Crowbar",
							"amount": "1"
						},
						{
							"id": "01d56226-1bc0-4c0d-9684-09c26ccc7e87",
							"name": "Backpack",
							"amount": "1"
						},
						{
							"id": "56ec76fd-d051-4ba7-b9eb-77534172918e",
							"name": "Hammer",
							"amount": "1"
						},
						{
							"id": "08e10634-85cc-4660-a275-fd484c359d83",
							"name": "Piton",
							"amount": "10"
						},
						{
							"id": "f9f65824-9208-44af-a921-959fa057d459",
							"name": "Torch",
							"amount": "10"
						},
						{
							"id": "a849bdfd-bb67-40e8-bf6d-dd9c0c9ae4fa",
							"name": "Tinderbox",
							"amount": "1"
						},
						{
							"id": "36b93b7e-f90d-497f-b99c-ca497e895fab",
							"name": "Waterskin",
							"amount": "1"
						},
						{
							"id": "5bc9fab4-a970-43dc-8eec-2768dabcd4b9",
							"name": "Rope, Hempen (50 feet)",
							"amount": "1"
						}
					]
				}
			},
			{
				"name": "Dagger",
				"description": "A Dagger. Its pointy. Very.",
				"cost_gp": "25",
				"weight_lbs": "2",
				"type": "Weapon",
				"image_url": null,
				"id": "02f991e5-52d7-4311-aad6-edc65013b702",
				"properties": [
					{
						"property_id": "8636717e-b004-451e-9f6d-900075d7ba2d",
						"name": "Thrown",
						"details": "30/40",
						"description": "If a weapon has the thrown property, you can throw the weapon to make a ranged attack. If the weapon is a melee weapon, you use the same ability modifier for that attack roll and damage roll that you would use for a melee attack with the weapon. For example, if you throw a handaxe, you use your Strength, but if you throw a dagger, you can use either your Strength or your Dexterity, since the dagger has the finesse property."
					}
				],
				"details": {
					"ranged": false,
					"proficiency": "simple weapon",
					"damage_roll": "1d4",
					"damage_type": "piercing",
					"ammo_type": ""
				}
			}
		],

		character: [
			{
				"owner_id": "4a52d12b-c6b2-4372-b882-ea8085967bda",
				"id": "f442f249-1271-4fe5-96fb-90f11003c001",
				"name": "Orryn Daergel",
				"level": 10,
				"class": "Rougue",
				"background": "Charlatan",
				"race": "Forest Gnome",
				"alignment": "Chaotic Neutral",
				"xp": 350,
				"combat": {
					"armor_class": 15,
					"initiative": 4,
					"speed": 25,
					"hp": 25,
					"hp_max": 25,
					"hp_temp": 0,
					"hit_dice": "1d8+4",
					"death_save_success": 0,
					"death_save_fail": 0
				},
				"skills": {
					"Strength": {
						"value": 6,
						"modifier": -1
					},
					"Dexterity": {
						"value": 18,
						"modifier": 1
					},
					"Condition": {
						"value": 18,
						"modifier": 1
					},
					"Intelligence": {
						"value": 19,
						"modifier": 1
					},
					"Wisdom": {
						"value": 14,
						"modifier": 1
					},
					"Charisma": {
						"value": 10,
						"modifier": 1
					}
				},
				"skill_proficiencies": {
					"strenght": false,
					"dexterity": true,
					"constitution": false,
					"intelligence": false,
					"wisdom": false,
					"charisma": false,
					"acrobatics": true,
					"animal_handling": false,
					"arcana": false,
					"athletics": false,
					"deception": true,
					"history": false,
					"insight": false,
					"intimidation": false,
					"investigation": false,
					"medicine": false,
					"nature": false,
					"perception": true,
					"performance": false,
					"persuasion": false,
					"religion": false,
					"sleight_of_hand": true,
					"stealth": true,
					"survival": false,
					"proficiency_bonus": 2
				},
				"details": {
					"personality": "I'm a born gambler who can't resist taking a \nrisk for a potential payoff",
					"ideals": "Creativity. I never run the same con twice. ",
					"bonds": "I escaped poverty once by robbing an \nimportant person, and I'm wanted for it.",
					"flaws": "I'm convinced that no one could ever fool me the way I fool others."
				},
				"money": {
					"copper": 15,
					"silver": 180,
					"electrum": 0,
					"gold": 31,
					"platinum": 0
				},
				"proficiencies": [
					{
						"id": "7cef5aa4-398f-4fa6-a9db-873742c4836d",
						"name": "Common",
						"type": "Languages"
					},
					{
						"id": "598453ef-f24f-4eee-945f-274cb85f941f",
						"name": "Gnomish",
						"type": "Languages"
					},
					{
						"id": "371884bd-ab10-4819-b7cd-453fa21625cd",
						"name": "Thieves' Cant",
						"type": "Languages"
					},
					{
						"id": "efdfb811-14b5-4edd-836b-91f87826f9a9",
						"name": "simple weapons",
						"type": "Weapons"
					},
					{
						"id": "88f85677-fc24-41e3-bef4-51e0d9262ddd",
						"name": "hand crossbow",
						"type": "Weapons"
					},
					{
						"id": "80ca0a4a-1d9b-4c13-95a9-0482d0c53b3e",
						"name": "longsword",
						"type": "Weapons"
					},
					{
						"id": "e727c13e-c7a8-4ff9-aec3-f432eebc5537",
						"name": "rapier",
						"type": "Weapons"
					},
					{
						"id": "5e8703ae-4034-4e2f-9bfe-2745d83d6301",
						"name": "light armor",
						"type": "Armor"
					}
				],
				"traits": [
					{
						"id": "12b8cb68-66fd-4e6c-9476-c98c2bcdfb96",
						"name": "Expertise (Rogue)",
						"description": "At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves’ tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.\n\nAt 6th level, you can choose two more of your proficiencies (in skills or with thieves’ tools) to gain this benefit. "
					},
					{
						"id": "808b376a-a870-40c9-9bd2-35154817110d",
						"name": "False Identity",
						"description": "You have created a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona. Additionally, you can forge documents including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy. "
					},
					{
						"id": "467d7654-6609-4e6b-95c3-a8d088032c3b",
						"name": "Gnome Cunning",
						"description": "You have advantage on all Intelligence, Wisdom and Charisma saving throws against magic. "
					},
					{
						"id": "b305a4ef-f594-43a6-95bd-2e560efc370e",
						"name": "Sneak Attack",
						"description": "Beginning at 1st level, you know how to strike subtly and exploit a foe’s distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll.\n\nThe attack must use a finesse or a ranged weapon.\n\nYou don’t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll.\n\nThe amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table. "
					},
					{
						"id": "3cd50bd3-728d-4f31-8419-8640a40c492b",
						"name": "Cunning Action",
						"description": "Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action."
					},
					{
						"id": "716c8038-2065-4d9f-bc2d-eee851f27a40",
						"name": "Natural Illusionist",
						"description": " You know the Minor Illusion cantrip. Intelligence is your spellcasting modifier for it."
					},
					{
						"id": "3e4ee59d-3dd7-4bf4-8bd2-246bbed3394a",
						"name": "Speak with Small Beasts",
						"description": " Through sound and gestures, you may communicate simple ideas with Small or smaller beasts."
					}
				],
				"items": [
					{
						"name": "Disguise Kit",
						"id": "b8095b2b-f272-462c-8773-5b0e0a5b75ab",
						"amount": "1",
						"equipped": false
					}
				]
			},
			{
				"owner_id": "4a52d12b-c6b2-4372-b882-ea8085967bda",
				"id": "f442f249-1271-4fe5-96fb-90f11003c001",
				"name": "Meow die Superkatze",
				"level": 10,
				"class": "Rougue",
				"background": "Charlatan",
				"race": "Forest Gnome",
				"alignment": "Chaotic Neutral",
				"xp": 350,
				"combat": {
					"armor_class": 15,
					"initiative": 4,
					"speed": 25,
					"hp": 25,
					"hp_max": 25,
					"hp_temp": 0,
					"hit_dice": "1d8+4",
					"death_save_success": 0,
					"death_save_fail": 0
				},
				"skills": {
					"Strength": {
						"value": 6,
						"modifier": -1
					},
					"Dexterity": {
						"value": 18,
						"modifier": 1
					},
					"Condition": {
						"value": 18,
						"modifier": 1
					},
					"Intelligence": {
						"value": 19,
						"modifier": 1
					},
					"Wisdom": {
						"value": 14,
						"modifier": 1
					},
					"Charisma": {
						"value": 10,
						"modifier": 1
					}
				},
				"skill_proficiencies": {
					"strenght": false,
					"dexterity": true,
					"constitution": false,
					"intelligence": false,
					"wisdom": false,
					"charisma": false,
					"acrobatics": true,
					"animal_handling": false,
					"arcana": false,
					"athletics": false,
					"deception": true,
					"history": false,
					"insight": false,
					"intimidation": false,
					"investigation": false,
					"medicine": false,
					"nature": false,
					"perception": true,
					"performance": false,
					"persuasion": false,
					"religion": false,
					"sleight_of_hand": true,
					"stealth": true,
					"survival": false,
					"proficiency_bonus": 2
				},
				"details": {
					"personality": "I'm a born gambler who can't resist taking a \nrisk for a potential payoff",
					"ideals": "Creativity. I never run the same con twice. ",
					"bonds": "I escaped poverty once by robbing an \nimportant person, and I'm wanted for it.",
					"flaws": "I'm convinced that no one could ever fool me the way I fool others."
				},
				"money": {
					"copper": 15,
					"silver": 180,
					"electrum": 0,
					"gold": 31,
					"platinum": 0
				},
				"proficiencies": [
					{
						"id": "7cef5aa4-398f-4fa6-a9db-873742c4836d",
						"name": "Common",
						"type": "Languages"
					},
					{
						"id": "598453ef-f24f-4eee-945f-274cb85f941f",
						"name": "Gnomish",
						"type": "Languages"
					},
					{
						"id": "371884bd-ab10-4819-b7cd-453fa21625cd",
						"name": "Thieves' Cant",
						"type": "Languages"
					},
					{
						"id": "efdfb811-14b5-4edd-836b-91f87826f9a9",
						"name": "simple weapons",
						"type": "Weapons"
					},
					{
						"id": "88f85677-fc24-41e3-bef4-51e0d9262ddd",
						"name": "hand crossbow",
						"type": "Weapons"
					},
					{
						"id": "80ca0a4a-1d9b-4c13-95a9-0482d0c53b3e",
						"name": "longsword",
						"type": "Weapons"
					},
					{
						"id": "e727c13e-c7a8-4ff9-aec3-f432eebc5537",
						"name": "rapier",
						"type": "Weapons"
					},
					{
						"id": "5e8703ae-4034-4e2f-9bfe-2745d83d6301",
						"name": "light armor",
						"type": "Armor"
					}
				],
				"traits": [
					{
						"id": "12b8cb68-66fd-4e6c-9476-c98c2bcdfb96",
						"name": "Expertise (Rogue)",
						"description": "At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves’ tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.\n\nAt 6th level, you can choose two more of your proficiencies (in skills or with thieves’ tools) to gain this benefit. "
					},
					{
						"id": "808b376a-a870-40c9-9bd2-35154817110d",
						"name": "False Identity",
						"description": "You have created a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona. Additionally, you can forge documents including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy. "
					},
					{
						"id": "467d7654-6609-4e6b-95c3-a8d088032c3b",
						"name": "Gnome Cunning",
						"description": "You have advantage on all Intelligence, Wisdom and Charisma saving throws against magic. "
					},
					{
						"id": "b305a4ef-f594-43a6-95bd-2e560efc370e",
						"name": "Sneak Attack",
						"description": "Beginning at 1st level, you know how to strike subtly and exploit a foe’s distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll.\n\nThe attack must use a finesse or a ranged weapon.\n\nYou don’t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll.\n\nThe amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table. "
					},
					{
						"id": "3cd50bd3-728d-4f31-8419-8640a40c492b",
						"name": "Cunning Action",
						"description": "Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action."
					},
					{
						"id": "716c8038-2065-4d9f-bc2d-eee851f27a40",
						"name": "Natural Illusionist",
						"description": " You know the Minor Illusion cantrip. Intelligence is your spellcasting modifier for it."
					},
					{
						"id": "3e4ee59d-3dd7-4bf4-8bd2-246bbed3394a",
						"name": "Speak with Small Beasts",
						"description": " Through sound and gestures, you may communicate simple ideas with Small or smaller beasts."
					}
				],
				"items": [
					{
						"name": "Disguise Kit",
						"id": "b8095b2b-f272-462c-8773-5b0e0a5b75ab",
						"amount": "1",
						"equipped": false
					},
					{
						"name": "Dagger",
						"id": "02f991e5-52d7-4311-aad6-edc65013b702",
						"amount": "1",
						"equipped": false
					},
					{
						"name": "Leather Armor",
						"id": "ca05dead-b3a1-4e46-b215-b5e07dddc470",
						"amount": "1",
						"equipped": true
					}
				]
			}

		]
	},
	mutations: {
		setRegistered(state, registered) {
			state.registered = registered;
		},
		setCurrentMap(state, map) {
			state.currentMap = map;
		}
	},
	actions: {},
	modules: {},
});
