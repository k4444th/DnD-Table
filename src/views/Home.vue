<template>
  <div>
    <PreviewHero/>
    <br>
    <v-container>
      <WeaponOfTheDay :weapon="wotd" />
      <br>
      <hr>
      <br>
      <v-row>
        <v-col class="col-6 col-md-3 col-lg-2" v-for="weapon in weapons" :key="weapon.name">
          <Weapon :weapon="weapon"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import PreviewHero from "@/components/PreviewHero.vue";
import WeaponOfTheDay from "@/components/WeaponOfTheDay.vue"
import Weapon from "@/components/Weapon.vue"

export default {
  name: "Home",
  components: {
    PreviewHero,
    WeaponOfTheDay,
    Weapon
  },
  computed: {
    wotd() {
      return this.$store.state.weapons[this.$store.state.wotd];
    },
    weapons() {
      return this.$store.state.weapons;
    }
  }
};
</script>
