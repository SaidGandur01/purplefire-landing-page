<template>
  <div id="overview-details" class="overview-information">
    <div class="first-column">
      <div class="first-column--content">
        <h2>We stay by your <br> side to design <br class="mobile-hidden"> your projects</h2>
        <span>Find out more <CoreIconsArrowRight/> </span>
      </div>
    </div>
    <div class="second-column">
      <div class="second-column--content">
        <div class="first-row">
          <div class="item-description">
            <h3>Our Advices</h3>
            <span>What if you took advantage of this rather special period to rethink your interior? You spend more time at home so you might as well feel good there.</span>
          </div>
          <div class="item-description">
            <h3>Click and Collect</h3>
            <span>Adapted and contactless. Free from € 200 of purchases in stores offering the service.</span>
          </div>
        </div>
        <div class="second-row">
          <div class="item-description">
            <h3>Conception Service</h3>
            <span>Personalized service with an expert advisor for your interior and exterior decoration or layout projects. </span>
          </div>

          <div class="item-description">
            <h3>Installation Service</h3>
            <span>Our furniture packaged in flat packs are designed for easy assembly. But you can call on our partner.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.overview-information {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-background-page);
  padding: 10rem 0;

  .first-column,
  .second-column {
    width: 100%;
  }

  .first-column {
    &--content {
      @include flex-attributes(column, flex-start, flex-start);
      gap: 5rem;
      width: 100%;
      height: 100%;
      padding-left: 15rem;

      h2 {
        @include font-attributes(
          5.5rem,
          --color-brand-primary-300,
          300,
          -0.6px,
          6rem
        );
        font-family: 'Merriweather', sans-serif;
      }

      span {
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
  }

  .second-column {
    &--content{
      @include flex-attributes(column, flex-start, center);
      padding-left: 4rem;
      gap: 5rem;
    }

    .first-row,
    .second-row {
      @include flex-attributes(row, flex-start, flex-start);
      width: 100%;
      gap: 5rem;
    }

    .item-description {
      @include flex-attributes(column, flex-start, flex-start);
      gap: 2rem;
      width: 35%;

      h3 {
        @include font-attributes(
          2.5rem,
          --color-brand-primary-100,
          600,
          -0.2px,
          3rem
        );
      }

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

@media (max-width: 1200px) {
  .overview-information {
    .first-column {
      &--content {
        padding-left: 7rem;
      }
    }
  }
}

@media (max-width: 768px) {
  .overview-information {
    padding: 7rem 4rem;
    gap: 4rem;
    flex-direction: column;

    .first-column--content {
      padding: 0rem;
      gap: 3.5rem;

      .mobile-hidden {
        display: none
      }

      h2 {
        @include font-attributes(
          3.5rem,
          --color-brand-primary-400,
          400,
          -0.3px,
          4rem
        );
      }

      span {
        @include font-attributes(
          1.7rem,
          --color-brand-primary-100,
          900,
          0.3px,
          2.5rem
        );
        font-family: 'Lato', sans-serif;
      }
    }

    .second-column--content {
      padding: 0;

      .first-row,
      .second-row {
        flex-direction: column;
      }

      .item-description {
        width: 100%;
        gap: 1rem;
      }
    }
  }
}
</style>