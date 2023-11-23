<template>
  <div class="footer">
    <div class="first-row">
      <div class="first-column">
        <h1>antinc</h1>
      </div>
      <div class="second-column">
        <div class="category">
          <h2>Products</h2>
          <span>Furniture</span>
          <span>Decoration</span>
          <span>Storage</span>
          <span>Baby and child</span>
          <span>Connected home</span>
        </div>
        <div class="category">
          <h2>Rooms</h2>
          <span>Living room</span>
          <span>Dining room</span>
          <span>Cooked</span>
          <span>Bedroom</span>
          <span>Bathroom</span>
          <span>Office</span>
          <span>Laundry</span>
          <span>Garage</span>
        </div>
        <div class="category">
          <h2>Services</h2>
          <span>Click and collect</span>
          <span>Conception</span>
          <span>Installation</span>
          <span>Advices</span>
          <span>Gift card</span>
        </div>
        <div class="category">
          <h2>About</h2>
          <span>Our story</span>
          <span>Our stores</span>
          <span>Our partners</span>
        </div>
      </div>
      <div class="third-column">
        <h2>We respect our planet</h2>
        <div class="image-wrapper">
          <img width="242" height="182" src="~/public/images/footer/footer-image.png" alt="footer-image">
        </div>
        <span class="desktop-visible">
          We’re taking positive steps to reduce our impact on the planet. For us, that means retailing responsibly.
        </span>
        <span class="desktop-hidden">
          We’re taking positive steps to reduce our impact on the planet. For us, that means retailing responsibly. We’ve set a number of goals to get us there. 
        </span>
        <span class="learn-more">Learn more<CoreIconsArrowRight/> </span>
      </div>
    </div>
    <div class="second-row">
      <CoreIconsFacebook />
      <CoreIconsTwitter />
      <CoreIconsLinkedin />
      <CoreIconsInstagram />
    </div>
    <div class="third-row">
      <span class="legal-name">&copy; 2021 Agence Dnd</span>
      <div class="terms-conditions">
        <span>Privacy policy</span>
        <span>Term of service</span>
        <span>Language</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  @include flex-attributes(column, normal, space-between);
  padding: 7rem 15rem;
  background-color: var(--color-background-page);

  .first-row {
    @include flex-attributes(row, flex-start, space-between);

    h1 {
      @include font-attributes(
        3.4rem,
        --color-brand-primary-400,
        700,
        2px,
        2.5rem
      );
      font-family: 'Merriweather', sans-serif;
    }

    h2 {
      @include font-attributes(
        2.5rem,
        --color-brand-primary-400,
        600,
        -0.2px,
        3rem
      );
      margin-bottom: 1rem;
    }

    .second-column {
      display: grid;
      width: 70%;
      padding-left: 5rem;
      grid-template-columns: repeat(
        auto-fit,
        minmax(min(100%, 100px), 1fr)
      );

      .category {
        @include flex-attributes(column, normal, flex-start);
        gap: 2rem;

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
    }

    .third-column {
      @include flex-attributes(column, normal, flex-start);
      width: 15%;

      h2 {
        white-space: nowrap;
      }

      .image-wrapper {
        margin-top: 2.2rem;
      }

      .desktop-visible {
        display: block;
      }

      .desktop-hidden {
        display: none;
      }

      span {
        @include font-attributes(
          1.6rem,
          --color-brand-primary-300,
          400,
          0,
          2.5rem
        );
        margin-top: 1rem;
      }

      .learn-more {
        @include font-attributes(
          1.7rem,
          --color-brand-primary-100,
          700,
          0.3px,
          2.5rem
        );
        @include flex-attributes(row, center, flex-start);
        margin-top: 2rem;
        cursor: pointer;
        gap: 1rem;
        font-family: 'Karla', sans-serif;
      }
    }
  }

  .second-row {
    @include flex-attributes(row, flex-start, center);
    gap: 2rem;
    margin-top: 7rem;
    width: 100%;
  }

  .third-row {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;

    .terms-conditions {
      display: flex;
      gap: 5rem;
    }

    span {
      @include font-attributes(
        1.8rem,
        --color-brand-primary-500,
        400,
        0,
        2.5rem
      );
    }
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 4rem;

    .first-row {
      flex-direction: column;

      .first-column {
        width: 100%;

        h1 {
          text-align: center;
        }
      }

      .second-column {
        width: 100%;
        padding: 0;
        margin-top: 5rem;

        display: flex;
        flex-direction: column;
        gap: 5rem;

        h2 {
          color: var(--color-brand-neutral-200);
        }

        .category:nth-child(1) {
          order: 3;
        }

        .category:nth-child(2) {
          order: 4;
        }

        .category:nth-child(3) {
          order: 2;
        }

        .category:nth-child(4) {
          order: 1;
        }
      }

      .third-column {
        width: 100%;
        margin-top: 5rem;

        img {
          width: 100%;
          height: 100%;
        }

        .desktop-visible {
          display: none;
        }

        .desktop-hidden {
          display: block !important;
        }

        span {
          @include font-attributes(
            1.8rem,
            --color-brand-neutral-300,
            400,
            0,
            2.5rem
          );
        }
      }
    }

    .second-row {
      margin: 4rem 0;
    }

    .third-row {
      flex-direction: column;
      margin-top: 0;

      .legal-name {
        margin-top: 4rem;
        order: 2;
      }

      .terms-conditions {
        flex-wrap: wrap;
        gap: 1rem;
        order: 1;

        span {
          margin-right: 2rem;
        }
      }
    }
  }
}
</style>