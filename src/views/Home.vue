<template>
  <div>
    <PreviewHero/>
    <br>
    <v-container>
      <WeaponOfTheDay :weapon="weapon" />
      <br>
      <hr>
      <br>
      <h1>Notes:</h1>
      <br>
      <h2>Weapon of the day</h2>
      <p>Random Weapon that gets picket out by server</p>
      <br>
      <h2>Weapons</h2>
      <p>list of all items in database</p>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import PreviewHero from "@/components/PreviewHero.vue";
import WeaponOfTheDay from "@/components/WeaponOfTheDay.vue"

export default {
  name: "Home",
  components: {
    PreviewHero,
    WeaponOfTheDay
  },
  computed: {
    weapon() {
      return this.$store.state.weapons[0];
    }
  }
};
</script>
