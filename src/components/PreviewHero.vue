<template>
  <v-parallax src="./../../public/img/hero.jpeg" height="600">
      <v-container>
        <v-row>
          <v-col v-for="preview in previews" :key="preview.name" cols="6" sm="3">
            <Preview v-bind:preview="preview"/>
          </v-col>
        </v-row>
    </v-container>
  </v-parallax>
</template>

<script>
// @ is an alias to /src
import Preview from "@/components/Preview.vue";

export default {
  components: {
    Preview
  },
  computed: {
    previews() {
      return this.$store.state.previews;
    }
  }
};
</script>

<style scoped>
</style>