<template>
  <div class="carousel">
    <ul class="slides">
      <li class="slide">
        <img height="400" width="250" src="~/public/images/carousel/image-1.png" alt="image-1">
      </li>
      <li class="slide">
        <img height="400" width="250" src="~/public/images/carousel/image-2.png" alt="image-2">
      </li>
      <li class="slide">
        <img height="400" width="250" src="~/public/images/carousel/image-3.png" alt="image-3">
      </li>
      <li class="slide">
        <img height="400" width="250" src="~/public/images/carousel/image-4.png" alt="image-4">
      </li>
      <li class="slide">
        <img height="400" width="250" src="~/public/images/carousel/image-5.png" alt="image-5">
      </li>
      <li class="slide">
        <img height="400" width="250" src="~/public/images/carousel/image-6.png" alt="image-6">
      </li>
      <li class="slide">
        <img height="400" width="250" src="~/public/images/carousel/image-7.png" alt="image-7">
      </li>
      <li class="slide">
        <img height="400" width="250" src="~/public/images/carousel/image-8.png" alt="image-8">
      </li>
      <li class="slide">
        <img height="400" width="250" src="~/public/images/carousel/image-9.png" alt="image-9">
      </li>
      <li class="slide">
        <img height="400" width="250" src="~/public/images/carousel/image-10.png" alt="image-10">
      </li>
      <li class="slide">
        <img height="400" width="250" src="~/public/images/carousel/image-11.png" alt="image-11">
      </li>
      <li class="slide">
        <img height="400" width="250" src="~/public/images/carousel/image-12.png" alt="image-12">
      </li>
    </ul>
  </div>
</template>
<style lang="scss" setup>
.carousel {
  width: 100%;
  height: 100%;
  position: relative;

  .slides {
    position: relative;
    width: 100%;
    display: flex;
    gap: 2rem;
    overflow: hidden;
    list-style-type: none;
  }

  .slide {
    flex-shrink: 0;
    animation-name: slide;
    animation-duration: 20s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  .slides:hover .slide {
    // animation-play-state: paused;
  }

  .slide img {
    vertical-align: top;
  }

  .slide:target {
    animation-name: none;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 50;
  }

  img {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background: var(--color-light-gray);
    border-radius: 2rem;
  }
}

@keyframes slide {
  0% { transform: translateX(0); }
  25% { transform: translateX(-250%); }
  50% { transform: translateX(-500%); }
  75% { transform: translateX(-250%); }
  100% { transform: translateX(0); }
}
</style>