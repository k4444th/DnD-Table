import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    previews: [
      {name: "watch", icon: "mdi-eye-outline", url: "/about"},
      {name: "create", icon: "mdi-pencil-outline", url: "/about"},
      {name: "join", icon: "mdi-account-plus-outline", url: "/charactersheet"},
      {name: "TV", icon: "mdi-television", url: "/about"},
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
        avatar: "/",
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
        traits: [
          {
            name: "strength",
            modifier: -2,
            skill: 7
          },
          {
            name: "dexterity",
            modifier: +4,
            skill: 18
          },
          {
            name: "constitution",
            modifier: +1,
            skill: 13
          },
          {
            name: "intelligence",
            modifier: 0,
            skill: 10
          },
          {
            name: "wisdom",
            modifier: +3,
            skill: 16
          },
          {
            name: "charisma",
            modifier: +1,
            skill: 12
          },
        ]
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
});
