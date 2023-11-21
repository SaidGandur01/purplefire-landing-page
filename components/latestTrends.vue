<template>
  <div class="latest-trends">
    <div class="header">
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
    <div class="carousel-wrapper">
      <CoreCarousel />
    </div>
    <div class="inspirations">
      <h3>Inspirations</h3>
      <div class="description">
        <span>
          Our experts are keen to stay on top of trends in order to offer you new inspirations for your interior and exterior every day. Remember that to inspire you we have to inspire ourselves and we want to share that with you.
        </span>
      </div>
      <div class="controls">
        <div class="controls-images">
          <CoreIconsControlArrowLeft />
          <CoreIconsControlArrowRight />
        </div>
        <div class="items-counter">
          <span>01 / 05</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.latest-trends {
  @include flex-attributes(column, center, space-between);
  width: 100%;
  height: 100%;
  padding: 10rem 0;

  .header {
    @include flex-attributes(row, center, space-between);
    width: 100%;
  }

  &--subscribe {
    @include flex-attributes(column, flex-start, flex-start);
    padding-left: 15rem;
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
    padding-right: 15rem;
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

    input::placeholder {
      color: var(--color-brand-primary-200);
    }

    input:focus {
      outline: none;
      border: 1px solid var(--color-background-page);
    }
    input:focus-visible {
      outline: none;
      border: 1px solid var(--color-background-page);
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

  .carousel-wrapper {
    margin: 5rem 0;
    width: 100%;
  }

  .inspirations {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2rem 15rem;

    h3 {
      @include font-attributes(
        4.5rem,
        --color-brand-primary-400,
        300,
        -0.3px,
        4rem
      );
      font-family: 'Merriweather', sans-serif;
    }

    .description {
      width: 25%;

      span {
        @include font-attributes(
          1.8rem,
          --color-brand-primary-300,
          400,
          0,
          2.5rem
        );
      }
    }

    .controls {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding-right: 8rem;

      .controls-images {
        display: flex;
        gap: 1.5rem;
      }

      .items-counter {
        span {
          @include font-attributes(
            1.8rem,
            --color-brand-primary-200,
            400,
            0,
            2.5rem
          );
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .latest-trends {
    padding: 7rem 0;

    .header {
      flex-direction: column;
    }

    &--subscribe {
      padding: 0 4rem;
    }

    &--input {
      flex-direction: column;
      padding: 0 4rem;
      width: 100%;
      gap: 3rem;

      input {
        margin-top: 3rem;
      }

      input::placeholder {
        color: var(--color-brand-neutral-300);
      }

      button {
        align-self: baseline;
        width: 90%;
      }
    }

    .carousel-wrapper {
      order: 2;
    }

    .inspirations {
      margin-top: 5rem;
      flex-direction: column;
      padding: 4rem;
      order: 1;

      .description {
        margin-top: 5rem;
        width: 100%;
      }

      .controls {
        display: none;
      }
    }
  }
}
</style>