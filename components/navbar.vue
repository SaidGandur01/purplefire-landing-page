<template>
  <nav class="navbar">
    <div class="left-items">
      <span>antic</span>
      <span>products</span>
      <span>rooms</span>
      <span>services</span>
      <span>inspirations</span>
    </div>
    <div class="right-items">
      <div class="image-container">
        <CoreIconsContact class="contact-image"/>
        <CoreIconsMenuBurger class="menu-image"/>
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
.navbar {
  @include flex-attributes(row, center, space-between);
  width: 100%;
  padding: 2rem 7rem 2rem 15rem;
  position: absolute;
  top: 5%;
  left: 0;
  transform: translate(0, -5%);
  background: transparent;

  .left-items {
    @include flex-attributes(row, center, flex-start);
    gap: 6rem;

    span:first-child {
      @include font-attributes(
        3.4rem,
        --color-brand-primary-100,
        700,
        2px,
        25px
      );
      font-family: 'Merriweather', sans-serif;
    }

    span:not(:first-child) {
      @include font-attributes(
          1.8rem,
          --color-brand-primary-300,
          400,
          0,
          25px
        );
        margin-top: 0.5rem;
      text-transform: capitalize;
    }
  }

  .right-items {
    .image-container {
      .menu-image {
        display: none;
      }
    }
  }
}

@media (max-width: 768px) {
  .navbar {
    padding: 2rem 5rem;

    .left-items {
      span:first-child {
        color: var(--color-white);
      }

      span:not(:first-child) {
        display: none;
      }
    }
    .right-items {
      .image-container {
        .contact-image {
          display: none;
        }
        .menu-image {
          display: block;
          margin-top: 0.5rem;
        }
      }
    }
  }
}
</style>