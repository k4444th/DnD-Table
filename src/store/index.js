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
      {name: "watch", icon: "mdi-eye-outline", url: "/about"},
      {name: "create", icon: "mdi-pencil-outline", url: "/gamemaster"},
      {name: "join", icon: "mdi-account-plus-outline", url: "/charactersheet"},
      {name: "TV", icon: "mdi-television", url: "/tv"},
    ],

    weapons: [
      {
        name: "Sword",
        image: "public/img/shapes/shield1.svg",
        description: "You can cut your vegetables using a sword. Just be carefull not to hurt your fingers. It is very sharp so always hande it with caution. It would be the best, if you didn't use it at all",
        properties: [
          {name: "sharpness", score: 8},
          {name: "coolness", score: 6}
        ]
      }
    ],

    character: [
      {
        name: "Blablablub der Wackelpudding",
        avatar: "public/img/shapes/avatar.jpg",
        generalInformation: {
          race: "Deamon",
          class: "Purple Caterpillar",
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
        ],
        quotes: [
          {
            name: "personality traits",
            quote: "personality trait quote"
          },
          {
            name: "ideals",
            quote: "ideals quote"
          },
          {
            name: "bonds",
            quote: "bonds quote"
          },
          {
            name: "flaws",
            quote: "flaws quote"
          },
          {
            name: "feautures and traits",
            quote: "feautures and traits quote"
          },
          {
            name: "other profiencies and languages",
            quote: "other profiencies and languages quote"
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
