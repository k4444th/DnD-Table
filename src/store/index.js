import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {

		registered: true,

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
			{ name: "watch", icon: "mdi-eye-outline", url: "/about" },
			{ name: "create", icon: "mdi-pencil-outline", url: "/gamemaster" },
			{ name: "join", icon: "mdi-account-plus-outline", url: "/charactersheet" },
			{ name: "TV", icon: "mdi-television", url: "/tv" },
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

		character: [
			{
				"owner_id": "4a52d12b-c6b2-4372-b882-ea8085967bda",
				"id": "f442f249-1271-4fe5-96fb-90f11003c001",
				"name": "Orryn Daergel Jr. Jr.",
				"level": 10,
				"class": "Rougue",
				"background": "Charlatan",
				"race": "Forest Gnome",
				"alignment": "Chaotic Neutral",
				"xp": 100000,
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
				"skills": [
					{
						"name": "Strength",
						"value": 6,
						"modifier": -1
					},
					{
						"name": "Dexterity",
						"value": 18,
						"modifier": 1
					},
					{
						"name": "Condition",
						"value": 18,
						"modifier": 2
					},
					{
						"name": "Intelligence",
						"value": 19,
						"modifier": 3
					},
					{
						"name": "Wisdom",
						"value": 14,
						"modifier": 4
					},
					{
						"name": "Charisma",
						"value": 10,
						"modifier": 5
					}
				],
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
				name: "Ätzender Tintenkiller",
				avatar: "public/img/shapes/avatar.jpg",
				generalInformation: {
					race: "Schreibutensilien",
					class: "Nervenaufreibend",
					level: 59
				},
				combats: {
					hitpoints: 79,
					xp: 39,
					hitdice: 37
				},
				skillsAndModifier: [
					{
						name: "Strength",
						shortname: "Str",
						modifier: "-2",
						skill: 7
					},
					{
						name: "Dexterity",
						shortname: "Dex",
						modifier: "+4",
						skill: 18
					},
					{
						name: "Constitution",
						shortname: "Con",
						modifier: "+1",
						skill: 13
					},
					{
						name: "Intelligence",
						shortname: "Int",
						modifier: "0",
						skill: 10
					},
					{
						name: "Wisdom",
						shortname: "Wis",
						modifier: "+3",
						skill: 16
					},
					{
						name: "Charisma",
						shortname: "Cha",
						modifier: "+1",
						skill: 12
					},
				],
				traits: [
					{
						name: "Armor Class",
						value: 15
					},
					{
						name: "Initiative",
						value: 0
					},
					{
						name: "Speed",
						value: 35
					}
				],
				skills: [
					{
						name: "Acrobatics",
						skill: "Dex",
						value: "+6",
						selected: Boolean(true)
					},
					{
						name: "Animal Handling",
						skill: "Wis",
						value: "+3",
						selected: false
					},
					{
						name: "Arcana",
						skill: "Int",
						value: "0",
						selected: false
					},
					{
						name: "Athletics",
						skill: "Str",
						value: "-3",
						selected: false
					},
					{
						name: "Deception",
						skill: "Cha",
						value: "+6",
						selected: true
					},
					{
						name: "History",
						skill: "Int",
						value: "0",
						selected: false
					},
					{
						name: "Insight",
						skill: "Wis",
						value: "+3",
						selected: false
					},
					{
						name: "Intimidation",
						skill: "Cha",
						value: "+1",
						selected: false
					},
					{
						name: "Investigation",
						skill: "Int",
						value: "0",
						selected: false
					},
					{
						name: "Medicine",
						skill: "Wis",
						value: "+3",
						selected: false
					},
					{
						name: "Nature",
						skill: "Int",
						value: "0",
						selected: false
					},
					{
						name: "Perception",
						skill: "Wis",
						value: "+5",
						selected: true
					},
					{
						name: "Performance",
						skill: "Cha",
						value: "+1",
						selected: false
					},
					{
						name: "Persuasion",
						skill: "Cha",
						value: "+3",
						selected: true
					},
					{
						name: "Religion",
						skill: "Int",
						value: "0",
						selected: false
					},
					{
						name: "Sleight of Hand",
						skill: "Dex",
						value: "+5",
						selected: true
					},
					{
						name: "Stealth",
						skill: "Dex",
						value: "+10",
						selected: true
					},
					{
						name: "Survival",
						skill: "Wis",
						value: "+3",
						selected: false
					}
				],
				savingThrows: [
					{
						name: "Strength",
						value: "-2",
						selected: false
					},
					{
						name: "Dexterity",
						value: "6",
						selected: true
					},
					{
						name: "Constitution",
						value: "+1",
						selected: false
					},
					{
						name: "Intelligence",
						value: "+2",
						selected: true
					},
					{
						name: "Wisdom",
						value: "+2",
						selected: false
					},
					{
						name: "Charisma",
						value: "+1",
						selected: false
					},
				]
			},
			{
				name: "Leeres Wasserglas",
				avatar: "public/img/shapes/avatar.jpg",
				generalInformation: {
					race: "Getränk",
					class: "Auffülbar",
					level: 59
				},
				combats: {
					hitpoints: 79,
					xp: 39,
					hitdice: 37
				},
				skillsAndModifier: [
					{
						name: "Strength",
						shortname: "Str",
						modifier: "-2",
						skill: 7
					},
					{
						name: "Dexterity",
						shortname: "Dex",
						modifier: "+4",
						skill: 18
					},
					{
						name: "Constitution",
						shortname: "Con",
						modifier: "+1",
						skill: 13
					},
					{
						name: "Intelligence",
						shortname: "Int",
						modifier: "0",
						skill: 10
					},
					{
						name: "Wisdom",
						shortname: "Wis",
						modifier: "+3",
						skill: 16
					},
					{
						name: "Charisma",
						shortname: "Cha",
						modifier: "+1",
						skill: 12
					},
				],
				traits: [
					{
						name: "Armor Class",
						value: 15
					},
					{
						name: "Initiative",
						value: 0
					},
					{
						name: "Speed",
						value: 35
					}
				],
				skills: [
					{
						name: "Acrobatics",
						skill: "Dex",
						value: "+6",
						selected: Boolean(true)
					},
					{
						name: "Animal Handling",
						skill: "Wis",
						value: "+3",
						selected: false
					},
					{
						name: "Arcana",
						skill: "Int",
						value: "0",
						selected: false
					},
					{
						name: "Athletics",
						skill: "Str",
						value: "-3",
						selected: false
					},
					{
						name: "Deception",
						skill: "Cha",
						value: "+6",
						selected: true
					},
					{
						name: "History",
						skill: "Int",
						value: "0",
						selected: false
					},
					{
						name: "Insight",
						skill: "Wis",
						value: "+3",
						selected: false
					},
					{
						name: "Intimidation",
						skill: "Cha",
						value: "+1",
						selected: false
					},
					{
						name: "Investigation",
						skill: "Int",
						value: "0",
						selected: false
					},
					{
						name: "Medicine",
						skill: "Wis",
						value: "+3",
						selected: false
					},
					{
						name: "Nature",
						skill: "Int",
						value: "0",
						selected: false
					},
					{
						name: "Perception",
						skill: "Wis",
						value: "+5",
						selected: true
					},
					{
						name: "Performance",
						skill: "Cha",
						value: "+1",
						selected: false
					},
					{
						name: "Persuasion",
						skill: "Cha",
						value: "+3",
						selected: true
					},
					{
						name: "Religion",
						skill: "Int",
						value: "0",
						selected: false
					},
					{
						name: "Sleight of Hand",
						skill: "Dex",
						value: "+5",
						selected: true
					},
					{
						name: "Stealth",
						skill: "Dex",
						value: "+10",
						selected: true
					},
					{
						name: "Survival",
						skill: "Wis",
						value: "+3",
						selected: false
					}
				],
				savingThrows: [
					{
						name: "Strength",
						value: "-2",
						selected: false
					},
					{
						name: "Dexterity",
						value: "6",
						selected: true
					},
					{
						name: "Constitution",
						value: "+1",
						selected: false
					},
					{
						name: "Intelligence",
						value: "+2",
						selected: true
					},
					{
						name: "Wisdom",
						value: "+2",
						selected: false
					},
					{
						name: "Charisma",
						value: "+1",
						selected: false
					},
				]
			},
			{
				name: "Meow die Superkatze",
				avatar: "public/img/shapes/avatar.jpg",
				generalInformation: {
					race: "Cat",
					class: "Very beautiful",
					level: 59
				},
				combats: {
					hitpoints: 79,
					xp: 39,
					hitdice: 37
				},
				skillsAndModifier: [
					{
						name: "Strength",
						shortname: "Str",
						modifier: "-2",
						skill: 7
					},
					{
						name: "Dexterity",
						shortname: "Dex",
						modifier: "+4",
						skill: 18
					},
					{
						name: "Constitution",
						shortname: "Con",
						modifier: "+1",
						skill: 13
					},
					{
						name: "Intelligence",
						shortname: "Int",
						modifier: "0",
						skill: 10
					},
					{
						name: "Wisdom",
						shortname: "Wis",
						modifier: "+3",
						skill: 16
					},
					{
						name: "Charisma",
						shortname: "Cha",
						modifier: "+1",
						skill: 12
					},
				],
				traits: [
					{
						name: "Armor Class",
						value: 15
					},
					{
						name: "Initiative",
						value: 0
					},
					{
						name: "Speed",
						value: 35
					}
				],
				skills: [
					{
						name: "Acrobatics",
						skill: "Dex",
						value: "+6",
						selected: Boolean(true)
					},
					{
						name: "Animal Handling",
						skill: "Wis",
						value: "+3",
						selected: false
					},
					{
						name: "Arcana",
						skill: "Int",
						value: "0",
						selected: false
					},
					{
						name: "Athletics",
						skill: "Str",
						value: "-3",
						selected: false
					},
					{
						name: "Deception",
						skill: "Cha",
						value: "+6",
						selected: true
					},
					{
						name: "History",
						skill: "Int",
						value: "0",
						selected: false
					},
					{
						name: "Insight",
						skill: "Wis",
						value: "+3",
						selected: false
					},
					{
						name: "Intimidation",
						skill: "Cha",
						value: "+1",
						selected: false
					},
					{
						name: "Investigation",
						skill: "Int",
						value: "0",
						selected: false
					},
					{
						name: "Medicine",
						skill: "Wis",
						value: "+3",
						selected: false
					},
					{
						name: "Nature",
						skill: "Int",
						value: "0",
						selected: false
					},
					{
						name: "Perception",
						skill: "Wis",
						value: "+5",
						selected: true
					},
					{
						name: "Performance",
						skill: "Cha",
						value: "+1",
						selected: false
					},
					{
						name: "Persuasion",
						skill: "Cha",
						value: "+3",
						selected: true
					},
					{
						name: "Religion",
						skill: "Int",
						value: "0",
						selected: false
					},
					{
						name: "Sleight of Hand",
						skill: "Dex",
						value: "+5",
						selected: true
					},
					{
						name: "Stealth",
						skill: "Dex",
						value: "+10",
						selected: true
					},
					{
						name: "Survival",
						skill: "Wis",
						value: "+3",
						selected: false
					}
				],
				savingThrows: [
					{
						name: "Strength",
						value: "-2",
						selected: false
					},
					{
						name: "Dexterity",
						value: "6",
						selected: true
					},
					{
						name: "Constitution",
						value: "+1",
						selected: false
					},
					{
						name: "Intelligence",
						value: "+2",
						selected: true
					},
					{
						name: "Wisdom",
						value: "+2",
						selected: false
					},
					{
						name: "Charisma",
						value: "+1",
						selected: false
					},
				]
			}
		]
	},
	mutations: {
		setRegistered(state, registered) {
			state.registered = registered;
		}
	},
	actions: {},
	modules: {},
});
