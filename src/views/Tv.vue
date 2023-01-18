<template>
    <div class="image">
        <img :src="maps[currentMap]">
    </div>
</template>

<script>
import map1 from "./../../public/img/maps/map1.jpeg";
import map2 from "./../../public/img/maps/map2.jpeg";

export default {
  name: "Tv",
  data() {
    return {
      maps: [map1, map2]
    }
  },
  computed: {
      currentMap() {
        return this.$store.state.currentMap;
      },
  },
  created() {
    let image = document.querySelector(".image");
    console.log(image);
  }
};
</script>

<style scoped>
.image {
  text-align: center;
}

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