import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    previews: [
      {name: "watch", icon: "mdi-eye-outline"},
      {name: "create", icon: "mdi-pencil-outline"},
      {name: "join", icon: "mdi-account-plus-outline"},
      {name: "TV", icon: "mdi-television"},
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
});
