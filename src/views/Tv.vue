<template>
    <div class="image">
      {{ currentMap }}
        <img src="currentMap">
    </div>
</template>

<script>

export default {
  name: "Tv",
  computed: {
      currentMap() {
        let maps = this.$store.state.maps;
        let mapIndex = this.$store.state.currentMap;
        return maps[mapIndex];
      }
  },
  created() {
    let image = document.querySelector(".image");
    console.log(image);
  }
};
</script>

<style scoped>
img {
  max-width: 100%;
  max-height: 90vh;
}
@media screen and (max-width: 767px) and (orientation: portrait) {
  .image {
    transform: rotate(-90deg);
    transform-origin: left top;
    width: 100vh;
    height: 100vw;
    overflow-x: hidden;
    position: absolute;
    top: 100%;
    left: 0;
  }
  img {
    max-width: 90%;
  }
}
</style>