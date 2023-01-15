<template>
    <div class="image">
        <img src="./../../public/img/maps/map1.jpeg">
    </div>
</template>

<style scoped>
img {
  max-width: 100%;
}
@media screen and (min-width: 320px) and (max-width: 767px) and (orientation: portrait) {
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