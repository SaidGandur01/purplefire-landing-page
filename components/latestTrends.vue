<template>
  <div class="latest-trends">
    <div class="latest-trends--subscribe">
      <h3 class="title">Be aware of the latest trends</h3>
      <span class="information">Stay informed of new trends, but also of our various offers.</span>
      <span class="find-more">Find out more <CoreIconsArrowRight/> </span>
    </div>
    <div class="latest-trends--input">
      <input type="email" placeholder="email@address.com">
      <button>
        <span>Subscribe</span>
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.latest-trends {
  @include flex-attributes(row, center, space-between);
  width: 100%;
  height: 100%;
  padding: 10rem 15rem 10rem 15rem;

  &--subscribe {
    @include flex-attributes(column, flex-start, flex-start);
    gap: 2rem;

    .title {
      @include font-attributes(
        3.5rem,
        --color-brand-neutral-200,
        300,
        -0.3px,
        4rem
      );
      font-family: 'Merriweather', sans-serif;
    }

    .information {
      @include font-attributes(
        1.8rem,
        --color-brand-primary-200,
        400,
        0px,
        2.5rem
      );
    }

    .find-more {
      @include font-attributes(
        1.7rem,
        --color-brand-primary-100,
        700,
        0.3px,
        2.5rem
      );
      @include flex-attributes(row, center, flex-start);
      cursor: pointer;
      gap: 1rem;
      font-family: 'Karla', sans-serif;
    }
  }

  &--input {
    @include flex-attributes(row, center, flex-start);
    gap: 2rem;
    width: 40%;
    height: 100%;

    input {
      @include font-attributes(
        1.8rem,
        --color-brand-primary-200,
        400,
        0,
        2.5rem
      );
      width: 100%;
      border: 1px solid var(--color-background-page);
      height: 100%;
      padding: 15px 15.095px 10px 15px;
      background: lighten(#F3EEE8, 3%);
      transition: border 0.3s;
    }

    input:focus {
      outline: none;
      border: 1px solid var(--color-background-page);;
    }
    input:focus-visible {
      outline: none;
      border: 1px solid var(--color-background-page);;
    }

    button {
      padding: 0.8rem 3rem;
      border-radius: 1px;
      text-transform: capitalize;
      background-color: var(--color-brand-primary-400);

      span {
        @include font-attributes(
          1.7rem,
          --color-white,
          700,
          0.3px,
          2.5rem
        );
        font-family: 'Karla', sans-serif;
      }
    }
  }
}
</style>